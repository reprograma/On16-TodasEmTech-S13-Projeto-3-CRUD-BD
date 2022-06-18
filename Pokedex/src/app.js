const express = require('express')
require('dotenv').config()
const db = require('./database/mongooseConnect')
const pokemonRoutes = require('./routes/pokemonRoutes.js')
const coachRoutes = require('.routes/coachRoutes.js')

const app = express()

// configuracao
app.use(express.json())
app.use(cors())

// base de dados
db.connect()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", coachRoutes);
app.use("/pokemon", pokemonRoutes);

module.exports = app;