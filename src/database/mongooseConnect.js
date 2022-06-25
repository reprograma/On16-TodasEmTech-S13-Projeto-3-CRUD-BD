const DATABASE_URI = "mongodb+srv://NilvaReprograma:2TBa9W3yf9e2uoBD@cluster0.7rbouil.mongodb.net/projeto_db"
// 
const mongoose = require('mongoose')
// funçao de conexao com o banco
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

// exporta o módulo
module.exports = {
  connect
}