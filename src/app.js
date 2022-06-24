require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const coachRoutes = require('./routes/coachRoutes')
const pokedexRoutes = require('./routes/pokedexRoutes')

const app = express()

// 3 configurações básicas para o funcionamento da api
// 1. body parser
// 2. deixar a api pública
// 3. conectar o banco

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(coachRoutes)
app.use(pokedexRoutes)

module.exports = app