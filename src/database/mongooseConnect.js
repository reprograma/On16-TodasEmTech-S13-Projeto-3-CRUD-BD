 main
// Conectando ao banco de dados

const DATABASE_URI = process.env.DATABASE_URI;
const mongoose = require('mongoose')
const connect = async () => {
    try {
        await mongoose.connect(DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Banco conectado')
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    connect

const DATABASE_URI = process.env.DATABASE_URI

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
 main
}