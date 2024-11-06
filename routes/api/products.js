// routes/api/products.js

const express = require('express');
const router = express.Router();
const dronController = require('../../controllers/dron'); // Asegúrate de que este controlador maneje lógica de productos

// Obtener todos los productos
router.get('/', dronController.getAllProducts);
// Obtener un producto específico por ID
router.get('/:id', dronController.getProductById);
// Crear un nuevo producto
router.post('/', dronController.createProduct);
// Actualizar un producto por ID
router.put('/:id', dronController.updateProduct);
// Eliminar un producto por ID
router.delete('/:id', dronController.deleteProduct);

// routes/api/products.js ultimo producto creado
router.get('/products/latest', dronController.getLastProduct);

router.get('/products/nombres', dronController.getProductNames);


module.exports = router;
