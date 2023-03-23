
const express = require('express')
let ejs = require('ejs')
require('dotenv').config()
// const wiki = require("./wiki.js");
// router.use("/wiki", wiki)
const port = 1337
const app = express()
const router = express()
router.set('view engine', 'ejs')

app.use(express.static('static'))
app.use(express.urlencoded({ extended: true }))

const inlogRoute = require('./routes/inloggen')
const registrerenRouter = require('./routes/registreren');
const filterenRouter = require('./routes/filteren');
const likenRouter = require('./routes/liken');
const matchenRouter = require('./routes/matchen');
// const { database }  = require('./routes/dataschema');

// Connect Mongoose 

const mongoose = require('mongoose');
// const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}${process.env.DATABASE_URI}`;

app.set('view engine', 'ejs')

// async function main() {
//   await mongoose.connect(uri,{
//     dbName: process.env.DATABASE_NAME,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
//   console.log("Succesfully connected")
// }
// main().catch(err => console.log(err));

// Routing




app.use('/registreren', registrerenRouter)

app.use('/filteren', filterenRouter)

app.use('/liken', likenRouter)

app.use('/matchen', matchenRouter)

//404 send

app.use(function (req, res) {
  res.status(400).render('404')
});

app.on('close', () => {
  client.close()
});

// listener

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
