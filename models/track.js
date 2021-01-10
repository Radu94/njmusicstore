const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const trackSchema = new Schema({
    trackName: String,
    artistName: String,
    albumName: String,
    albumYear: String,
    albumGenre: String,
    trackPrice: String,
});
const track = mongoose.model("Track", trackSchema, "Track");
module.exports = track;
