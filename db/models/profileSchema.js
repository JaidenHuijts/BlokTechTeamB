const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
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

const profileModel =  mongoose.model('profile', profileSchema, 'ProfileData');

module.exports =  profileModel; 