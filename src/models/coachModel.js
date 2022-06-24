const mongoose = require('mongoose')

const coachSchema = mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId, 
      default: mongoose.Types.ObjectId
    },
  
    name: {
      type: String, // " " -> representa um texto
      required: true, // esse campo é obrigatório
      unique: true, // não aceita mais de um nome no sistema 
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
  
}, { timestamps: true }) // gera automaticamente as datas de atualizacao e criação
  
  const Model = mongoose.model('coach', coachSchema)
  
  module.exports = Model