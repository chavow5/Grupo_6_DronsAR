// controllers/contactController.js
const { validationResult } = require('express-validator'); // Asegúrate de importar validationResult
const { Mensaje } = require('../database/models');

async function enviarMensaje(req, res) {
    // Capturar los errores de validación
    const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.render('contact', {
        errors: errors.mapped(),
        values: req.body
    });
}

    // Si no hay errores de validación, intentar guardar el mensaje en la base de datos
    const { nombre, email, asunto, mensaje } = req.body;
    console.log('Datos recibidos:', req.body); // Para depurar
    try {
        await Mensaje.create({ nombre, email, asunto, mensaje });
        // Renderizar la página de confirmación después de enviar el mensaje exitosamente
        res.render('confirmacion');
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        // Si hay un error al guardar en la base de datos, renderizar el formulario con un mensaje de error general
        res.render('contact', {
            errors: { general: { msg: 'Hubo un problema al enviar tu mensaje, por favor intenta de nuevo.' } },
            values: req.body
        });
    }
}

async function mostrarContacto(req, res) {
    // Renderizar el formulario de contacto sin errores ni valores previos
    res.render('contact', { errors: {}, values: {} });
}

async function mostrarConfirmacion(req, res) {
    res.render('confirmacion');
}

module.exports = { enviarMensaje, mostrarContacto, mostrarConfirmacion };
