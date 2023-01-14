const { constants } = require("buffer");
const express = require("express");
const passport = require('./passport-config');
const session = require('express-session');
const { send, argv } = require("process");
const indexRouter = require("./routers")
const LoginRouter = require('./routers/login');
const registerRouter = require('./routers/register');
const {loginMid,logoutMid} = require('./middleware')
// const {loginmid,logoutmid} =require('./middleware');
const { parseArgs } = require("util");

const app = express();
//enivormental varaible
//GET POST PUT DELETE //crud
app.use('/public',express.static('public'))

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));
 //passport
 app.use(passport.initialize());
 app.use(passport.session())
// session
app.use(session(
    { 
    cookie: {
         maxAge: 1000,
         sameSite:true,
    },
    saveUninitialized:false,
    resave:false,
    secret: 'vPXcxNw8tkecBgGX0f4ysdW3hvWeZ5cLkZTUdHrTMnRc0UJ4Ry', 

}));


//routing
app.all(["/",'index'], loginMid,indexRouter);
app.use('/login',logoutMid, LoginRouter)
app.use('/SingUp',registerRouter)
app.listen(3000, async ()=>{
 console.log("server listen 3000port",)
})

//https://github.com/bazraatamir/sw-920
//bazraa1111
// hairtaishuu
