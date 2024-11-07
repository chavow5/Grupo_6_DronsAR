'use strict';

const db = require('../database/models'); 
const User = db.User;
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { validationResult } = require('express-validator');

const usersController = {
  register: async (req, res) => {
    // Capturar errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Mapea los errores para mostrarlos en la vista
      const errorsMapped = errors.mapped();
      return res.status(400).render('users/registro', { 
        errors: errorsMapped,
        oldData: req.body
      });
    }

    const { nombres, apellidos, email, password } = req.body;

    try {
      // Verificar si el email ya existe
      const emailExists = await User.findOne({ where: { email } });
      if (emailExists) {
        return res.status(400).render('users/registro', {
          errors: { email: { msg: 'El email ya está registrado' } },
          oldData: req.body
        });
      }

      // Encriptar la contraseña y crear el usuario
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = await User.create({
        id: crypto.randomUUID(),
        nombres,
        apellidos,
        email,
        password: hashedPassword,
        profileImage: req.file ? req.file.filename : 'default.png',
        rol: 'user'
      });

      res.redirect('/login');
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      res.status(500).render('users/registro', {
        errors: { general: { msg: 'Hubo un problema al registrar el usuario. Por favor intenta nuevamente.' } },
        oldData: req.body
      });
    }
  },

  login: async (req, res) => {
    // Capturar errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('users/login', { 
        errors: errors.mapped(),
        oldData: req.body 
      });
    }

    const { email, password, remember } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).render('users/login', {
          errors: { general: { msg: 'El email o la contraseña son incorrectos.' } },
          oldData: req.body
        });
      }

      req.session.user = {
        id: user.id,
        nombres: user.nombres,
        apellidos: user.apellidos,
        email: user.email,
        profileImage: user.profileImage,
        rol: user.rol
      };

      if (remember) {
        res.cookie('userEmail', user.email, {
          maxAge: 1000 * 60 * 60 * 24 * 30, 
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production'
        });
      } else {
        res.clearCookie('userEmail');
      }

      res.redirect('/');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).render('users/login', {
        errors: { general: { msg: 'Hubo un problema al iniciar sesión. Intenta nuevamente.' } },
        oldData: req.body
      });
    }
  },

  logout: (req, res) => {
    // Destruir la sesión del usuario
    req.session.destroy((err) => {
      if (err) {
        console.error('Error al cerrar sesión:', err);
        return res.status(500).send('Error interno del servidor');
      }
  
      // Eliminar la cookie 'userEmail' si existía
      res.clearCookie('userEmail');
  
      // Redirigir a la página de inicio o a donde desees
      res.redirect('/');
    });
  },

  // API para obtener todos los usuarios
  getAllUsers: async (req, res) => {
    try {
        const users = await User.findAll(); // Obtener todos los usuarios de la base de datos
        res.json(users); // Devolver todos los usuarios
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id); // Buscar el usuario por ID
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
      res.json(user);
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  createUser: async (req, res) => {
    try {
      const { password } = req.body;
      if (!password) {
        throw new Error('La contraseña es requerida');
      }
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = await User.create({
        id: crypto.randomUUID(), // Si usas ID manualmente, considera si es necesario
        ...req.body,
        password: hashedPassword,
        profileImage: req.file ? req.file.filename : 'default.png',
        rol: 'user' // Asignar rol por defecto al crear usuario
      });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

      await user.update(req.body); // Actualiza el usuario
      res.json(user);
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

      await user.destroy(); // Elimina el usuario
      res.status(204).send();
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },


  // Obtener el último usuario creado
getLastUser: async (req, res) => {
  try {
      const lastUser = await User.findOne({
          order: [['createdAt', 'DESC']] // Ordenar por fecha de creación en orden descendente
      });
      if (!lastUser) return res.status(404).json({ error: 'No se encontraron usuarios' });
      res.json(lastUser);
  } catch (error) {
      console.error('Error al obtener el último usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
}

};

module.exports = usersController;
