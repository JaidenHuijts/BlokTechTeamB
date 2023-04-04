const express = require('express')
const router = express.Router()
// const { Festivals } = require('../db/models/likenschema');
const festivalModel = require('../db/models/festivalsSchema');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    try{
        const getInformation = await festivalModel.find({});
        //console.log(getInformation)
        
        res.render('./liken', {getInformation});
    } catch (error) {
        console.error(error)
    }

});


router.post('/',  async (req, res) => {  
    try {
        // filter voor DB  
        const filter = {_id: new mongoose.Types.ObjectId(req.body.itemid)}

        // zoek inspiratie beeld uit db
        const inspiratieBeeld = await festivalModel.findOne(filter);
        
        // als inspiratie beeld geliked, unlike anders like
        if (inspiratieBeeld.liked) {
            const update = await festivalModel.findOneAndUpdate(filter, {$set: {liked: false}});
        } else {
            const update = await festivalModel.findOneAndUpdate(filter, {$set: {liked: true}});
        }
        // redirect naar overzicht pagina
        res.redirect('/liken');
        }   
    catch (e) {
        console.log(e)
    }
});

module.exports =  router