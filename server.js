
const express = require('express')
let ejs = require('ejs')
const mongoose = require('mongoose')
require('dotenv').config()
var bodyParser = require('body-parser')

// const wiki = require("./wiki.js");
// router.use("/wiki", wiki)



const router = express()
const port = 1337


router.set('view engine', 'ejs')

router.use(express.static('static'))

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
router.use(express.urlencoded({ extended: true }))




// mongo DB connect

const { MongoClient } = require("mongodb")
const { update, result } = require('lodash')

const uri = process.env.DB_STRING

const client = new MongoClient(uri, { useNewUrlParser:true, useUnifiedTopology: true})

const db = client.db("User1")
const coll = db.collection("Data")



// failed experiment V

// async function run() {
//   try {
//     await client.connect()

//     // database and collection code goes here

//     // find code goes here
//     await coll.find(
//       {_id: "1"}, 
//       {
//         username: 1,
//         _id: 0

//       }).limit(1).toArray(function(err, datacollected) {
//         console.log(datacollected)
//       })

//     // iterate code goes here
//     // await result.forEach(console.log)
    
//     // insert code here

//   } finally {
//     // await client.close();
    
//   }
// }
// // run().catch(console.dir);




//Home Get


router.get('/', async (req, res) => {
  try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    const db = client.db("User1")
    const coll = db.collection("Data")


    const datacollected = await coll.find({}).limit(1).toArray()
    console.log("is the data collected?", datacollected)

    res.render('index.ejs', { datacollected: datacollected })

    client.close()


  } catch (error) {
    console.error(error)
    res.status(500).send('Error retrieving data')
  }
});


// profile edit get

router.get('/edit', (req, res) => {
  res.render('edit.ejs')
})



// -----------------------------trial and error (mostly error) -----------------------------//

const dataId = ObjectId("64199f7d7c9d761691c42276")

router.post('/add-data', async (req, res) => {

  console.log("running postroute")

  const formdata = req.body
  const username = req.body.username
  const tag = req.body.tag
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const email = req.body.email
  const age = req.body.age
  const collection = client.db("User1").collection('Data')



  

    await collection.replaceOne( 
      { _id: dataId },          
    {
      username: username,                
      tag: tag,                
      firstname: firstname,
      lastname: lastname,
      email: email,
      age: age,
    })            
    
    console.log('Account aangemaakt voor', username )

    // niet render naar index maar route



    res.redirect('/')

  
});

//404 send

router.get('*', (req, res) => {
  res.send("error 404, page not found")
})



router.on('close', () => {
  client.close()
});

// listener

router.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
