const UserDetails = require('../models/userSchema');

module.exports = function (app, passport) {
    app.get('/success', (req, res) => res.render('index', {username: req.query.username, title: 'Home'}));
    app.get('/error', (req, res) => res.render('login', {
        username: '',
        title: 'Login',
        errormessage: 'An error occured while logging in. Please check your username and password!'
    }));

    app.post('/',
        passport.authenticate('local', {failureRedirect: '/error'}),
        function (req, res) {
            res.redirect('/home', {username: req.user.username});
        });

    app.get('/login', function (req, res) {
        res.render('login', {username: '', title: 'Login', errormessage: ''});
    });

    app.get('/register', function (req, res) {
        res.render('register',{username: '', errormessage: '', title: 'Register'});
    });

    app.post('/register', function (req, res) {
        // console.log('looking for => ', JSON.stringify(req.body));
            UserDetails.findOne({
                username: req.body.username
            }, function (err, user) {
                if (err) {
                    console.log('err => ', JSON.stringify(err));
                }
                if(user)  {
                    res.render('register', {username: '', errormessage: 'User is already taken !', title: 'Register'});
                    // console.log('found => ', JSON.stringify(user));
                }

                if (!user) {
                    UserDetails(req.body).save(function (err, data) {
                        if (err) {
                            // console.log('found => ', JSON.stringify(err));
                            res.render('register',{username: '', errormessage: 'User is taken or password is empty', title: 'Register'});
                        }
                        if (data) {
                            res.render('index', {username: data.username, title: 'Home'});
                        }
                    });
                }
            });
    });

    app.post('/login',
        passport.authenticate('local', {failureRedirect: '/error'}),
        function (req, res) {
            res.redirect('/success?username=' + req.user.username);
        });
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
};
