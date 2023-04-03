const express = require('express');
const router = express.Router();
const UserModel = require('../db/models/userSchema');

// Make sure to use the body parser middleware for parsing request bodies
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.render('registreren');
});

router.post('/postdata', (req, res) => {
  // Create a new user document from the request body
  const newUser = new UserModel(req.body);

  // Save the user document to the database
  newUser.save((err, savedUser) => {
    if (err) {
      // Bij error 
      console.error(err);
      res.status(500).json({ error: 'Failed to save user' });
    } else {
      // als t werkt doe dit
      res.json(savedUser);
      res.render("./inlog.ejs")
    }
  });
});

module.exports = router;















// //Home Get


// router.get('/', async (req, res) => {
//     try {
//       const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//       const db = client.db("User1")
//       const coll = db.collection("Data")
  
  
//       const datacollected = await coll.find({}).limit(1).toArray()
//       console.log("is the data collected?", datacollected)
  
//       res.render('index.ejs', { datacollected: datacollected })
  
//       client.close()
  
  
//     } catch (error) {
//       console.error(error)
//       res.status(500).send('Error retrieving data')
//     }
// });

// // const dataId = ObjectId("64199f7d7c9d761691c42276")

// router.post('/add-data', async (req, res) => {

//   console.log("running postroute")

//   const formdata = req.body
//   const username = req.body.username
//   const tag = req.body.tag
//   const firstname = req.body.firstname
//   const lastname = req.body.lastname
//   const email = req.body.email
//   const age = req.body.age
//   const collection = client.db("User1").collection('Data')



//     await collection.replaceOne( 
//       { _id: dataId },          
//     {
//       username: username,                
//       tag: tag,                
//       firstname: firstname,
//       lastname: lastname,
//       email: email,
//       age: age,
//     })            
    
//     console.log('Account aangemaakt voor', username )

//     // niet render naar index maar route

//     res.redirect('/')

// });

// // profile edit get

// router.get('/edit', (req, res) => {
//     res.render('edit.ejs')
//   })

// module.exports =  router