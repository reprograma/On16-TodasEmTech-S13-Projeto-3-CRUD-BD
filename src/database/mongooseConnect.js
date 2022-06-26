//Importações
const DATABASE_URI = process.env.DATABASE_URI
const mongoose = require('mongoose')

const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    })

    console.log('Banco MongoAtlas conectado! ')
  } catch (error) {
    console.error(error)
  }
}
//Exportações
module.exports = {
  connect
}