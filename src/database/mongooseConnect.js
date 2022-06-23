// criando variavel para database
const DATABASE_URI = process.env.DATABASE_URI

// usar mongoose
const mongoose = require('mongoose')

// função de conexao com banco 
const connect = async() => {
    try {
        mongoose.connect(DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Banco Conectado!')
    }  catch (error) {
        console.log('error')
    }
}

module.exports = {
    connect
}