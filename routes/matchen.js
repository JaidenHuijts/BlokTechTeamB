const express = require('express')
const router = express.Router()
const matchModel = require('../db/models/matchSchema');


router.get('/', async (req, res) => {

    try{
        const getUsers = await matchModel.find();
        console.log(getUsers)

        res.render('./matchen', {getUsers})
    } catch (error) {
        console.error(error)
    }

});

// router.post('/match', async (req, res) => {
//     const matchButtonLike = req.body.matchButtonLike;
//     const matchButtonDislike = req.body.matchButtonDislike;
       
//       if(matchButtonLike){
//         try {
//           await matchModel.findOneAndUpdate({id: 7}, {$addToSet:{matches: Number(matchButtonLike)}}, {
//             new: true
  
//           })
//         } catch(error) {
//             console.error(error)
//         }
//       } else {
//         try {
//           await matchModel.findOneAndUpdate({id: 7}, {$addToSet:{dislikes: Number(matchButtonDislike)}}, {
//             new: true
//             })
//         } catch(error) {
//             console.error(error)
//         }
//       }
//       res.redirect('/matches')
// });

module.exports =  router
