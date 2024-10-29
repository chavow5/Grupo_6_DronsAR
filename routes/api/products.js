// routes/api/products.js

const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/dron'); // Asegúrate de que este controlador maneje lógica de productos

// Obtener todos los productos
router.get('/', productsController.getAllProducts);
// Obtener un producto específico por ID
router.get('/:id', productsController.getProductById);
// Crear un nuevo producto
router.post('/', productsController.createProduct);
// Actualizar un producto por ID
router.put('/:id', productsController.updateProduct);
// Eliminar un producto por ID
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
