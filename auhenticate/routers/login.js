const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const passport = require('passport');
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../login.html'));
})

router.post('/login', passport.authenticate('local',console.log("dfdsf"), { failureRedirect: '/login' } ),
function(req, res) {
    
  res.redirect('/');
}
);

module.exports=router