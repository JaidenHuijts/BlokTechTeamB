const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    _id: String,
    id: Number,
    image: String,
    name: String,
    gender: String,
    location: String,
    age: String,
    favgenres: [String],
    favtrack: String,
    favfestivals: [String],
    bio: String,
    matches: [Number],
    dislikes: [Number]
});

const Match =  mongoose.model('Match', matchSchema, "MatchesData");

module.exports = { Match };