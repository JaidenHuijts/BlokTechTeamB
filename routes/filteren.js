const express = require('express')
const router = express.Router()

router.get('/filteren', (req, res) => {
    res.render('registreren')
})

module.exports =  router