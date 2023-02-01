const express = require('express');
const router = express.Router();
const path = require('path');
const productModel = require("../model/product")


// router.get('/',(req,res)=>{
//     req.user
//     .populate('cart.items.productId')
//     .execPopulate()
//     .then(user=>{
//         const products = user.cart.Items;
//         res.render('cart',{products:products})
//     })
// })

router.get('/:id',(req,res)=>{
    const prodId = req.params.id;
    console.log(req.params.id)
    productModel.findById(prodId)
    .then(product=>{
        return req.user.addCart(product)
    })
    .then( result =>{
        res.redirect('/')
    })
    .catch(err=>{
        console.log(err)
    })

});

module.exports = router