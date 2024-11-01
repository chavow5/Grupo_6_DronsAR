// routes/categories.js
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Mostrar todas las categorías (Vista)
router.get('/', categoryController.getCategories);

// Mostrar formulario para agregar una categoría
router.get('/add', categoryController.getAddForm);

// Crear una nueva categoría (Vista)
router.post('/', categoryController.create);

// Mostrar formulario para editar una categoría
router.get('/edit/:id', categoryController.getEditForm);

// Actualizar una categoría (Vista)
router.post('/edit/:id', categoryController.update);

// Eliminar una categoría (Vista)
router.post('/delete/:id', categoryController.delete);

module.exports = router;
