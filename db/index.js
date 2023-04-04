const mongoose = require('mongoose');
console.log("password", process.env.DB_USERNAME)

const connectDB  = async function() {
    try {
       await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.PASSWORD}${process.env.DATABASE_URI}`);       
       console.log('DB connected');
       return;
    } catch (error) {
        console.log('DB not connected', error)
        return;
    }
}

module.exports = { connectDB }