const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CartSchema = new Schema({
    username:String,
    trackid:String,
    trackname:String,
    quantity:String,
    unitprice:String
});
module.exports = mongoose.model("userCart", CartSchema, "userCart");