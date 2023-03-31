const express = require('express')
const router = express.Router()
const matchModel = require('../db/models/matchSchema');
router.get('/', (req, res) => {
    res.render('./filteren')
})






  module.exports =  router