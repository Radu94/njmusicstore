const express = require('express');
const router = express.Router();

require('../config/mongoose');
const passport = require('../config/passport');

router.use(passport);
router.get('/success', (req, res) => res.render('index',{username:req.query.username,title:'Home'}));
router.get('/error', (req, res) => res.render(
  'login',{
    username:'',
    title:'Login',
    errormessage:'An error occurred while logging in. Please check your username and password!'
  }
));
  
router.get('/', (req, res) => res.render('index', { username : '' , title:'Home'}));

router.get('/index',(req, res) => res.render('index', { username : '' , title:'Home'}));
  
// Go to login page
router.get('/login', (req, res) => res.render('login',{username : '' ,title: 'Login',errormessage:''})); 

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
