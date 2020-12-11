const UserDetails = require('../models/userSchema');

module.exports = function (app) {
    app.get('/register', function (req, res) {
        res.render('register',{username: '', errormessage: '', title: 'Register'});
    });

    app.post('/register', function (req, res) {
        UserDetails.findOne({
            username: req.body.username
        }, function (err, user) {
            if (err) {
                console.log('err => ', JSON.stringify(err));
            }
            if(user)  {
                res.render('register', {username: '', errormessage: 'User is already taken !', title: 'Register'});
            }

            if (!user) {
                UserDetails(req.body).save(function (err, data) {
                    if (err) {
                        res.render('register',{username: '', errormessage: 'User is taken or password is empty', title: 'Register'});
                    }
                    if (data) {
                        res.render('index', {username: data.username, title: 'Home'});
                    }
                });
            }
        });
    });
};
