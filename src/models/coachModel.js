const mongoose = require('mongoose')


const coachSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },


    name: {
        type: String, // " "  representa texto
        required: true, // esse campo é obrigatório
        unique: true, // eu digo que não aceito mais de um nome no sistema

    },

    team: String,

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
        default: "Não Informado."
    }

}, {timestamps:true}) // (gera automaticamente as datas) define a data atomaticamente do sistema de atualização , aparece a hora de envio e a altima atualização.

const Model = mongoose.model('coach', coachSchema)

module.exports = Model


