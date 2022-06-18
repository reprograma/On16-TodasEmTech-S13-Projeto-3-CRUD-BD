// ligo express
const express = require('express')
// ativando app
const app = express()

// 1. body parse
app.use(express.json())

// 2. deixar a api publica
app.use(cors())

// 3. conectar o banco


// exportar app
module.exports = app