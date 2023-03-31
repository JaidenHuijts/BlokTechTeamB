const express = require('express')
const router = express.Router()
const { Festivals } = require('../db/models/likenschema');
const festivalModel = require('../db/models/festivalsSchema');

router.get('/', async (req, res) => {    
    // try {
    //     console.log(Festivals)
    //     // const getData = await Festivals.find('Liken', (err, collection) => {
    //     //     console.log("dit is data", collection);
    //     async function findAllDocuments() {
    //     try{
    //         console.log("before")
    //         const docs = await Festivals.find({})
    //         console.log("after", docs)
    //     } catch (err) {
    //         console.error(err)
    //     }
    //     console.log("@@-- getData", docs)
    // }
    //     res.render('./liken')

    // } catch (error) {
    //     console.error(error)
    // }
    // findAllDocuments()
    try {
        //const allFestivals = await Festivals.find({});
        //console.log(allFestivals);
        // const festival = await festivalModel.create({
        //     id: 1,
        //     imgFestival: 'werfwsf',
        //     imgHeartEmpty: 'fsdfsdg',
        //     imgHeartFull: 'fsdfsdg'
        // })

        //const save = await festival.save();

        const allFestivals = await festivalModel.find({});
        console.log(allFestivals);
        res.render('./liken', {allFestivals})
    } catch (err) {
        console.log(err);
    }
});




module.exports =  router