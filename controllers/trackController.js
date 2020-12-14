const Track = require('../models/track');
const CartItem = require('../models/userCart');

exports.getTracks = function(req, res) {
    Track.find({}, function (err, data) {
        if (err) throw err;
        if (req.query.username != null) {
            res.render('track-list', { tracks: data, title: 'Product List', username: req.query.username });
        }
        else {
            res.render('track-list', { tracks: data, title: 'Product List', username: '' });
        }
    });
};

exports.getAddTrack = function(req, res) {
    Track.find({}, function (err, data) {
        if (err) throw err;
        if (req.query.username != null) {
            res.render('track-add', { tracks: data, title: 'Add Track', username: req.query.username });
        }
        else {
            res.render('track-add', { tracks: data, title: 'Add Track', username: '' });
        }
    });
};

exports.deleteTrack = function(req, res) {
    Track.findByIdAndRemove({ _id: req.params._id })
            .then((result) => {                
                if (req.query.username != null) {
                    res.render('track-add', { tracks: result, title: 'Add Track', username: req.query.username });
                }
                else {
                    res.render('track-add', { tracks: result, title: 'Add Track', username: '' });
                }
            })
            .catch(err => console.log(err));
};

exports.postAddTrack = function(req, res) {
    var newTrack = Track(req.body).save(function (err, data) {
        if (err) throw err;
        if (req.query.username != null) {
            res.render('track-add', { tracks: data, title: 'Track', username: req.query.username });
        }
        else {
            res.render('track-add', { tracks: data, title: 'Track', username: '' });
        }
    });
};

exports.postCart = function(req, res) {
    var newCartItem = CartItem(req.body).save(function (err, data) {
        if (err) throw err;
        if (req.query.username != null) {
            res.render('cart', { cartitems: data, title: 'Shopping Cart', username: req.query.username });
        }
        else {
            res.render('cart', { cartitems: data, title: 'Shopping Cart', username: '' });
        }
    });
};

exports.getCart = function(req, res) {
    CartItem.find({ username: req.query.username }, function (err, data) {
        if (err) throw err;
        if (req.query.username != null) {
            //console.log(data);
            res.render('cart', { cartitems: data, title: 'Shopping Cart', username: req.query.username });
        }
        else {
            res.render('cart', { cartitems: data, title: 'Shopping Cart', username: '' });
        }
    });
};

exports.deleteCart = function(req, res) {
    CartItem.findByIdAndRemove({ _id: req.params._id })
            .then((result) => {
                if (req.query.username != null) {
                    res.render('cart', { cartitems: result, title: 'Shopping Cart', username: req.query.username });
                }
                else {
                    res.render('cart', { cartitems: result, title: 'Shopping Cart', username: '' });
                }
            })
            .catch(err => console.log(err));
};
