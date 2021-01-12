const users = require('../models/Users')
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

class LoginController{
    
    index(req, res, next){
        res.render('login');
    }

    authenticating(req, res, next){
        console.log("OK ROI");
        passport.authenticate('login', { successRedirect: '/home',
                                   failureRedirect: '/',
                                   failureFlash: true,
                                })
    }
}

module.exports =  new LoginController()
