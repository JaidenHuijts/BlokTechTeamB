const mongoose = require('mongoose');

const connectDB  = async function() {
    try {
       await mongoose.connect(`mongodb+srv://projecttechteamb:ajax2002@matchingdb.r5sleuk.mongodb.net/?retryWrites=true&w=majority`);       
       console.log('DB connected');
       return;
    } catch (error) {
        console.log('DB not connected', error)
        return;
    }
}

module.exports = {connectDB}