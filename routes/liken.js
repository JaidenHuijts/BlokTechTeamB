const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('./liken.ejs')
})

module.exports =  router

//NODIG OM INFO UIT DATABASE TE HALEN!
// app.get('/liken', async (req, res) => {
//     // logic db call -> template aanroepen -> de data meegeven aan de template ||
//     const collection = client.db ('MaeveInterior').collection('interior');
//     const interiorList = await collection.find ({}).toArray();

//     res.render("liken.ejs",  {interiorList});
// })



//OM TE KUNNEN ZIEN OF DIE LIKE TRUE OF FALSE IS
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