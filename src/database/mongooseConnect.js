const DATABASE_URI = process.env.DATABASE_URI
//const DATABASE_URI = "mongodb+srv://NathCaldas:Bento26@cluster0.5ldtt.mongodb.net/projeto_db"

const mongoose = require('mongoose')

const connect = async() => {
   try {
     mongoose.connect(DATABASE_URI, {
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