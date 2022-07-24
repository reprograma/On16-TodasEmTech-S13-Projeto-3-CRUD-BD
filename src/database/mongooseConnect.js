const DATABASE_URI = "mongodb+srv://mmarimonteiro:<password>@cluster0.amlli.mongodb.net/"

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