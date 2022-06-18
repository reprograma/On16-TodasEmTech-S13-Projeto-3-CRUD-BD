const express = require("express")
const cors = require("cors")
const mongoose = require("./database/mongooseConnect")
const coachRoutes = require("./routes/coachRoutes")
const pokededexRoutes = require("./routes/pokedexRoutes")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(coachRoutes)
app.use(pokededexRoutes)

module.exports = app