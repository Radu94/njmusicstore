const express = require('express');
const UserDetails = require('../models/userDetails');
const auth = require('./auth');

exports.passportSetup = function (app) {
  console.log("in module");
  /*  PASSPORT SETUP  START*/
  const passport = require('passport');
  app.use(passport.initialize());
  app.use(passport.session()); 
  passport.serializeUser(auth.serializerHandler);
  passport.deserializeUser(auth.deserializerHandler);
  /* PASSPORT SETUP STOP */
  
  /* PASSPORT LOCAL AUTHENTICATION */
  const LocalStrategy = require('passport-local').Strategy;
  const authenticateUserStrategy = new LocalStrategy(auth.authenticateUser);
  passport.use(authenticateUserStrategy);



  app.get('/success', (req, res) => {console.log("in success"); res.render('index', { username: req.query.username, title: 'Home' });});
  app.get('/error', (req, res) => res.render('login', { username: '', title: 'Login', errormessage: 'An error occured while logging in. Please check your username and password!' }));

  app.get('/', function (req, res) {
    console.log("in get /");
    if (req.user) {
      res.render('index', { username: req.user.username, title: 'Home' });
    } else {
      res.render('index', { username: '', title: 'Home' });
    }    
  });

  app.get('/index', function (req, res) {
    console.log("in get /index");
    if (req.user) {
      res.render('index', { username: req.user.username, title: 'Home' });
    } else {
      res.render('index', { username: '', title: 'Home' });
    }
  });

  // Go to login page
  app.get('/login', function (req, res) {
    console.log("in get /login");
    res.render('login', { username: '', title: 'Login', errormessage: '' });
  });
  app.post('/login', //console.log("in post login"),//function (req, res) { return passport.authenticate('local', { failureRedirect: '/error' }); },
    passport.authenticate('local', { failureRedirect: '/error' }),
    function (req, res) {
      console.log("in post /login", req.user.username);
      res.redirect('/success?username=' + req.user.username);
    });
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
}