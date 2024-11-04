const { body, validationResult } = require('express-validator');

const userValidator = [
  body('nombres')
    .notEmpty().withMessage('El nombre es requerido')
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),

  body('apellidos')
    .notEmpty().withMessage('El apellido es requerido')
    .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres'),

  body('email')
    .notEmpty().withMessage('El correo electrónico es requerido')
    .isEmail().withMessage('El correo electrónico no es válido'),

  body('password')
    .notEmpty().withMessage('La contraseña es requerida')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
];

const validateUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { userValidator, validateUser };
