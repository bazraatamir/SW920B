const { constants } = require("buffer");
const express = require("express");
const fs = require("fs/promises");
const path = require('path');
const { send } = require("process");
const mySql = require('mysql2');
const app = express();


 


//GET POST PUT DELETE //crud




app.use(express.json())
let students;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/students', (req,res)=>{

})


app.post('/students',(req,res)=>{
})
app.delete('/students/:id',(req,res)=>{
   
})


app.listen(3000, async ()=>{
 console.log("server listen 3000port")
})
// https://github.com/bazraatamir/sw-921
//bazraa1111
// hairtaishuu
