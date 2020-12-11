const bodyParser = require('body-parser');
const Track = require('../models/trackSchema');
const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
    app.get('/track', function (req, res) {
        Track.find({}, function (err, data) {
            if (err) throw err;
            if (req.query.username != null) {
                res.render('track-list', {tracks: data, title: 'Product List', username: req.query.username});
            } else {
                res.render('track-list', {tracks: data, title: 'Product List', username: ''});
            }
        });
    });
    app.get('/track-list', function (req, res) {
        Track.find({}, function (err, data) {
            if (err) throw err;
            if (req.query.username != null) {
                res.render('track-list', {tracks: data, title: 'Product List', username: req.query.username});
            } else {
                res.render('track-list', {tracks: data, title: 'Product List', username: ''});
            }
        });
    });
    app.get('/track-add', function (req, res) {
        Track.find({}, function (err, data) {
            if (err) throw err;
            if (req.query.username != null) {
                res.render('track-add', {tracks: data, title: 'Add Track', username: req.query.username});
            } else {
                res.render('track-add', {tracks: data, title: 'Add Track', username: ''});
            }
        });
    });
    app.delete('/track/:_id', function (req, res) {
        Track.find({_id: req.params._id})
            .remove(function (err, data) {
                if (err) throw err;
                if (req.query.username != null) {
                    res.render('track-add', {tracks: data, title: 'Add Track', username: req.query.username});
                } else {
                    res.render('track-add', {tracks: data, title: 'Add Track', username: ''});
                }
            });
    });
    app.post('/track-add', urlencodedParser, function (req, res) {
        Track(req.body).save(function (err, data) {
            if (err) throw err;
            if (req.query.username != null) {
                res.render('track-add', {tracks: data, title: 'Track', username: req.query.username});
            } else {
                res.render('track-add', {tracks: data, title: 'Track', username: ''});
            }
        });
    });
};
