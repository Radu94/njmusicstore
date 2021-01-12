const LocalStrategy = require("passport-local").Strategy;
const user = require("./../models/user");

const passportAuth = (passport) => {
    passport.use(
        new LocalStrategy((username, password, done) => {
            user.findOne(
                {
                    username: username,
                },
                (err, user) => {
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
                }
            );
        })
    );

    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });

    passport.deserializeUser((id, cb) => {
        user.findById(id, (err, user) => {
            cb(err, user);
        });
    });
};

module.exports = passportAuth;
