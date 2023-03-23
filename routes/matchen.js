const express = require('express')
const router = express.Router()

router.get('/matchen', (req, res) => {
    res.render('matchen')
})

module.exports =  router
