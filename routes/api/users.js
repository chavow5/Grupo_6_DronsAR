const express = require('express');
   const router = express.Router();
   const usersController = require('../../controllers/usersController');

   // Obtener todos los usuarios
   router.get('/', usersController.getAllUsers);
   // Obtener un usuario específico por ID
   router.get('/:id', usersController.getUserById);
   // Crear un nuevo usuario
   router.post('/', usersController.createUser);
   // Actualizar un usuario por ID
   router.put('/:id', usersController.updateUser);
   // Eliminar un usuario por ID
   router.delete('/:id', usersController.deleteUser);

   // Obtener el último usuario creado
router.get('/users/ultimo', usersController.getLastUser);

   module.exports = router;