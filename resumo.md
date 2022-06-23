touch .gitignore
    node_modules/

touch server.js
npm init
npm i express cors
npm i -D nodemon
npm i mongoose

mkdir src

criar aplicacao
conectar o banco
criar a model
criar a controller
criar as rotas e importar no app

------------------------------

em package.json, mudar para "start": "nodemon server.js"

------------------------------

dentro de server.js

// 1. importar o app(api)
// 2. definir uma porta e ouvi-la
const app = require('./src/app.js')
app.listen(8000, () => console.log(`fé no pai que agora vai: 8000`))

------------------------------

dentro de app.js

const express = require('express')
const cors = require('cors')

const app = express()

// 1. body parser
// 2. deixar api publication
// 3. conectar o banco

app.use(express.json())
app.use(cors())

module.exports = app

------------------------------

Ir ao Mongo Atlas ou pegar o código de conexão com o banco de dados da aula passada

------------------------------

dentro da pasta scr, cria uma pasta "database" e um arquivo "mongooseConnect.js"
dentro desse arquivo:

const DATABASE_URI = "mongodb+srv://suaconta:suasenha@cluster0.xjdyw.mongodb.net/nome"
const mongoose = require('mongoose')

const connect = async() => {
   try {
     await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
     })

     console.log('banco conectado! ')
   } catch (error) {
    console.error(error)
   }
}

module.exports = {
  connect
}

------------------------------

dentro de app.js inclui:

const db = require('./database/mongooseConnect')

------------------------------

dentro de scr, criar pasta "models" e arquivo "coachModel.js"
em coachModel, cria o model do Treinador

//1. importar o mongoose
//2. criar a Schema
//3. cria a model, define o nome da collection
//4. exporta a model (a Schema vai incorporada)

------------------------------