require('dotenv').config()
const express = require('express') // chamando o express
const cors = require('cors')// deixar a api publica 
const mongoose = require('./database/mongooseConnect')
const coachRoutes = require('./routes/coachRoutes')// chamando a rota
const pokedexRoutes = require('./routes/pokedexRoutes')

const app = express()

app.use(express.json()) // body parse
app.use(cors())// usar parenteses porque vamos utilizar dependencia cors - deixar api publica

mongoose.connect()

app.use(coachRoutes)
app.use(pokedexRoutes)

module.exports = app // exportar api

// este são os três passos básico para a api funcionar
// 1. body parse
// 2. deixar a api publica
// 3. conectar o banco