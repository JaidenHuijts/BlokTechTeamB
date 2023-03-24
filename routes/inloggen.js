const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.render('./inlog.ejs')
})



module.exports =  router