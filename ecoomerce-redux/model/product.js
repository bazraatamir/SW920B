const mongoose = require('mongoose');


const Schema =  mongoose.Schema;

const productSchema = Schema({
    productName:{
        type:String,
        required:[true,"бүтээгдэхүүний нэрийг оруулна уу!"]
    },
    description:{
        type:String,
        required:[true,"бүтээгдэхүүний нэрийг оруулна уу!"]
    },
    photo:{
        type:String,
        required:[true,"зурагаа орууна уу"]
    },
    price:{
        type:Number
    },
    category:{
        type:String,
        required:[true,"категорын нэрийг оруулна уу"]
    }
    
});

module.exports = mongoose.model("product",productSchema)