const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const categorySchema = Schema({
    category:{
        type:String,
        required:[true,"категорийн нэрийг орууна уу"]
    },
   products:[
   {
    type:mongoose.Schema.ObjectId,
    ref:"product"
   }
   ]
})

module.exports = mongoose.model("category",categorySchema)