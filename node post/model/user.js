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
            productId:{ 
                type:Schema.Types.ObjectId,
                ref:'product',
                required:true
            },
            quantity:{
                type:Number,
                required:true
            }
        }]
    }
 
})

UserSchema.methods.addCart = function(product){
    console.log(this.carts.items)
    const cartProductIndex = this.carts.items.findIndex(cp=>{
        return cp.productId.toString() === product._id.toString()
    })
    let newQuatity = 1;
    const updatedCartItems = [...this.carts.items];
    if(cartProductIndex >= 0){
        newQuatity = this.carts.items[cartProductIndex].quantity += 1;
        updatedCartItems[cartProductIndex].quantity = newQuatity
    }else {
        updatedCartItems.push({
            productId:product.id,
            quantity:newQuatity
        })
        

    }
    const updatedCart = {
        items:updatedCartItems
    }

    this.carts = updatedCart
    return this.save()
}
module.exports = mongoose.model('User',UserSchema);