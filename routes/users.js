const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const userFileUpload = require('../services/userFileUpload');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', userFileUpload.single('profileImage'), usersController.register);
router.post('/login', usersController.login);
router.post('/logout', usersController.logout);

router.get('/perfil', authMiddleware.auth, (req, res) => {
   res.render('users/perfil', { user: req.session.user });
});

module.exports = router;