// routes/contact.js
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Validaciones para el formulario de contacto
const contactValidations = [
    body('nombre')
        .notEmpty().withMessage('Por favor, ingresa tu nombre.')
        .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres.'),
    body('email')
        .notEmpty().withMessage('Por favor, ingresa tu email.')
        .isEmail().withMessage('Por favor, ingresa un email válido.'),
    body('asunto')
        .notEmpty().withMessage('Por favor, ingresa un asunto.')
        .isLength({ min: 3 }).withMessage('El asunto debe tener al menos 3 caracteres.'),
    body('mensaje')
        .notEmpty().withMessage('Por favor, ingresa tu mensaje.')
        .isLength({ min: 10 }).withMessage('El mensaje debe tener al menos 10 caracteres.')
];

// Ruta GET para mostrar el formulario de contacto
router.get('/contact', contactController.mostrarContacto);

// Ruta POST para enviar el mensaje con validaciones
router.post('/contact', contactValidations, contactController.enviarMensaje);

// Ruta GET para mostrar la página de confirmación
router.get('/confirmacion', contactController.mostrarConfirmacion);

module.exports = router;
