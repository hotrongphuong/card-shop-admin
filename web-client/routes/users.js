const express = require('express');
const router = express.Router();

const userController = require('../controllers/user')

router.route('/login')
    .get(userController.getLoginPage)
    .post(userController.login);

router.route('/signup')
    .get(userController.getSignupPage)
    .post(userController.signup);

router.route('/logout')
    .get(userController.logout);

router.route('/profile')
    .get(userController.getProfilePage);

module.exports = router;