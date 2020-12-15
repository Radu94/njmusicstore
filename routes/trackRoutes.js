const express = require('express');

const bodyParser = require('body-parser');

const trackController = require('../controllers/trackController');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();

router.get('/track', trackController.getTracks);

router.get('/track-list', trackController.getTracks);

router.get('/track-add', trackController.getAddTrack);

router.delete('/track/:_id', trackController.deleteTrack);

router.post('/track-add', urlencodedParser, trackController.postAddTrack);

router.post('/cart', urlencodedParser, trackController.postCart);

router.get('/cart', trackController.getCart);

router.delete('/cart/:_id', trackController.deleteFromCart);

module.exports = router;