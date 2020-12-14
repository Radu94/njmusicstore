const UserDetails = require('../models/userDetails');

exports.authenticateUser = function (username, password, done) {
    console.log("in localStrategy");
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
      console.log("found user");
      return done(null, user);
    });  
};

exports.serializerHandler = function(user, cb) {
  console.log("in serialize");
  cb(null, user.id);
};

exports.deserializerHandler = function(id, cb) {
  console.log("in deserialize");
  UserDetails.findById(id, function (err, user) {
    cb(err, user);
  });
};