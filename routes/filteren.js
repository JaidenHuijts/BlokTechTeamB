const express = require('express')
const router = express.Router()
const matchModel = require('../db/models/matchSchema');


router.get('/', (req, res) => {
    res.render('./filteren')
});

// router.get('/newUser', async (req, res) => {
//   try {
//     const user = await profileModel.create({
//     //_id: new ObjectId(11),
//     userID: 11,
//     image: "https://images.unsplash.com/photo-1520699918507-3c3e05c46b0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80",
//     name: "Bas",
//     gender: "Man",
//     location: "Den Helder",
//     age: "21",
//     favgenres: "Pop",
//     favtrack: "idk",
//     favfestivals: ["a"],
//     bio: "ja",
//     matches: [],
//     dislikes: []
//   })

//   const save = await user.save();
//   } catch (err) {
//     console.log(err);
//   }
// })


router.post('/matchen', async (req, res) => {
  try {
    // let ageGroup;
    // const ageInt = Number(req.body.leeftijd);
    // if (ageInt >= 18 && ageInt <= 25) {
    //   ageGroup = "18";
    // }

    const potentialMatches = await matchModel.find({
    gender: req.body.geslacht,
    age: req.body.leeftijd,
    favgenres: req.body.muziekgenre,
  });

  console.log(potentialMatches);

  res.render('./matchen', {potentialMatches});
  } catch (err) {
    console.log(err);
  }
});

  // res.redirect('matchen', {match});



  module.exports =  router