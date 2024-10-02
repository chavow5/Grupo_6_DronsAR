const express = require('express');
const router = express.Router();
const dronController = require('../controllers/dron');
const fileUpload = require('../services/fileUpload');

// Rutas de productos
router.get('/', dronController.getProductos); // Mostrar todos los productos
router.get('/add', dronController.getAddForm); // Mostrar formulario para agregar producto
router.post('/agregar', fileUpload.single('image'), dronController.create); // Cambiar de createOne a create
router.get('/:id', dronController.getProductoById); // Mostrar detalles de un producto
router.get('/editar/:id', dronController.getEditForm); // Mostrar formulario de edición
router.put('/editar/:id', dronController.updateOne.bind(dronController));
router.post('/delete/:id', dronController.delete); // Cambiar de eliminarProducto a delete

module.exports = router;
