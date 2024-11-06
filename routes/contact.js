// routes/contact.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Ruta GET para mostrar el formulario de contacto
router.get('/contact', contactController.mostrarContacto);

// Ruta POST para enviar el mensaje
router.post('/contact', contactController.enviarMensaje);

// Ruta GET para mostrar la página de confirmación
router.get('/confirmacion', contactController.mostrarConfirmacion);

module.exports = router;
