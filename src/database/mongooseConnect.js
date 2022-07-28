const DATABASE_URI = "mongodb+srv://claudianefidelis:36ybplr5Xbf5Btln@cluster0.ijgvj.mongodb.net/Protagoniza-Pretx"
const mongoose = require("mongoose")

const connect = async () => {
    try {
        await mongoose.connect(DATABASE_URI, {
            useNewUrlParser : true,
            useUnifiedTopology : true 
        })
        console.log("Banco de dados conectado!")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
     connect 
    }