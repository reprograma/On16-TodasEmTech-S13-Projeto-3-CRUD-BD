const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')

app.use(express.json())
app.use(cors())
mongoose.connect()

module.exports = app
