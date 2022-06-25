const express = require('express')
const cors = require('cors')

const app = express()

// 1. body parser
// 2. deixar api publication
// 3. conectar o banco

app.use(express.json())
app.use(cors())
const db = require('./database/dbConnect')

module.exports = app