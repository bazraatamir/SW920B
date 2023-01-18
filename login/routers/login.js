const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');


let students = JSON.parse(fs.readFileSync(path.join(__dirname,"../students.json"),'utf-8'));

router.get('/',(req,res)=>{

    res.render(path.join(__dirname,'../views/login'),{title:students});
})
router.post('/',(req,res)=>{
    
    let students = JSON.parse(fs.readFileSync(path.join(__dirname,"../students.json"),'utf-8'));
   let student =  students.find((elements)=>{
        return (elements.username==req.body.un && elements.password==req.body.pw)
    });
    if(student){
        req.session.canLog=true,
        res.redirect('/');
    }else{
        res.send('faild');
    }
 
});
module.exports=router