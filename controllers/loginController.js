
exports.getSuccessLogin = function(req, res) {
  res.render('index', { username: req.query.username, title: 'Home' });
};

exports.getErrorLogin = function(req, res) {
  res.render('login', 
    { username: '', 
      title: 'Login', 
      errormessage: 'An error occured while logging in. Please check your username and password!' 
    });
};

exports.getRootPath = function(req, res) {
  if (req.user) {
    res.render('index', { username: req.user.username, title: 'Home' });
  } else {
    res.render('index', { username: '', title: 'Home' });
  }    
};

exports.getIndex = function(req, res) {
  if (req.user) {
    res.render('index', { username: req.user.username, title: 'Home' });
  } else {
    res.render('index', { username: '', title: 'Home' });
  }
};

exports.getLoginPage = function(req, res) {
  res.render('login', { username: '', title: 'Login', errormessage: '' });
};

exports.postLoginPage = function(req, res) {
  res.redirect('/success?username=' + req.user.username);
};

exports.getLogout = function(req, res) {
  req.logout();
  res.redirect('/');
};
