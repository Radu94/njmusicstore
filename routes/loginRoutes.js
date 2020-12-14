const path = require('path');

const express = require('express');

const passport = require('passport');

const loginController = require('../controllers/loginController');

const router = express.Router();
 
router.get('/', loginController.getRootPath);

router.get('/index', loginController.getIndex);

router.get('/login', loginController.getLoginPage);

router.post('/login', passport.authenticate('local', { failureRedirect: '/error' }), loginController.postLoginPage);

router.get('/success', loginController.getSuccessLogin);

router.get('/error', loginController.getErrorLogin);

router.get('/logout', loginController.getLogout);

module.exports = router;