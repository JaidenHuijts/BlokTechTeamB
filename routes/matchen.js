const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('./matchen.ejs')
})

module.exports =  router
