const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const dronController = require('../controllers/dron');
const fileUpload = require('../services/fileUpload');
const { isAdmin } = require('../middleware/authMiddleware');


// Validaciones para agregar y editar productos
const productValidations = [
    body('nombre')
      .notEmpty().withMessage('El nombre del producto es obligatorio.')
      .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres.'),
      
    body('marca')
      .notEmpty().withMessage('La marca es obligatoria.')
      .isLength({ min: 3 }).withMessage('La marca debe tener al menos 3 caracteres.'),
    
    body('modelo')
      .notEmpty().withMessage('El modelo es obligatorio.')
      .isLength({ min: 3 }).withMessage('El modelo debe tener al menos 3 caracteres.'),
  
    body('descripcion')
      .notEmpty().withMessage('La descripción es obligatoria.')
      .isLength({ min: 5 }).withMessage('La descripción debe tener al menos 5 caracteres.'),
  
    body('precio')
      .notEmpty().withMessage('El precio es obligatorio.')
      .isNumeric().withMessage('El precio debe ser un valor numérico.'),
  
    body('peso')
      .notEmpty().withMessage('El peso es obligatorio.')
      .isLength({ min: 3 }).withMessage('La peso debe tener al menos 3 caracteres.'),
  
    body('duracionBateria')
      .notEmpty().withMessage('La duración de la batería es obligatoria.')
      .isLength({ min: 3 }).withMessage('La duración de la batería debe tener al menos 3 caracteres.'),
  
    body('camara')
    .notEmpty().withMessage('La camara es obligatoria.')
    .isLength({ min: 3 }).withMessage('La camara debe tener al menos 3 caracteres.'),

    body('tipoSensores')
    .notEmpty().withMessage('La tipoSensores es obligatoria.')
    .isLength({ min: 3 }).withMessage('La tipoSensores debe tener al menos 3 caracteres.'),

    body('altura')
      .notEmpty().withMessage('La altura es obligatoria.')
      .isLength({ min: 3 }).withMessage('La altura debe tener al menos 3 caracteres.'),
  
    body('velocidad')
      .notEmpty().withMessage('La velocidad es obligatoria.')
      .isLength({ min: 3 }).withMessage('La velocidad debe tener al menos 3 caracteres.'),
    ];



// Rutas de productos
router.get('/', dronController.getProductos); // Mostrar todos los productos
router.get('/add', dronController.getAddForm); // Mostrar formulario para agregar producto
router.post('/agregar', fileUpload.single('image'), productValidations, dronController.create); // Agregar producto con validación
router.get('/:id', dronController.getProductoById); // Mostrar detalles de un producto

// Rutas de edición y eliminación (solo admin)
router.get('/editar/:id', isAdmin, dronController.getEditForm); // Mostrar formulario de edición
router.put('/editar/:id', isAdmin, fileUpload.single('image'), dronController.updateOne); // Editar producto
router.post('/delete/:id', isAdmin, dronController.delete); // Eliminar producto


// Ruta para obtener el último producto

module.exports = router;
