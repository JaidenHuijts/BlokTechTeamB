const express = require('express')
const router = express.Router()
const { Match } = require('./matchSchema')
router.get('/', (req, res) => {
    res.render('./filteren')
})






  module.exports =  router