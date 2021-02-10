const express=require('express');
const router = express.Router();

const { Strategy: localStrategy } = require('passport-local');
const passport = require('passport');

const { User, addUser } = require('../models/user');


/*  PASSPORT SETUP  START*/

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser((user, cb) => cb(null, user.id));
passport.deserializeUser((id, cb) => User.findById(id, (err, user) => cb(err, user)));

/* PASSPORT SETUP STOP */
router.post('/', 
  passport.authenticate('local', { failureRedirect: '/error' }),
  (req, res) => res.redirect('/home',{username:req.user.username})
);

/* PASSPORT LOCAL AUTHENTICATION */
passport.use(new localStrategy(
  async (username, password, done) => {
    // auto-register
    const user = await addUser(username, password);
    
    User.findOne({
      username: username || user.username
    }, (err, user) => {
      if (err)
        return done(err);

      if (!user)
        return done(null, false);
      
      if (user.password != password)
        return done(null, false);
      
      return done(null, user);
    });
  }
));

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/error' }),
  (req, res) => res.redirect(`/success?username=${req.user.username}`)
);

module.exports = router;
