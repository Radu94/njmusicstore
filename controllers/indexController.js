module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index', { username: '', title: 'Home' });
  });
  app.get('/index', (req, res) => {
    if (req.user) {
      res.render('index', { username: req.user.username, title: 'Home' });
    } else {
      res.render('index', { username: '', title: 'Home' });
    }
  });
};
