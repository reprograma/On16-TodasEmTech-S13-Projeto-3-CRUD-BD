require('dotenv').config()
// imports
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const coachRoutes = require('./routes/coachRoutes')
const pokedexRoutes = require('./routes/pokedexRoutes')

const app = express()

// 1.body parse
app.use(express.json())

// 2. deixar a api pública
app.use(cors())

app.use(pokedexRoutes)

// 3. conectar o banco
mongoose.connect()

app.use(coachRoutes) // fazer esse após o banco conectar e mostar isso no terminal 
module.exports = app