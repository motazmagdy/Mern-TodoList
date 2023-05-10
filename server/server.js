// Import dependencies
const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')

// Import our modules
const Controllers = require('./controllers/todoController')
const connectToDb = require('./config/connectToDb')
const todoRoutes = require('./routes/todoRoutes')

// Install express app & using body-parser for handling JSON data
const app = express()
app.use(bodyParser.json())

// Configuring dotenv
dotenv.config({ path: './config/.env' })

// Using Cors
app.use(cors())

// Routing
app.use('',todoRoutes)

connectToDb()

// Listening 
app.listen(process.env.PORT)