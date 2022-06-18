// ligo express
const express = require('express')
//chamando cors
const cors = require('cors')
// importas db
const db = require('./database/mongooseConnect')
// pra que app use express
const app = express()

// 1. body parse
app.use(express.json())

// 2. deixar a api publica
app.use(cors())

// 3. conectar o banco
db.connect()

// exportar app
module.exports = app