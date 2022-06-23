const express = require('express')
require('dotenv').config()
const cors = require('cors')

const db = require('./database/mongooseConnect')
const app = express()

const pokemonRoutes = require('./routes/pokedexRoutes.js')
const coachRoutes = require('./routes/coachRoutes')

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

app.use("/coach", coachRoutes);
app.use("/pokemon", pokemonRoutes);

module.exports = app;