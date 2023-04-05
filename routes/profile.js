const express = require('express')
const router = express.Router()
const profileModel = require('../db/models/profileSchema');
const matchModel = require('../db/models/matchSchema');
const festivalModel = require('../db/models/festivalsSchema');
const userModel = require('../db/models/userSchema');

// Moet vervangen worden door een echt id van de gebruiker die ingelogd is
// zodra de login functionaliteit werkt.
const authId = 99;


// Alle potentiele matches worden in de variable getMatches gezet. 
// getMatches filter zorgt ervoor dat alle id's in de array van de variabele matches wordt gezet.

router.get('/', async (req, res) => {
    try {
      const getMatches = await matchModel.find();
      const registerData = await userModel.find();

      console.log("registerdata", registerData[0]);

      const profile = await profileModel.findOne({id: authId});
      // Check in alle users of hun id overeenkomt met de gebruikers matches id's, 
      // zo ja haal dan hun volledige data op en voeg toe aan matches
      const matches = getMatches.filter(user => profile.matches.find(id => id === user.id))

      const getInformation = await festivalModel.find({liked: true});
      console.log("dit is insipiratie", getInformation)
      res.render('profile', {profile, matches, getInformation, registerData})
    } catch (error) {
      console.error(error)
    }
});
  
// Met een button wordt in de database van id de bijbehorende match verwijderd uit de array
  
router.post('/removeFromMatches', async (req, res) => {
    const removeMatchButton = req.body.removeMatchButton
    try { 
      await profileModel.findOneAndUpdate({id: authId}, {$pull:{matches: Number(removeMatchButton)}})
      console.log(removeMatchButton)
  
    } catch (error) {
      console.error(error)
    }
    res.redirect('/profile')
});

module.exports =  router;
