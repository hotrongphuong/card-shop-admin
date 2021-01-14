const express = require('express');
const router = express.Router();

const userController = require('../controllers/user')

router.get('/login', userController.getLoginPage);
router.post('/login', userController.login)
router.get('/signup', userController.getSignupPage);
router.post('/signup', userController.signup);
router.get('/logout', userController.logout);
router.get('/profile', userController.getProfilePage);

module.exports = router;