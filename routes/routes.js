const express = require('express');
const loginController = require('../controllers/loginController');
const trackController = require('../controllers/trackController');
const router = express.Router();
const UserDetails = require('../models/userInfo')


const passport = require('../config/passport');


// Home page
router.get('/', loginController.getIndex);
router.get('/index', loginController.getIndex);

//This one
router.get('/success', (req, res) => res.render('index',{username:req.query.username,title:'Home'}));

// Login
router.get('/login', loginController.getLogin);

router.post(
    '/login',
    passport.authenticate('local', { failureRedirect: '/error' }),
    loginController.postLogin
);

// Login error
router.get('/error', loginController.getError);

// Logout
router.get('/logout', loginController.getLogout);

router.get('/track', trackController.getTrack);
router.get('/track-list', trackController.getTrackList);
router.get('/track-add', trackController.getTrackAdd);
router.delete('/track/:_id', trackController.deleteTrack);
router.post('/track-add', trackController.postTrackAdd);
router.post('/cart', trackController.postCart);
router.get('/cart', trackController.getCart);
router.delete('/cart/:_id', trackController.deleteCart);


module.exports = router;