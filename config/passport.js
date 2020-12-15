const passport = require('passport');
/* PASSPORT LOCAL AUTHENTICATION */
const LocalStrategy = require('passport-local').Strategy;
const UserDetails = require("../models/userInfo");

module.exports = (passport) => {
    passport.use(new LocalStrategy(
        function (username, password, done) {
            UserDetails.findOne({
                username: username
            }, function (err, user) {
                if (err) {
                    console.log("If 1", err);
                    return done(err);
                }

                if (!user) {
                    console.log("If nr2");
                    return done(null, false);
                }
                if (user.password != password) {
                    console.log("If nr3");
                    return done(null, false);
                }
                return done(null, user);
            });
        }
    ));
    passport.serializeUser(function (user, cb) {
        cb(null, user.id);
    });
    passport.deserializeUser(function (id, cb) {
        User.findById(id, function (err, user) {
            cb(err, user);
        });
    });
    return passport;
}
