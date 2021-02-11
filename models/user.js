const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = mongoose.model('user', new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String
}), 'user');

const addUser = async (username, password) => {
  const user = new User({
    username,
    password,
  });
  
  try {
    const { username } = await user.save();
    
    return username;

  } catch (e) {
    console.log('User already exists!', e);
    return;
  }
};

module.exports = {
  User,
  addUser,
};
