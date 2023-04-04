const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Firstname is required"]
    }, 
    lastname: {
        type: String,
        required: [true, "Lastname is required"]
    },
    email: {
        type: String,
        required: [true, "E-Mail is required"]
    },
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    password: {
        type: String,
        required: [true, "Lastname is required"]
    },
    gender: {
        type: String,
        required: [true, "Gender is required"]
    },
    birthdate: {
        type: Date,
        required: [true, "Birthdate is required"]
    }
})

const UserModel = mongoose.model("Users", UserSchema)
module.exports = UserModel