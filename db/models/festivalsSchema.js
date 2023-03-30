const mongoose = require('mongoose')

const festivalSchema = new mongoose.Schema({
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

const festivalModel = mongoose.model('festivals', festivalSchema);

module.exports = festivalModel;