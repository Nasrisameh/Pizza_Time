// require mongoose to be able to use it (ORM)
const mongoose = require("mongoose")
// require dotenv
require("dotenv").config()
const dbName = process.env.DB
// const uri = "mongodb://127.0.0.1:27017"+dbName

// connecting to mongoDB with mongoose

mongoose.connect("mongodb://127.0.0.1:27017/"+dbName)
    .then(() => console.log("connected to DB")) 
    .catch(err=>console.log("DB ERROR",err))