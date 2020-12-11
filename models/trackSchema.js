const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  trackName: String,
  artistName: String,
  albumName: String,
  albumYear: String,
  albumGenre: String,
  trackPrice: String
});
const collectionName = 'tracks';

module.exports = mongoose.model(collectionName, trackSchema, collectionName);
