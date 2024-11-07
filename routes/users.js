const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const usersController = require('../controllers/usersController');
const userFileUpload = require('../services/userFileUpload');
const authMiddleware = require('../middleware/authMiddleware');

// Validaciones para el registro
const registerValidations = [
  body('nombres')
    .notEmpty().withMessage('El nombre es obligatorio.')
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres.'),

  body('apellidos')
    .notEmpty().withMessage('El apellido es obligatorio.')
    .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres.'),

  body('email')
    .notEmpty().withMessage('El correo electrónico es obligatorio.')
    .isEmail().withMessage('Debe ser un correo electrónico válido.'),

  body('password')
    .notEmpty().withMessage('La contraseña es obligatoria.')
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 6 caracteres.'),

    body('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('La confirmación de contraseña no coincide con la contraseña.');
      }
      return true;
    })
];

// Validaciones para el login
const loginValidations = [
  body('email')
    .notEmpty().withMessage('El correo electrónico es obligatorio.')
    .isEmail().withMessage('Debe ser un correo electrónico válido.'),

  body('password')
    .notEmpty().withMessage('La contraseña es obligatoria.')
];

// Ruta para registro
router.get('/register', authMiddleware.guest, (req, res) => {
  res.render('users/registro');
});

router.post('/register', userFileUpload.single('profileImage'), registerValidations, usersController.register);


// Ruta para login
router.get('/login', authMiddleware.guest, (req, res) => {
  res.render('users/login');
});

router.post(
  '/login',
  loginValidations,
  usersController.login
);

// Ruta para cerrar sesión
router.post('/logout', usersController.logout);

// Ruta para el perfil
router.get('/perfil', authMiddleware.auth, (req, res) => {
  res.render('users/perfil', { user: req.session.user });
});

module.exports = router;
