const express = require('express');
const loginController = require('../controllers/loginController');
const trackController = require('../controllers/trackController');
const router = express.Router();

const f= (passport)=>{
// Home page
router.get('/', loginController.getIndex);
router.get('/index', loginController.getIndex);

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

return router;
}

module.exports = {f};