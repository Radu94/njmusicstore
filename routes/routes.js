const passport = require('passport');
const express = require('express');
const loginController = require('../controllers/loginController');
const trackController = require('../controllers/trackController');
const router = express.Router();

// Home page
router.get('/',loginController.getIndex);
router.get('/index',loginController.getIndex);

// Login
router.get('/login',loginController.getLogin);

router.post('/login', 
    passport.authenticate(
        'local', 
        { failureRedirect: '/error'}
    ), 
    loginController.postLogin
);

// Login error
router.get('/error', loginController.getError);

// Logout 
router.get('/logout', loginController.getLogout);

// Track list 
router.get('/track-list', trackController.trackList);

// Add Track 
router.get('/track-add', trackController.trackAddPage);
router.post('/track-add', trackController.trackAddAction);

// Delete Track 
router.delete('/track/:_id', trackController.trackDelete);

// Get Cart
router.get('/cart', trackController.cartGet);

// Add Cart Item
router.post('/cart', trackController.cartAddItem);

// Delete Cart Item
router.delete('/cart/:_id', trackController.cartDeleteItem);

module.exports = router;