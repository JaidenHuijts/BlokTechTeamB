const express = require('express')
const router = express.Router()
const matchModel = require('../db/models/matchSchema');

router.get('/', (req, res) => {
    res.render('./filteren')
});

router.post('/matchen', async (req, res) => {
  // fetch de sportschool by id
  
  // logic db call -> template aanroepen -> de data meegeven aan de template ||
  console.log(req.body.geslacht, req.body.leeftijd, req.body.muziekgenre);//In een req.body staat formulier data die je gepost heb
  const match = await matchModel.find({
    gender: req.body.geslacht,
    age: req.body.leeftijd,
    favgenres: req.body.muziekgenre
  });

  res.redirect('/matchen');
});

module.exports =  router 
