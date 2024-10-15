'use strict';

const db = require('../database/models');
const Product = db.Product;
const crypto = require('crypto');

const dronController = {
  // Método para mostrar todos los productos
  getProductos: async (req, res) => {
    try {
      const drones = await Product.findAll(); // Obtiene todos los productos
      console.log(drones.map(d => d.precio)); // Esto imprimirá los precios de todos los drones
      res.render('products/productos', { drones }); // Renderiza la vista con los productos
    } catch (error) {
      console.error('Error al obtener productos:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  // Método para mostrar el formulario de agregar producto
  getAddForm: (req, res) => {
    res.render('products/agregarProducto'); // Renderiza el formulario para agregar un producto
  },

  // Método para agregar un producto
  create: async (req, res) => {
    try {
      const { nombre, marca, modelo, descripcion, categoria, precio, peso, duracionBateria, camara, tipoSensores, altura, velocidad, descuento, image } = req.body;

      // Validaciones simples (se puede mejorar con más validaciones)
      if (!nombre || !marca || !precio) {
        throw new Error('Los campos nombre, marca y precio son obligatorios');
      }

      // Crear el nuevo producto
      const newProduct = await Product.create({
        id: crypto.randomUUID(),
        nombre,
        marca,
        modelo,
        descripcion,
        categoria,
        precio,
        peso,
        duracionBateria,
        camara,
        tipoSensores,
        altura,
        velocidad,
        descuento,
        image: req.file ? req.file.filename : 'default.png' // Si no se sube imagen, usar default
      });

      // Redirigir a la lista de productos
      res.redirect('/productos');
    } catch (error) {
      console.error('Error al crear el producto:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  // Método para mostrar el detalle de un producto
  // Método para mostrar el detalle de un producto
getProductoById: async (req, res) => {
  try {
    const productId = req.params.id; // Obtenemos el id del producto desde los parámetros
    const product = await Product.findByPk(productId); // Buscamos el producto en la base de datos
    
    if (!product) {
      return res.status(404).send('Producto no encontrado'); // Si no se encuentra, devolvemos un error
    }
    res.render('products/detalle-producto', { dron: product });

  } catch (error) {
    console.error('Error al obtener el detalle del producto:', error);
    res.status(500).send('Error interno del servidor');
  }
},


  // Método para mostrar el formulario de edición
  getEditForm: async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findByPk(productId);

      if (!product) {
        return res.status(404).send('Producto no encontrado');
      }
      
      res.render('products/editarProducto', { dron: product });
    } catch (error) {
      console.error('Error al obtener el producto para editar:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  // Método para actualizar un producto
  updateOne: async (req, res) => {
    try {
        const productId = req.params.id;
        const { nombre, marca, modelo, descripcion, categoria, precio, peso, duracionBateria, camara, tipoSensores, altura, velocidad, descuento } = req.body;

        // Validaciones simples
        if (!nombre || !marca || !precio) {
            throw new Error('Los campos nombre, marca y precio son obligatorios');
        }

        const product = await Product.findByPk(productId);
        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }

        // Actualizar el producto
        await Product.update({
            nombre,
            marca,
            modelo,
            descripcion,
            categoria,
            precio,
            peso,
            duracionBateria,
            camara,
            tipoSensores,
            altura,
            velocidad,
            descuento,
            image: req.file ? req.file.filename : product.image // Mantener la imagen anterior si no se sube nueva
        }, { where: { id: productId } });

        res.redirect(`/productos/${productId}`); // Redirigir a los detalles del producto actualizado
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).send('Error interno del servidor');
    }
},


  // Método para eliminar un producto
  delete: async (req, res) => {
    try {
      const productId = req.params.id;

      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(404).send('Producto no encontrado');
      }

      await Product.destroy({ where: { id: productId } });

      res.redirect('/productos');
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      res.status(500).send('Error interno del servidor');
    }
  }
};

module.exports = dronController;
