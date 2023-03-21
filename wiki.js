const express = require("express");
const router = express.Router();

//------------------ MongoDB Connect ---------------------------

const { MongoClient } = require("mongodb")
const { update, result } = require('lodash')

const uri = process.env.DB_STRING

const client = new MongoClient(uri, { useNewUrlParser:true, useUnifiedTopology: true})

const db = client.db("User1")
const coll = db.collection("Data")







//------------------------------------------------------------
//------------------ Home route ---------------------------
//------------------------------------------------------------

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






//-----------------------------------------------------------------
//------------------ Edit Profile Route ---------------------------
//-----------------------------------------------------------------

router.get('/edit', (req, res) => {
    res.render('edit.ejs')
})






//-----------------------------------------------------------------
//------------------ Post Data From Form ----------------------
//-----------------------------------------------------------------

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
        { _id: "1" },          
    {
        username: username,                
        tag: tag,                
        firstname: firstname,
        lastname: lastname,
        email: email,
        age: age,
    })            
      
    console.log('Account aangemaakt voor', username )
  
    res.redirect('/')
});







//-----------------------------------------------------------------
//------------------ 404 Error Page -----------------------------
//-----------------------------------------------------------------

  router.get('*', (req, res) => {
    res.send("error 404, page not found")
  })




  module.exports = router;