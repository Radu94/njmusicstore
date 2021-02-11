const mongoose = require('mongoose');

const Track = mongoose.model('track', {    
  trackName: {
      type: String,
      unique: true
  },
  artistName: String,
  albumName: String,
  albumYear: String,
  albumGenre: String,  
  trackPrice: String
});

const UserTrack = mongoose.model('userTrack', {
  username: {
      type: String,
      unique: true
  },
  trackId: String,
  trackName: String,
  quantity: String,
  unitPrice: String
});

module.exports = {
  Track,
  UserTrack,
};
