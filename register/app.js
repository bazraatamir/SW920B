const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors')
const connectionDB = require('./data')
const userRouter = require('./routes/user');



dotenv.config();
const app = express();
// const whitelist = ['http://localhost:3000']
// const corsOptions = {
//     origin: function (origin, callback) {
//       if (origin === undefined || whitelist.indexOf(origin) !== -1 ) {
//         callback(null, true)
//       } else {
//         callback(new Error('Not allowed by CORS'))
//       }
//     },
//     allowedHeader:"Set-cookie, Content-Type",
//     method:"GET,POST,PUT,DELETE",
//     credential:true,
//   }
connectionDB();
//body-parser
app.use(express.json());
app.use(cors())


app.use('/user',userRouter);


app.listen(process.env.PORT,()=>{
    console.log(`server  listen ${process.env.PORT} port`)
})

