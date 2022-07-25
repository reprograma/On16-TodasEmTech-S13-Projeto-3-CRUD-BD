const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const coachRoutes = require('../routes/routes')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(coachRoutes)


module.exports = app