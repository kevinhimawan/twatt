const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

// Use
app.use(bodyParser.urlencoded({extended:false}))

// Routes Folder
const index = require('./routes/index')
const oauth = require('./routes/oauth')

// Routes
app.use('/', index)
app.use('/oauth',oauth)

app.listen(3000,()=>{console.log(`Welcome abroad`)})