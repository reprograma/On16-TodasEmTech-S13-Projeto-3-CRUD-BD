// usando mongoose
const mongoose = require('mongoose')

// o que nossa schema precis?
// name, team , insignia, pokemons, region, age, trofeu, gender

const coachSchema = mongoose.Schema({
    _id: { // para explicar o tipo de valor, e pra gerar ese valor
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Schema.Types.ObjectId
    },
    name: { 
        type: String, // "" -> é uma linha de texto
        required: true, // é um dado obrigatorio
        unique: true, // um dado único, não pode ter repetido no sistema
    },
    team: String, // estrutura mais simples, n é obg, n é unico
    region: {
        type: String,
        required: true
    },
    age: {
        type: Number,

    },
    gender: {
        type: String,
        default: "Não Informado."
    }        
}, { timestamps: true}) // para gerar datas de criação e atualização automaticamente

const Model = mongoose.model('coach', coachSchema)

module.exports = Model