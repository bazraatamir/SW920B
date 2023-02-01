const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const indexRouter = require("./routers");
const User = require('./model/user')
const postRouter = require('./routers/post');
const adminRouter = require('./routers/admin');
const editRouter = require('./routers/edit');
const cartRouter = require('./routers/cart')
const { find } = require('./model/product');



app.use(express.static(path.join(__dirname,"public")))

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    User.findOne({id:'63d74339eda08712130fa462'})
        .then(user=>{
            req.user = user
            next()
        })
        .catch(err=>{
            throw err
        })
})


app.set('view engine',"ejs");
app.set('views',"views");

app.all(["/",'index'],indexRouter);

app.use('/post', postRouter);
app.use('/admin',adminRouter);
app.use('/edit',editRouter);
app.use('/cart',cartRouter);
mongoose.set('strictQuery',true)
mongoose.connect('mongodb+srv://bazarragchaa:bazraa12@cluster0.gdwdrpv.mongodb.net/project1')
.then((result)=>{
    User.findOne({id:`63d7457984c0cf103c692ca0
    `})
    .then((user)=>{
        if(!user){
            const user = new User({
                userName:"bazraa",
                email:'bazraa@test.com',
                cart:[],
            });
            user.save();
        }

    })
    .catch(err=> console.log(err))
    
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})


