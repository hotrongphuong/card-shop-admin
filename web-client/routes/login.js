const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');
const passport = require('passport')

//router.post('/', loginController.authenticating);
router.post('/', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash : true  
}));

router.get('/', loginController.index);

module.exports = router;
