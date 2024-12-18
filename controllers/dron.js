'use strict';

const db = require('../database/models');
const { Product, Category } = db;
const crypto = require('crypto');
const { validationResult } = require('express-validator');



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

   // Función para obtener todos los drones
   getAllDrones: async (req, res) => {
    try {
      const drones = await Product.findAll({
        include: {
          model: Category,
          as: 'category', // Debes usar el alias que definiste en la relación
          attributes: ['nombre'], // Asegúrate de obtener el nombre de la categoría
        },
      });

      res.render('productos', { drones });
    } catch (error) {
      console.error('Error al obtener drones:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  // Método para mostrar el formulario de agregar producto 
getAddForm: async (req, res) => {
  try {
      const categories = await Category.findAll();
      res.render('products/agregarProducto', {
          categories,
          oldData: {},  // Asegura que oldData esté definido como un objeto vacío
          errors: {}    // Asegura que errors esté definido como un objeto vacío
      });
  } catch (error) {
      console.error('Error al cargar el formulario de agregar producto:', error);
      res.status(500).send('Error interno del servidor');
  }
},



  create: async (req, res) => {
  // Capturar errores de validación
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorsMapped = errors.mapped();
    const categories = await Category.findAll();
    return res.status(400).render('products/agregarProducto', {
      errors: errorsMapped, // Enviar mensajes de error
      oldData: req.body,    // Mantener datos ingresados
      categories            // Mantener la lista de categorías
    });
  }

  const {
    nombre, marca, modelo, descripcion, category_id,
    precio, peso, duracionBateria, camara,
    tipoSensores, altura, velocidad, descuento
  } = req.body;

  try {
    // Crear el nuevo producto
    const newProduct = await Product.create({
      id: crypto.randomUUID(),
      nombre, marca, modelo, descripcion, category_id,
      precio, peso, duracionBateria, camara,
      tipoSensores, altura, velocidad, descuento,
      image: req.file ? req.file.filename : 'default.png'
    });

    // Redirigir a la lista de productos
    res.redirect('/productos');
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).render('products/agregarProducto', {
      errors: { general: { msg: 'Hubo un problema al crear el producto. Por favor intenta nuevamente.' } },
      oldData: req.body,
      categories: await Category.findAll()
    });
  }
},
  

  // Método para mostrar el detalle de un producto
  // Método para mostrar el detalle de un producto
  getProductoById: async (req, res) => {
    try {
      const productId = req.params.id; // Obtenemos el id del producto desde los parámetros
      const product = await Product.findByPk(productId, {
        include: {
          model: Category,
          as: 'category', // Debes usar el alias que definiste en la relación
          attributes: ['nombre'], // Asegúrate de obtener el nombre de la categoría
        },
      }); // Busca el producto incluyendo la categoría
  
      if (!product) {
        return res.status(404).send('Producto no encontrado'); // Si no se encuentra, devolvemos un error
      }
      res.render('products/detalle-producto', { dron: product });
  
    } catch (error) {
      console.error('Error al obtener el detalle del producto:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  detalle: async (req, res) => {
    const dron = await obtenerDronPorId(req.params.id);
    const usuario = req.session.usuario; // Asegúrate de que aquí se almacena el usuario logueado

    res.render('products/detalle-producto', {
        dron: dron,
        usuario: usuario // Pasar el objeto del usuario
    });
},

  // Método para mostrar el formulario de edición
  // Método para mostrar el formulario de edición
getEditForm: async (req, res) => {
  try {
      const productId = req.params.id;
      const product = await Product.findByPk(productId);

      if (!product) {
          return res.status(404).send('Producto no encontrado');
      }

      // Obtener todas las categorías
      const categories = await Category.findAll();

      res.render('products/editarProducto', { dron: product, categorias: categories }); // Aquí pasas las categorías
  } catch (error) {
      console.error('Error al obtener el producto para editar:', error);
      res.status(500).send('Error interno del servidor');
  }
},


  // Método para actualizar un producto
  updateOne: async (req, res) => {
    try {
        const productId = req.params.id;
        const { nombre, marca, modelo, descripcion, category_id, precio, peso, duracionBateria, camara, tipoSensores, altura, velocidad, descuento } = req.body;

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
            category_id,
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
  },


  // API

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.findAll(); // Obtiene todos los productos desde la base de datos
      res.json(products); // Devuelve todos los productos en formato JSON
    } catch (error) {
      console.error('Error al obtener productos:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  getProductById: async (req, res) => {
    try {
      const productId = req.params.id; // Obtenemos el id del producto desde los parámetros
      const product = await Product.findByPk(productId); // Buscamos el producto en la base de datos
      
      if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' }); // Si no se encuentra, devolvemos un error
      }
      res.json(product); // Devuelve el producto encontrado en formato JSON
    } catch (error) {
      console.error('Error al obtener el producto por ID:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  createProduct: async (req, res) => {
    try {
      const { nombre, marca, modelo, descripcion, categoria, precio, peso, duracionBateria, camara, tipoSensores, altura, velocidad, descuento } = req.body;

      // Validaciones simples
      if (!nombre || !marca || !precio) {
        return res.status(400).json({ error: 'Los campos nombre, marca y precio son obligatorios' });
      }

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

      res.status(201).json(newProduct); // Devuelve el nuevo producto creado
    } catch (error) {
      console.error('Error al crear el producto:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      const { nombre, marca, modelo, descripcion, categoria, precio, peso, duracionBateria, camara, tipoSensores, altura, velocidad, descuento } = req.body;

      // Validaciones simples
      if (!nombre || !marca || !precio) {
        return res.status(400).json({ error: 'Los campos nombre, marca y precio son obligatorios' });
      }

      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
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

      res.json({ message: 'Producto actualizado con éxito', productId }); // Devuelve un mensaje de éxito
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const productId = req.params.id;

      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }

      await Product.destroy({ where: { id: productId } });

      res.json({ message: 'Producto eliminado con éxito' }); // Devuelve un mensaje de éxito
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  getLastProduct: async (req, res) => {
    try {
      // Buscar el último producto creado según la fecha de creación
      const lastProduct = await Product.findOne({
        order: [['createdAt', 'DESC']],
      });
  
      if (!lastProduct) {
        return res.status(404).json({ error: 'No hay productos disponibles' });
      }
  
      // Devolver el último producto en formato JSON
      res.json(lastProduct);
    } catch (error) {
      console.error('Error al obtener el último producto:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },


  getProductNames: async (req, res) => {
    try {
      // Obtener solo los nombres de los productos
      const products = await Product.findAll({
        attributes: ['nombre'], // Seleccionamos solo el atributo 'nombre'
      });

      // Enviar la respuesta en formato JSON
      res.json(products);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  
};

 

module.exports = dronController;
