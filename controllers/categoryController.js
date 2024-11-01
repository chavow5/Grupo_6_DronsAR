'use strict';

const db = require('../database/models');
const Category = db.Category;

const categoryController = {
  // Mostrar todas las categorías para vistas
  getCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.render('categories/index', { categories });
    } catch (error) {
      console.error('Error al obtener categorías:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  // API: Mostrar todas las categorías en JSON
  apiGetCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (error) {
      console.error('Error al obtener categorías (API):', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  // Mostrar formulario para agregar una categoría
  getAddForm: (req, res) => {
    res.render('categories/agregarCategoria');
  },

  // Crear una nueva categoría para vistas
  create: async (req, res) => {
    try {
      const { nombre } = req.body;
      if (!nombre) {
        return res.status(400).send('El nombre de la categoría es obligatorio');
      }
      await Category.create({ nombre });
      res.redirect('/categories');
    } catch (error) {
      console.error('Error al crear categoría:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  // API: Crear una nueva categoría en JSON
  apiCreate: async (req, res) => {
    try {
      const { nombre } = req.body;
      if (!nombre) {
        return res.status(400).json({ error: 'El nombre de la categoría es obligatorio' });
      }
      const newCategory = await Category.create({ nombre });
      res.status(201).json(newCategory);
    } catch (error) {
      console.error('Error al crear categoría (API):', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  // Mostrar formulario para editar una categoría
  getEditForm: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).send('Categoría no encontrada');
      }
      res.render('categories/editarCategoria', { category });
    } catch (error) {
      console.error('Error al obtener la categoría:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  // API: Obtener una categoría específica en JSON
  apiGetCategory: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
      }
      res.json(category);
    } catch (error) {
      console.error('Error al obtener la categoría (API):', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  // Actualizar una categoría para vistas
  update: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const { nombre } = req.body;
      if (!nombre) {
        return res.status(400).send('El nombre de la categoría es obligatorio');
      }
      await Category.update({ nombre }, { where: { id: categoryId } });
      res.redirect('/categories');
    } catch (error) {
      console.error('Error al actualizar categoría:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  // API: Actualizar una categoría en JSON
  apiUpdate: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const { nombre } = req.body;
      if (!nombre) {
        return res.status(400).json({ error: 'El nombre de la categoría es obligatorio' });
      }
      await Category.update({ nombre }, { where: { id: categoryId } });
      res.json({ message: 'Categoría actualizada con éxito' });
    } catch (error) {
      console.error('Error al actualizar categoría (API):', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  // Eliminar una categoría para vistas
  delete: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).send('Categoría no encontrada');
      }
      await Category.destroy({ where: { id: categoryId } });
      res.redirect('/categories');
    } catch (error) {
      console.error('Error al eliminar categoría:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  // API: Eliminar una categoría en JSON
  apiDelete: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
      }
      await Category.destroy({ where: { id: categoryId } });
      res.json({ message: 'Categoría eliminada con éxito' });
    } catch (error) {
      console.error('Error al eliminar categoría (API):', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
};

module.exports = categoryController;
