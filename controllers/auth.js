const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UserDetails = require('../models/userDetails');


const authenticateUser = function (username, password, done) {
    UserDetails.findOne({
      username: username
    }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (user.password != password) {
        return done(null, false);
      }
      return done(null, user);
    });  
};

const serializerHandler = function(user, cb) {
  cb(null, user.id);
};

const deserializerHandler = function(id, cb) {
  UserDetails.findById(id, function (err, user) {
    cb(err, user);
  });
};

exports.passportSetup = function () {
  passport.serializeUser(serializerHandler);
  passport.deserializeUser(deserializerHandler);

  const authenticateUserStrategy = new LocalStrategy(authenticateUser);
  passport.use(authenticateUserStrategy);
};




