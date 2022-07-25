const DATABASE_URI = "mongodb+srv://idaliamedeiros:badajada1!@cluster0.0n270cy.mongodb.net/?retryWrites=true&w=majority"
const mongoose = require('mongoose')

const connect = async() => {
    try{
        await mongoose.connect(DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Banco conectado!')
    } catch (error){
        console.error(error)
    }
}


module.exports = {
    connect
}