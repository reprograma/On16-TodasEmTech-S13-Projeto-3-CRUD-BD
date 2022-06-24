const mongoose = require('mongoose')

// criar schema do treinador: name, team, age, trophies, gender

const coachSchema = mongoose.Schema({

    _id: { 
        type: mongoose.Schema.Types.ObjectId, //utilizamos este formato pois será um id do proprio mongoose
        default: mongoose.Types.ObjectId
    },

    name: {
        type: String,
        required: true, //diz para o mongoose que esse campo é obrigatório
        unique: true //não permite repetir o nome no sistema
    },

    team: String, //não precisa da estrutura complexa pois tem apenas um parâmetro

    region: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        default: "não informado" //se a pessoa não informar esse valor é adicionado automaticamente
    }

}, { timestamps: true }) //define a data de criação do documento novo, e a data de atualização


const Model = mongoose.model('coach', coachSchema)

module.exports = Model