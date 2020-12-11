const bodyParser = require('body-parser');
const CartItem = require('../models/userCartSchema');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
  app.post('/cart', urlencodedParser, (req, res) => {
    CartItem(req.body).save((err, data) => {
      if (err) throw err;
      if (req.query.username != null) {
        res.render('cart', { cartitems: data, title: 'Shopping Cart', username: req.query.username });
      } else {
        res.render('cart', { cartitems: data, title: 'Shopping Cart', username: '' });
      }
    });
  });
  app.get('/cart', (req, res) => {
    CartItem.find({ username: req.query.username }, (err, data) => {
      if (err) throw err;
      if (req.query.username != null) {
        res.render('cart', { cartitems: data, title: 'Shopping Cart', username: req.query.username });
      } else {
        res.render('cart', { cartitems: data, title: 'Shopping Cart', username: '' });
      }
    });
  });
  app.delete('/cart/:_id', (req, res) => {
    CartItem.find({ _id: req.params._id })
      .remove((err, data) => {
        if (err) throw err;
        if (req.query.username != null) {
          res.render('cart', { cartitems: data, title: 'Shopping Cart', username: req.query.username });
        } else {
          res.render('cart', { cartitems: data, title: 'Shopping Cart', username: '' });
        }
      });
  });
};
