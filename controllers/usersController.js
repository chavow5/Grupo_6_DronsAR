const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const userDatasource = require('../services/userDatasource');
const userFileUpload = require('../services/userFileUpload');
const { log } = require('console');

const usersController = {
  register: async (req, res) => {
    try {
      const { nombres, apellidos, email, password } = req.body;

      if (!password) {
        throw new Error('La contraseña es requerida');
      }

      const users = await userDatasource.load();

       // Verificar si el email ya está en uso
       const emailExists = users.some(user => user.email === email);
       if (emailExists) {
         return res.status(400).send('El email ya está registrado');
       }

      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = {
        id: crypto.randomUUID(), // Generar un ID único con crypto
        nombres,
        apellidos,
        email,
        password: hashedPassword,
        profileImage: req.file ? req.file.filename : 'default.png'
      };

      users.push(newUser);
      await userDatasource.save(users);
      res.redirect('/login');
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  login: async (req, res) => {
    try {
      console.log(req.body['remember-me'].checked);
       const { email, password } = req.body;
       const users = await userDatasource.load(); // Cambiado a userDatasource.load()
       const user = users.find(u => u.email === email);
      
       if (user && bcrypt.compareSync(password, user.password)) {
          req.session.user = user;
        
         // imput check valor
          
          if (req.body['remember-me'] == 'on') {
            console.log('entre');
             
            res.cookie('userEmail', email, { maxAge: 1000 * 60 * 60 * 24 * 30 });
          }
          return res.redirect('/users/perfil');
       }
 
       res.redirect('/login');
    } catch (error) {
       console.error('Error en el login:', error);
       res.status(500).send('Error interno del servidor');
    }
 },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie('userEmail');
    res.redirect('/');
  }
};

module.exports = usersController;