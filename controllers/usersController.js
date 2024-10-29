'use strict';

const db = require('../database/models'); 
const User = db.User;
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const usersController = {
  register: async (req, res) => {
    try {
      const { nombres, apellidos, email, password } = req.body;
      if (!password) {
        throw new Error('La contraseña es requerida');
      }
      const emailExists = await User.findOne({ where: { email } });
      if (emailExists) {
        return res.status(400).send('El email ya está registrado');
      }
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = await User.create({
        id: crypto.randomUUID(),
        nombres,
        apellidos,
        email,
        password: hashedPassword,
        profileImage: req.file ? req.file.filename : 'default.png' 
      });
      res.redirect('/users/perfil'); 
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      res.status(500).send('Error interno del servidor');
    }
  },
  login: async (req, res) => {
    try {
      const { email, password, remember } = req.body;
  
      // Buscar el usuario por el email
      const user = await User.findOne({ where: { email } });
  
      // Verificar si el usuario existe
      if (!user) {
        return res.status(400).send('El email o la contraseña son incorrectos.');
      }
  
      // Comparar la contraseña proporcionada con la almacenada
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).send('El email o la contraseña son incorrectos.');
      }
  
      // Guardar información del usuario en la sesión
      req.session.user = {
        id: user.id,
        nombres: user.nombres,
        apellidos: user.apellidos,
        email: user.email,
        profileImage: user.profileImage,
      };
  
      // Manejo de "Recordarme"
  if (remember) {
    res.cookie('userEmail', user.email, { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true }); // 30 días
  } else {
    res.clearCookie('userEmail'); // Asegúrate de limpiar la cookie si no se selecciona "Recordar"
  }
  
      // Redirigir a la página de perfil
      res.redirect('/users/perfil');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).send('Error interno del servidor');
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
      res.redirect('/login');
    });
  },


  //api

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
      const newUser = await User.create({
        id: crypto.randomUUID(), // Si usas ID manualmente, considera si es necesario
        ...req.body,
        profileImage: req.file ? req.file.filename : 'default.png'
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
  }

};

  

module.exports = usersController;