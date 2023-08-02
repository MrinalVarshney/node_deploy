
require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose')
const server = express();
const productRouter = require('./Routes/products')
const userRouter = require('./Routes/users')
const { Decimal128 } = require('mongodb');
const password=process.env.DB_PASSWORD;
const cors = require('cors')
const path=require('path');

//db-connection
const DB='mongodb+srv://Mrinal:'+password+'@cluster0.mazaegi.mongodb.net/Ecommerce?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
  console.log("Successfully connected")
}).catch((err)=>{
  console.log(err)
});


//body-parser
server.use(cors());
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use(express.json());
server.use(morgan("default"));
server.use("/products", productRouter.router)
server.use("/users", userRouter.router)
server.use("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname, "build" , "index.html"))
})

  //MVC Model View Controller

server.listen(process.env.PORT,()=>{
   console.log('Server Started')
});
 