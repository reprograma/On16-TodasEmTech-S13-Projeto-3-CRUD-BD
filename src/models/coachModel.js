const mongoose = require ('mongoose')

// name, team, insignia, pokemons,region,age, trofel, gender

const coachSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    name:{
        type: String, // ""->representa texto
        required: true,//esse campo é obrigatório!
        unique: true,// digo q não aceito mais de um nome no sistema.
    },

    team: String,

    region:{
        type: String,
        required: true,
    },

    age:{
        type: Number,
        required: true,
    },

    gender: {
        type: String,
        default: "Não Informado."
    }
}, {timestamps: true}) // gera automaticamente as datas de atualização
//e criação.

const Model = mongoose.model('coach', coachSchema)

module.exports = Model // a schema é incorporada na model. exporto apenas Model.


