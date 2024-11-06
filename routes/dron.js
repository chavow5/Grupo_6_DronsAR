const express = require('express');
const router = express.Router();
const dronController = require('../controllers/dron');
const fileUpload = require('../services/fileUpload');
const { isAdmin } = require('../middleware/authMiddleware');


// Rutas de productos
router.get('/', dronController.getProductos); // Mostrar todos los productos
router.get('/add', dronController.getAddForm); // Mostrar formulario para agregar producto
router.post('/agregar', fileUpload.single('image'), dronController.create); // Cambiar de createOne a create
router.get('/:id', dronController.getProductoById); // Mostrar detalles de un producto

// Rutas de edición y eliminación (solo admin)
router.get('/editar/:id', isAdmin, dronController.getEditForm); // Mostrar formulario de edición
router.put('/editar/:id', isAdmin, fileUpload.single('image'), dronController.updateOne); // Editar producto
router.post('/delete/:id', isAdmin, dronController.delete); // Eliminar producto


// Ruta para obtener el último producto

module.exports = router;
