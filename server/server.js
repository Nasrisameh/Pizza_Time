// import express
const express = require("express")
// import cors to secure our server
const cors = require("cors")
// create an instance of the express app

const app = express()

require("dotenv").config()

const port=process.env.PORT 

// ========MIDDLWARE=========
app.use(cors({credentials: true,origin:"http://localhost:3000"}))
app.use(express.json(),express.urlencoded({extended:true}),cors()) // parse
// =========config=========
require("./config/mongoose.config")
// ========ROUTES============
require("./routes/pizza.routes")(app)

app.listen(port, () => {console.log("Listening to port"+port)})