//1. importar o mongoose
//2. criar a Schema
const mongoose = require('mongoose')
const coachSchema = mongoose.Schema({
    _id: {
        // eu to pegando diretamente do mongoose o id dele
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name: { 
        type: String,    
        required: true, // esse campo é obrigatório
        unique: true // não pode ter um treinador com o mesmo nome
    },
    team: String,
    region: { 
        type: String,    
        required: true // esse campo é obrigatório
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        default: "não informado"
    }
}, {timestamps: true}) // sempre vai gravar a data de criação e a data de atualização

const Model = mongoose.model('coach', coachSchema)
module.exports = Model
// só exporta a Model porque a Schema está incorporada 
// e essa Model tem métodos iguais aos de array