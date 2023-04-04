const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  _id: {
    type: ObjectId
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  birthdate: {
    type: String,
    required: true
  }
})

const userModel = mongoose.model('Users', userSchema);

module.exports = { userModel }