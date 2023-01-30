const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    carts:{
        items:[{
            productid:{ 
                type:Schema.Types.ObjectId,
                ref:'product',
                required:true
            }
        }]
    }
 
})
module.exports = mongoose.model('User',UserSchema);