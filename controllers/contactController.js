// controllers/contactController.js

const { Mensaje } = require('../database/models');

async function enviarMensaje(req, res) {
    const { nombre, email, asunto, mensaje } = req.body;
    console.log('Datos recibidos:', req.body); // Para depurar
    try {
        await Mensaje.create({ nombre, email, asunto, mensaje });
        res.redirect('/contact'); 
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        res.redirect('/contact'); 
    }
}

async function mostrarContacto(req, res) {
    const success = req.query.success || false;
    console.log('Valor de success:', success); // Agrega esta línea
    res.render('contact', { success });
}

module.exports = { enviarMensaje, mostrarContacto };
