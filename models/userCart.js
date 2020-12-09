const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userCartSchema = new Schema({
    username: String,
    trackid: String,
    trackname: String,
    quantity: String,
    unitprice: String
});

module.exports = mongoose.model('UserCart', userCartSchema);