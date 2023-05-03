const mongoose = require('mongoose');

const connectDB = () =>{
   let connect =  mongoose.connect(process.env.Database_URL)
    return connect
}

module.exports = connectDB