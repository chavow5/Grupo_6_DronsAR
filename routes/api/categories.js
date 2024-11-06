// routes/api/categories.js
const express = require('express');
const router = express.Router();
const categoryController = require('../../controllers/categoryController');

// Mostrar todas las categorías (API)
router.get('/', categoryController.apiGetCategories);

// Crear una nueva categoría (API)
router.post('/', categoryController.apiCreate);

// Mostrar una categoría específica (API)
router.get('/:id', categoryController.apiGetCategory);

// Actualizar una categoría (API)
router.put('/:id', categoryController.apiUpdate);

// Eliminar una categoría (API)
router.delete('/:id', categoryController.apiDelete);

// Nueva ruta para el panel de categorías con el total de productos
router.get('/categories/panel', categoryController.getCategoriesWithProductCount);

module.exports = router;
