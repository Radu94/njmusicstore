const UserDetails = require('../models/userDetails');

exports.authenticateUser = function (username, password, done) {
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

exports.serializerHandler = function(user, cb) {
  cb(null, user.id);
};

exports.deserializerHandler = function(id, cb) {
  UserDetails.findById(id, function (err, user) {
    cb(err, user);
  });
};