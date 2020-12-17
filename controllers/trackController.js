const Track = require('../models/track');
const CartItem = require('../models/cartItem')

getTrack = (req, res) => {
    Track.find({}, function (err, data) {
        if (err) throw err;
        if (req.query.username != null) {
            res.render('track-list', { tracks: data, title: 'Product List', username: req.query.username });
        }
        else {
            res.render('track-list', { tracks: data, title: 'Product List', username: '' });
        }
    });
}

getTrackList = (req, res) => {
    Track.find({}, function (err, data) {
        if (err) throw err;
        if (req.query.username != null) {
            res.render('track-list', { tracks: data, title: 'Product List', username: req.query.username });
        }
        else {
            res.render('track-list', { tracks: data, title: 'Product List', username: '' });
        }
    });
}

getTrackAdd = (req, res) => {
    Track.find({}, function (err, data) {
        if (err) throw err;
        if (req.query.username != null) {
            res.render('track-add', { tracks: data, title: 'Add Track', username: req.query.username });
        }
        else {
            res.render('track-add', { tracks: data, title: 'Add Track', username: '' });
        }
    });
}

deleteTrack = (req, res) => {
    Track.find({ _id: req.params._id })
        .remove(function (err, data) {
            if (err) throw err;
            if (req.query.username != null) {
                res.render('track-add', { tracks: data, title: 'Add Track', username: req.query.username });
            }
            else {
                res.render('track-add', { tracks: data, title: 'Add Track', username: '' });
            }
        });
}


postTrackAdd = (req, res) => {

    const newTrack = Track(req.body).save(function (err, data) {
        if (err) throw err;
        if (req.query.username != null) {
            res.render('track-add', { tracks: data, title: 'Track', username: req.query.username });
        }
        else {
            res.render('track-add', { tracks: data, title: 'Track', username: '' });
        }
    });
}


postCart = (req, res) => {
    const newCartItem = CartItem(req.body).save(function (err, data) {
        if (err) throw err;
        if (req.query.username != null) {
            res.render('cart', { cartitems: data, title: 'Shopping Cart', username: req.query.username });
        }
        else {
            res.render('cart', { cartitems: data, title: 'Shopping Cart', username: '' });
        }
    });
}


getCart = (req, res) => {
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
}


deleteCart = (req, res) => {
    CartItem.find({ _id: req.params._id })
        .remove(function (err, data) {
            if (err) throw err;
            if (req.query.username != null) {
                res.render('cart', { cartitems: data, title: 'Shopping Cart', username: req.query.username });
            }
            else {
                res.render('cart', { cartitems: data, title: 'Shopping Cart', username: '' });
            }
        });
}

module.exports = {
    getTrack,
    getTrackList,
    getTrackAdd,
    deleteTrack,
    postTrackAdd,
    postCart,
    getCart,
    deleteCart
}