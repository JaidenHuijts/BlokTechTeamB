const mongoose = require('mongoose');


const likeFestivalSchema = new mongoose.Schema({

  _id: String,
 imgFestival:String,
imgHeartEmpty:String,
imgHeartFull:String,
});

const Festivals =  mongoose.model('Festivals', likeFestivalSchema, "Liken");

module.exports = {Festivals};