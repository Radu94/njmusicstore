const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const collectionName = 'userInfo';

module.exports = mongoose.model(collectionName, userSchema, collectionName);
