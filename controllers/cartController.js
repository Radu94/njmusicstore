const bodyParser = require('body-parser');
const CartItem = require('../models/userCartSchema');
const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
    app.post('/cart', urlencodedParser, function (req, res) {
        CartItem(req.body).save(function (err, data) {
            if (err) throw err;
            if (req.query.username != null) {
                res.render('cart', {cartitems: data, title: 'Shopping Cart', username: req.query.username});
            } else {
                res.render('cart', {cartitems: data, title: 'Shopping Cart', username: ''});
            }
        });
    });
    app.get('/cart', function (req, res) {
        CartItem.find({username: req.query.username}, function (err, data) {
            if (err) throw err;
            if (req.query.username != null) {
                //console.log(data);
                res.render('cart', {cartitems: data, title: 'Shopping Cart', username: req.query.username});
            } else {
                res.render('cart', {cartitems: data, title: 'Shopping Cart', username: ''});
            }
        });
    });
    app.delete('/cart/:_id', function (req, res) {
        CartItem.find({_id: req.params._id})
            .remove(function (err, data) {
                if (err) throw err;
                if (req.query.username != null) {
                    res.render('cart', {cartitems: data, title: 'Shopping Cart', username: req.query.username});
                } else {
                    res.render('cart', {cartitems: data, title: 'Shopping Cart', username: ''});
                }
            });
    });
};
