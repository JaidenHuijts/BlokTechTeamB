const mongoose = require('mongoose')

const likenSchema = new mongoose.Schema({
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

const Festivals = mongoose.model('Liken', likenSchema);

module.exports = { Festivals }