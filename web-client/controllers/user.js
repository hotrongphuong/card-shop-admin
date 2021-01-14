const pass = require('passport');
//const passport = require('../config/passport');
const passport = require('passport');
const { create } = require('../models/Users');
const Users = require('../models/Users');
const bcrypt = require('bcryptjs');
const { forwardAuthenticated } = require('../config/auth');

module.exports.getLoginPage = async(req, res, next) => {
    forwardAuthenticated;
    res.render('login');
}

module.exports.getSignupPage = async(req, res, next) => {
    forwardAuthenticated;
    res.render('signup');
}

module.exports.logout = async(req, res, next) => {
    req.logout();
    res.redirect('users/login');
}

module.exports.login = async(req, res, next) => {
    //user = 
    passport.authenticate('local', async(err, user, info) => {
        if (err) {
            return next(err)
        } else if (!user) {
            console.log(req.body)
            return res.redirect('/users/login')
        } else {
            req.logIn(user, async(err) => {
                if (err) {
                    return next(err);
                }
                
                res.redirect('/');
            });
        }
    })(req, res, next);
}

// module.exports.login = function(res, req, next){
//     passport.authenticate('local', {successRedirect: '/users/profile', failureRedirext: '/users/login', failureFlash: true}),
//     function(req, res){
//         res.redirect('/users/profile');
//     }
// }

module.exports.signup = async(req, res, next) => {
    try {
        //const { password, email } = req.body;
        const password = req.body.password;
        const username = req.body.username;
        const email = req.body.email;
        const salt = await bcrypt.genSalt(10);
        passwordEncrypt = await bcrypt.hash(password, salt);
        const user = await Users.create({
            email: email,
            username: username,
            password: passwordEncrypt
        });
        console.log(user);
        await user.save();
        //alert("Sign Up Success");
        res.redirect('/');
    } catch (e) {
        throw e;
    }
}

// module.exports.login = function(req, res, next){
//     var fullname = req.body.fullname;
//     var email = req.body.email;
//     var username = req.body.username;
//     var password = req.body.password;

//     var error = req.validationErrors();
    
//     if (errors){
//         res.render('register',{
//             errors: errors
//         });
//     }else{
//         var newUser = new User({
//             fullname: fullname,
//             email: email,
//             username: username,

//         });
//     }
// };

module.exports.getProfilePage = async(req, res, next) => {
    //res.send('Đã đăng nhập thành công, đây là trang profile');
    res.render('profile')
}