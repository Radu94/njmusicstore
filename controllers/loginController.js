exports.getIndex = (req, res, next) => {
  res.render('index', { username : req.query.username!=null ? req.query.username : '' , title:'Home'});
};

exports.getLogin = (req, res, next) => {
  res.render('login',{username : '' ,title: 'Login', errormessage:''});
};

exports.postLogin = (req, res, next) => {
  res.redirect('/index?username='+req.user.username);
};

exports.getLogout = (req, res, next) => {
    req.logout();
    res.redirect('/index');
};

exports.getError = (req, res, next) => {
  res.render('login',{username:'',title:'Login',errormessage:'An error occured while logging in. Please check your username and password!'})
};