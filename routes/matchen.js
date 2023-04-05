const express = require('express')
const router = express.Router()
const matchModel = require('../db/models/matchSchema');
const profileModel = require('../db/models/profileSchema');
const authId = 99;

router.post('/filteren', async (req, res) => {

    try {
        const getMatches = await matchModel.find();
        const profile = await profileModel.findOne({id: authId})
    
        res.render('matchen', {potentialMatches: getMatches, profile})

      } catch (error) {
        console.error(error)
      }
});

// Met een button kan de gebruiker matches toevoegen aan zijn profiel of verwijderen.

router.post('/match', async (req, res) => {
    const matchButtonLike = req.body.matchButtonLike;
    const matchButtonDislike = req.body.matchButtonDislike;
       
      if(matchButtonLike){
        try {
          await profileModel.findOneAndUpdate({id: authId}, {$addToSet:{matches: Number(matchButtonLike)}}, {
            new: true
  
          })
        } catch(error) {
            console.error(error)
        }
      } else {
        try {
          await profileModel.findOneAndUpdate({id: authId}, {$addToSet:{dislikes: Number(matchButtonDislike)}}, {
            new: true
            })
        } catch(error) {
            console.error(error)
        }
      }
      res.redirect('/profile')
});

module.exports =  router
