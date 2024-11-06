// controllers/contactController.js
const { Mensaje } = require('../database/models');

async function enviarMensaje(req, res) {
    const { nombre, email, asunto, mensaje } = req.body;
    console.log('Datos recibidos:', req.body); // Para depurar
    try {
        // Crear el mensaje en la base de datos
        await Mensaje.create({ nombre, email, asunto, mensaje });
        // Redirige a la página de contacto después de enviar el mensaje
        res.render('confirmacion');  // Renderiza la página de confirmación
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        // Redirige a la página de contacto si hay error
        res.redirect('/contact');
    }
}

async function mostrarContacto(req, res) {
    res.render('contact');  // Solo renderizamos la página de contacto
}

async function mostrarConfirmacion(req, res) {
    res.render('confirmacion');  // Renderiza la página de confirmación
}

module.exports = { enviarMensaje, mostrarContacto, mostrarConfirmacion };
