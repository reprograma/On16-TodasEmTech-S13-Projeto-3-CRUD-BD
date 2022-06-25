const DATABASE_URI = "mongodb+srv://abeamonteiro:SCfedYZpF27UQnJQ@cluster0.nra9se5.mongodb.net/reprograma"
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