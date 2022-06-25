require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const coachRoutes = require('./routes/coachRoutes')
const pokedexRoutes = require('./routes/pokedexRoutes')

const app = express()

<<<<<<< HEAD
=======
// 1. body parse
// 2. deixar a api publica
// 3. conectar o banco
>>>>>>> 4d7f5bd6d58d47ab10ff2c22d47771e781decd5c
app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(coachRoutes)
app.use(pokedexRoutes)

<<<<<<< HEAD
module.exports = app
=======
module.exports = app

>>>>>>> 4d7f5bd6d58d47ab10ff2c22d47771e781decd5c
