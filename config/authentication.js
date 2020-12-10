const UserDetails = require('../models/userSchema');

const configure = (passport) => {
    passport.serializeUser(function (user, cb) {
        cb(null, user.id);
    });
    passport.deserializeUser(function (id, cb) {
        UserDetails.findById(id, function (err, user) {
            cb(err, user);
        });
    });

    /* PASSPORT LOCAL AUTHENTICATION */
    const LocalStrategy = require('passport-local').Strategy;
    passport.use(new LocalStrategy(
        function (username, password, done) {
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
        }
    ));
};

module.exports = {
    configure: configure
};
