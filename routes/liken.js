const express = require('express')
const router = express.Router()

router.get('/liken', (req, res) => {
    res.render('liken')
})

module.exports =  router