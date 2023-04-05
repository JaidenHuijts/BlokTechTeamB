const express = require('express');
const router = express.Router();
const UserModel = require('../db/models/userSchema');

// Make sure to use the body parser middleware for parsing request bodies
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.render('./registreren.ejs');
});

router.post('/liken', async (req, res) => {
  try {
    // Create a new user document from the request body
    const newUser = new UserModel(req.body);
    console.log("start profile route", newUser)

    // Save the user document to the database
    const savedUser = await newUser.save();
    console.log("end profile route")
    res.redirect('/liken')
  } catch (err) {
    // Handle any errors that occurred during the save operation
    console.error(err);
    res.redirect('/registreren')
  }
});

module.exports = router;