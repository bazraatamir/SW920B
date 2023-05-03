const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const categorySchema = Schema({
    category:{
        type:String,
        required:[true,"категорийн нэрийг орууна уу"]
    },
   

})

module.exports = mongoose.model("category",categorySchema)