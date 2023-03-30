const {Schema, model} = require('mongoose');

const likeFestivalSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    imgFestival: {
        type: String,
        required: true
    },
    imgHeartEmpty: {
        type: String,
        required: true
    },
    imgHeartFull: {
        type: String,
        required: true
    },
})

const LikeFestivalSchema = model('LikeFestivalSchema', likeFestivalSchema);
module.exports = {LikeFestivalSchema}