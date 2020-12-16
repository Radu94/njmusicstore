/* PASSPORT LOCAL AUTHENTICATION */
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
module.exports = (passport) => {
	passport.use(
		new LocalStrategy(function (username, password, done) {
			User.findOne({ username: username }, function (err, user) {
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
		})
	);

	passport.serializeUser(function (user, cb) {
		cb(null, user.id);
	});
	passport.deserializeUser(function (id, cb) {
		User.findById(id, function (err, user) {
			cb(err, user);
		});
	});
};
