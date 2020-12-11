const UserDetails = require('../models/userSchema');
const LocalStrategy = require('passport-local').Strategy;

const configure = (passport) => {
  /* https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize */
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    UserDetails.findById(id, (err, user) => {
      cb(err, user);
    });
  });

  /* PASSPORT LOCAL AUTHENTICATION */
  passport.use(new LocalStrategy(
    ((username, password, done) => {
      UserDetails.findOne({
        username: username
      }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }
        if (user.password !== password) {
          return done(null, false);
        }
        return done(null, user);
      });
    })
  ));
};

module.exports = {
  configure: configure
};
