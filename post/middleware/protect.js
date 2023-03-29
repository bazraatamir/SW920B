const userSchema = require("../model/user");
const jwt = require('jsonwebtoken');

exports.protect =(req,res,next)=>{
    let token = null;
    
    if(!req.cookies['token']){
        return res.status(400).json({
            success:false,
            error:"ta nevtern vv"
        })
    }
    token = req.cookies['token'];
    

next()
}