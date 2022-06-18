// ligo express
const express = require('express')
//chamando cors
const cors = require('cors')
// importas db
const mongoose = require('./database/mongooseConnect')
// rotas
const coachRoutes = require('./routes/coachRoutes')

// pra que app use express
const app = express()

// 1. body parse
app.use(express.json())

// 2. deixar a api publica
app.use(cors())

// 3. conectar o banco
mongoose.connect()
app.use(coachRoutes)

// exportar app
module.exports = app