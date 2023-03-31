const express = require('express')
const router = express.Router()
const matchModel = require('../db/models/matchSchema');


router.get('/', (req, res) => {
    res.render('./filteren')
});


router.post('./matchen', async (req, res) => {
  // console.log('@@-- test', req.params.id)
  // fetch de sportschool by id
  

  // logic db call -> template aanroepen -> de data meegeven aan de template ||
  console.log(req.body.geslacht) //In een req.body staat formulier data die je gepost heb
  const match = await matchModel.find({
    gender: req.body.geslacht,
    leeftijd: req.body.leeftijd,
    favgenres: req.body.muziekgenre
  }).toArray();
  console.log('@@-- data', match);


  res.render('/.filteren', {
    data: match


  });
});

  module.exports =  router