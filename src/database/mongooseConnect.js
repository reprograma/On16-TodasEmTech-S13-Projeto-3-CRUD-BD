//Importações
const DATABASE_URI = "mongodb+srv://CDias:123reprograma@cluster0.6yb8f.mongodb.net/projeto_db"
const mongoose = require('mongoose')

//função de conexão com o banco de dados
const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true, //opção que permite acessar banco de dados por meio de URL
      useUnifiedTopology: true
    })

    console.log('Banco MongoAtlas conectado! ')
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  connect
}