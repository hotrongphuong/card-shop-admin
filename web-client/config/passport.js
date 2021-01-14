const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User model
const User = require('../models/Users');

module.exports = function(passport) {
  // passport.use(
  //   new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
  //     // Match user
  //     User.findOne({
  //       username: username
  //     }).then(user => {
  //       if (!user) {
  //         return done(null, false, { message: 'That email is not registered' });
  //       }

  //       // Match password
  //       bcrypt.compare(password, user.password, (err, isMatch) => {
  //         if (err) throw err;
  //         if (isMatch) {
  //           return done(null, user);
  //         } else {
  //           return done(null, false, { message: 'Password incorrect' });
  //         }
  //       });
  //     });
  //   })
  // );

  // passport.use(
  //   new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
  //     // Match user
  //     User.getUserByUsername({
  //       username: username
  //     }).then(user => {
  //       if (!user) {
  //         return done(null, false, { message: 'That user is not registered' });
  //       }

  //       // Match password
  //       bcrypt.comparePassword(password, user.password, (err, isMatch) => {
  //         if (err) throw err;
  //         if (isMatch) {
  //           return done(null, user);
  //         } else {
  //           return done(null, false, { message: 'Password incorrect' });
  //         }
  //       });
  //     });
  //   })
  // );

  passport.use(new LocalStrategy(
    function(username, password, done){
      User.getUserByUsername(username, function(err, user){
        console.log(err);
        console.log(user);
        if (err) throw err;
        if (!user){
          return done(null, false, {message: 'Unknow User'});
        }
        User.comparePassword(password, user.password, function(err, isMatch){
          if (err) throw errl
          if (isMatch){
            return done(null, user);
          } else{
            return done(null, false, {message: 'Invalid password'});
          }
        });
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
        done(err, user);
    });
  });
};