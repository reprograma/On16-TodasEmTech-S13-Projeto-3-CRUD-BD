//importações
require('dontenv').config()
const express = require('express')
const cors = require('cors')
const dbmongoose = require('./database/mongooseConnect')
const coachRoutes = require('./routes/coachRoutes')
const pokedexRoutes = require('./routes/pokedexRoutes')

const app = express()

app.use(express.json())
app.use(cors())
dbmongoose.connect()

app.use(coachRoutes)
app.use(pokedexRoutes)

//exportação
module.exports = app

