const express = require('express');
const router = express.Router();
const cartController = require('./../controllers/cartController');

router.post('/cart', cartController.postCart);
router.get('/cart',cartController.getCart);
router.delete('/cart/:_id', cartController.deleteCart);

module.exports = router;