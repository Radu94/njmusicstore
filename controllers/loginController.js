exports.getIndex = (req, res) => {
	res.render('index', {
		username: req.query.username != null ? req.query.username : '',
		title: 'Home',
	});
};

exports.getLogin = (req, res) => {
	res.render('login', { username: '', title: 'Login', errormessage: '' });
};

exports.postLogin = (req, res) => {
	res.redirect('/index?username=' + req.user.username);
};

exports.getLogout = (req, res) => {
	req.logout();
	res.redirect('/index');
};

exports.getError = (req, res) => {
	res.render('login', {
		username: '',
		title: 'Login',
		errormessage: 'An error occured while logging in. Please check your username and password!',
	});
};
