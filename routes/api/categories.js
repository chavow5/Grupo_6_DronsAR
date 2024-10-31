// routes/api/categories.js
const express = require('express');
const router = express.Router();
const categoryController = require('../../controllers/categoryController');

// Mostrar todas las categorías (API)
router.get('/', categoryController.getCategories);

// Crear una nueva categoría (API)
router.post('/', categoryController.create);

// Mostrar una categoría específica (API)
router.get('/:id', categoryController.getEditForm);

// Actualizar una categoría (API)
router.put('/:id', categoryController.update);

// Eliminar una categoría (API)
router.delete('/:id', categoryController.delete);

module.exports = router;
