const express = require("express");
const dotenv = require('dotenv');
const connectDB = require('./data');
const categoryRoute = require('./route/category');
const errorHandle = require('./middleware/error');
const productRouter = require('./route/product');
const cors = require('cors')

dotenv.config()

const app = express();
connectDB()
app.use(cors())
app.use(express.json());
app.use('/category',categoryRoute);
app.use('/product',productRouter);
app.use(errorHandle);


app.listen(process.env.PORT,()=>{
    console.log(`server listen ${process.env.PORT}`)
})