const mongoose = require('mongoose')

//name, team, Insignia, pokemons, regian, age, trofel, gender,

const coachSchema = mongoose.Schema({
  _id:{
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },

  name: {
    type: String, // ""-> representa texto dentro das aspas
    required: true, // esse campo é obrigatório
    unique: true, // eu digo que não aceito mais de um nome no sistema igual
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
    default: "Não informado."
  }

}, { timestamps: true }) // gera automaticamente as datas de atualização e criação

const Model = mongoose.model('coach', coachSchema)

module.exports = Model