const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const userFileUpload = require('../services/userFileUpload');
const authMiddleware = require('../middleware/authMiddleware');

// Ruta para registro
router.get('/register', authMiddleware.guest, (req, res) => {
   res.render('users/register');
 });
 
 router.post('/register', userFileUpload.single('profileImage'), usersController.register);
 
// Ruta para login
router.get('/login', authMiddleware.guest, (req, res) => {
   res.render('users/login');
 });
 
 router.post('/login', usersController.login);

 // Ruta para cerrar sesión
router.post('/logout', usersController.logout);

// Ruta para el perfil
router.get('/perfil', authMiddleware.auth, (req, res) => {
  res.render('users/perfil', { user: req.session.user });
});

router.get('/perfil', authMiddleware.auth, (req, res) => {
   res.render('users/perfil', { user: req.session.user });
});

module.exports = router;