const express = require('express');
    const router = express.Router();
    const contactController = require('../controllers/contactController');

    // Rutas de contacto
    router.get('/contact', contactController.mostrarContacto);
    router.post('/contact', contactController.enviarMensaje);

    module.exports = router;