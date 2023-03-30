const express = require('express')
const router = express.Router()
const {LikeFestivalSchema} = require('../routes/likenschema');

router.get('/liken', async (req, res) => {
    try {
        const getFestivals = await Festivals.find();
        res.render('Liken', {name: 'Find Festivals', potentialFestivals, filteren})

    } catch (error) {
        console.error(error)
    }
});



// app.post('/likepagina',  async (req, res) => {  
//     // console.log('@@-- REQ. body', req.body);

//     console.log(JSON.parse(JSON.stringify(req.body)))

//     try {
//         // definieër collection en filter
//         const collection = client.db ('MaeveInterior').collection('interior');
//         const filter = {_id: new ObjectId(req.body.itemid)}

//         // zoek inspiratie beeld uit db
//         const inspiratieBeeld = await collection.findOne(filter);
        
//         // wanneer inspiratie beeld geliked unlike anders like
//         if (inspiratieBeeld.liked) {
//             const result = await collection.updateOne(filter, {$set: {liked: false}});
//         } else {
//             const result = await collection.updateOne(filter, {$set: {liked: true}});
//         }
//         // redirect naar overzicht pagina
//         res.redirect('/overzicht');
//         }   
//     catch (e) {
//         console.log(e)
//     }
// });

module.exports =  router