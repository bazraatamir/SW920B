const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { json } = require('express');
const bcrypt = require('bcrypt');
const{getStudents,postStudents} = require('../db_utils')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../register.html'))
})
router.post('/',async(req,res)=>{
   
   if(req.body.pw!==req.body.cpw){
            res.send('password buruu bna')
        }else{
            bcrypt.hash(req.body.pw, 10, (err,hashed)=>{
                if(err){
                    throw err
                }else{
                        postStudents(req.body.un,hashed)
                        res.redirect("/")
                }
            });
        }
});
module.exports=router