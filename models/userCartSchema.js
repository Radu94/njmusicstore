const mongoose = require('mongoose');

const userCartSchema = new mongoose.Schema({
    username: String,
    trackid: String,
    trackname: String,
    quantity: String,
    unitprice: String
});

const collectionName = 'userCart';

module.exports = mongoose.model('userCart', userCartSchema);

