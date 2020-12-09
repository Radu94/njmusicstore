const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let trackSchema= new Schema({    
    trackName:String,
    artistName:String,
    albumName:String,
    albumYear:String,
    albumGenre:String,  
    trackPrice:String
});
module.exports = mongoose.model('Track',trackSchema);