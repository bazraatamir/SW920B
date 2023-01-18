const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/',(req,res)=>{
    res.render(path.join(__dirname,'../views/post.ejs'));
});
// router.post('/login', 
// passport.authenticate('local', {successRedirect:'/', failureRedirect: '/login' }),
// );


module.exports=router