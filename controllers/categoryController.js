'use strict';

const db = require('../database/models');
const Category = db.Category;

const categoryController = {
  // Mostrar todas las categorías
  getCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.render('categories/index', { categories });
    } catch (error) {
      console.error('Error al obtener categorías:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  // Mostrar formulario para agregar una categoría
  getAddForm: (req, res) => {
    res.render('categories/addCategory');
  },

  // Crear una nueva categoría
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

  // Mostrar formulario para editar una categoría
  getEditForm: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const category = await Category.findByPk(categoryId);

      if (!category) {
        return res.status(404).send('Categoría no encontrada');
      }

      res.render('categories/editCategory', { category });
    } catch (error) {
      console.error('Error al obtener la categoría:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  // Actualizar una categoría
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

  // Eliminar una categoría
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
  }
};

module.exports = categoryController;
