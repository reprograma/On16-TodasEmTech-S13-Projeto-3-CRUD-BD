// para habilitar variaveis de ambiente
require('dotenv').config()
// ligo express
const express = require('express')
//chamando cors
const cors = require('cors')
// importas db
const mongoose = require('./database/mongooseConnect')
// rotas treinadores
const coachRoutes = require('./routes/coachRoutes')
//rotas pokemon
const pokedexRoutes = require('./routes/pokedexRoutes')
// pra que app use express
const app = express()

// 1. body parse
app.use(express.json())

// 2. deixar a api publica
app.use(cors())

// 3. conectar o banco
mongoose.connect()

app.use(coachRoutes)
app.use(pokedexRoutes)

// exportar app
module.exports = app