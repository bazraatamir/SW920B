const express = require('express');
const router = express.Router();
const path = require('path');
const productModel = require("../model/product")


router.get('/',(req,res)=>{
    productModel.find()
    .then((product)=>{
      res.render(path.join(__dirname,'../views/admin'),{products:product})    
    })
});
router.get('/edit',(req,res)=>{
    res.redirect("/edit")
})
module.exports = router