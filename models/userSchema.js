const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const collectionName = 'userInfo';

module.exports = mongoose.model(collectionName, userSchema, collectionName);
