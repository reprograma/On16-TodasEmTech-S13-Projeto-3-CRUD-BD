const DATABASE_URI = "mongodb+srv://carolalves90:naogostodetomate@cluster0.pplg699.mongodb.net/reprograma"
const mongoose = require("mongoose")

const connect = async() => {
    try {
      await mongoose.connect(DATABASE_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true
      })
 
      console.log('Banco conectado! ')
    } catch (error) {
     console.error(error)
    }
}
 
 module.exports = {
   connect
}