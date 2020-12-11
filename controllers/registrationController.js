const UserDetails = require('../models/userSchema');

module.exports = (app) => {
  app.get('/register', (req, res) => {
    res.render('register', { username: '', errormessage: '', title: 'Register' });
  });

  app.post('/register', (req, res) => {
    UserDetails.findOne({
      username: req.body.username
    }, (err, user) => {
      if (err) {
        console.log('err => ', JSON.stringify(err));
      }
      if (user) {
        res.render('register', { username: '', errormessage: 'User is already taken !', title: 'Register' });
      }

      if (!user) {
        UserDetails(req.body).save((err, data) => {
          if (err) {
            res.render('register', { username: '', errormessage: 'User is taken or password is empty', title: 'Register' });
          }
          res.render('index', { username: data.username, title: 'Home' });
        });
      }
    });
  });
};
