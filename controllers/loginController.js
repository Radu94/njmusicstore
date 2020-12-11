module.exports = (app, passport) => {
  app.get('/success', (req, res) => res.render('index', { username: req.query.username, title: 'Home' }));

  app.get('/error', (req, res) => res.render('login', {
    username: '',
    title: 'Login',
    errormessage: 'An error occured while logging in. Please check your username and password!'
  }));

  app.post('/',
    passport.authenticate('local', { failureRedirect: '/error' }),
    (req, res) => {
      res.redirect('/home', { username: req.user.username });
    });

  app.get('/login', (req, res) => {
    res.render('login', { username: '', title: 'Login', errormessage: '' });
  });

  app.post('/login',
    passport.authenticate('local', { failureRedirect: '/error' }),
    (req, res) => {
      res.redirect(`/success?username=${req.user.username}`);
    });
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
