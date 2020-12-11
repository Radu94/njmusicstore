const bodyParser = require('body-parser');
const Track = require('../models/trackSchema');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
  app.get('/track', (req, res) => {
    Track.find({}, (err, data) => {
      if (err) throw err;
      if (req.query.username != null) {
        res.render('track-list', { tracks: data, title: 'Product List', username: req.query.username });
      } else {
        res.render('track-list', { tracks: data, title: 'Product List', username: '' });
      }
    });
  });
  app.get('/track-list', (req, res) => {
    Track.find({}, (err, data) => {
      if (err) throw err;
      if (req.query.username != null) {
        res.render('track-list', { tracks: data, title: 'Product List', username: req.query.username });
      } else {
        res.render('track-list', { tracks: data, title: 'Product List', username: '' });
      }
    });
  });
  app.get('/track-add', (req, res) => {
    Track.find({}, (err, data) => {
      if (err) throw err;
      if (req.query.username != null) {
        res.render('track-add', { tracks: data, title: 'Add Track', username: req.query.username });
      } else {
        res.render('track-add', { tracks: data, title: 'Add Track', username: '' });
      }
    });
  });
  app.delete('/track/:_id', (req, res) => {
    // eslint-disable-next-line no-underscore-dangle
    Track.find({ _id: req.params._id })
      .remove((err, data) => {
        if (err) throw err;
        if (req.query.username != null) {
          res.render('track-add', { tracks: data, title: 'Add Track', username: req.query.username });
        } else {
          res.render('track-add', { tracks: data, title: 'Add Track', username: '' });
        }
      });
  });
  app.post('/track-add', urlencodedParser, (req, res) => {
    Track(req.body).save((err, data) => {
      if (err) throw err;
      if (req.query.username != null) {
        res.render('track-add', { tracks: data, title: 'Track', username: req.query.username });
      } else {
        res.render('track-add', { tracks: data, title: 'Track', username: '' });
      }
    });
  });
};
