require('dotenv').config()
const express = require('express')
const cors = require('cors')
const projetoRoutes = require('./routes/projetosRoutes')
const app = express()
const mongoose = require('./database/mongooseConnect')
const projetosRoutesModel = require('./routes/projetosRoutesModel')

app.use(express.json())
app.use(cors())
app.use('/projetos', projetoRoutes)
app.use(projetosRoutesModel)

mongoose.connect()





module.exports = app
