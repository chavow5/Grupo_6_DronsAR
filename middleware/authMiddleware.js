const userDatasource = require('../services/userDatasource');

module.exports = {
  
  rememberUser: async (req, res, next) => {
    try {
      if (!req.session.user && req.cookies.userEmail) {
        const users = await userDatasource.load();
        const user = users.find(u => u.email === req.cookies.userEmail);
        if (user) {
          req.session.user = user; // Crear la sesión para el usuario
        }
      }
      next();
    } catch (error) {
      console.error('Error al recordar el usuario:', error);
      next(); // Continuar con la solicitud en caso de error
    }
  },

  guest: (req, res, next) => {
    if (req.session.user) {
      return res.redirect('/users/perfil');
    }
    next();
  },

  auth: (req, res, next) => {
    if (!req.session.user) {
      return res.redirect('/users/login');
    }
    next();
  },

   // Middleware para recordar usuario y autenticación ya existentes...
   isAdmin: (req, res, next) => {
    if (!req.session.user || req.session.user.role !== 'admin') {
      return res.status(403).send('Acceso denegado. Requiere permisos de administrador.');
    }
    next();
  },
  
 
};
