const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserDetail = new Schema({
    username: String,
    password: String,
});
const userInfo = mongoose.model("userInfo", UserDetail, "userInfo");
module.exports = userInfo;
