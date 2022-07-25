const mongoose = require('mongoose')

//name, team, insignia, pokemons,  region, age, trofel, gender

const coachSchema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    name: {
        type: String,
        required: true,
        unique: true,
    },

    team: String,

    region: {
        type: String,
        required: true,
    },

    age: {
        type: Number
    },

    gender: {
        type: String,
        default: "Não informado."
    }
}, { timestamps: true }) //gera automaticamente as datas de atualização e criação

const Model = mongoose.model('coach', coachSchema)

module.exports = Model