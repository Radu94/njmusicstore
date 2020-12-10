module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {username: '', title: 'Home'});
    });
    app.get('/index', function (req, res) {
        if(req.user) {
            res.render('index', {username: req.user.username, title: 'Home'});
        } else {
            res.render('index', {username: '', title: 'Home'});
        }
    });
};
