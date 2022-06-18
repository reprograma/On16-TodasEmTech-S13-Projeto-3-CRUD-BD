// criando variavel para database
const DATABASE_URI = "mongodb+srv://majob:santa1010@cluster0.g9wqfej.mongodb.net/projeto_db"

// usar mongoose
const mongoose = require('mongoose')

// função de conexao com banco 
const connect = async() => {
    try {
        mongoose.connect(DATABASE_URI, {
            useNewUrlParser: true,
            unseUnifiedTopology: true
        })
        console.log('Banco Conectado!')
    }  catch (error) {
        console.log('error')
    }
}

module.exports = {
    connect
}