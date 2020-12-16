
const getSuccessLogin = function(req, res) {
  res.render('index', { username: req.query.username, title: 'Home' });
};

const getErrorLogin = function(req, res) {
  res.render('login', 
    { username: '', 
      title: 'Login', 
      errormessage: 'An error occured while logging in. Please check your username and password!' 
    });
};

const getRootPath = function(req, res) {
  if (req.user) {
    res.render('index', { username: req.user.username, title: 'Home' });
  } else {
    res.render('index', { username: '', title: 'Home' });
  }    
};

const getIndex = function(req, res) {
  if (req.user) {
    res.render('index', { username: req.user.username, title: 'Home' });
  } else {
    res.render('index', { username: '', title: 'Home' });
  }
};

const getLoginPage = function(req, res) {
  res.render('login', { username: '', title: 'Login', errormessage: '' });
};

const postLoginPage = function(req, res) {
  res.redirect('/success?username=' + req.user.username);
};

const getLogout = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = {
  getSuccessLogin,
  getErrorLogin,
  getRootPath,
  getIndex,
  getLoginPage,
  postLoginPage,
  getLogout
};
