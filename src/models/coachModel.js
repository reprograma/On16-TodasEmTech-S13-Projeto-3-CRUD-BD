//Importações
const mongoose = require('mongoose')

//Formtado do Schema
const coachSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId, //tipagem do próprio mongoose
    default: mongoose.Types.ObjectId
  },

  name: {
    type: String, // não esquecer de estar " " a string 
    required: true, // campo obrigatório
    unique: true, // informa que não aceita mais de um nome igual no sistema 
  },

  team: String, //quando só tem uma especificação não precisa da sintaxe mais elaborada como a de cima

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

const Model = mongoose.model('coach', coachSchema) //1º parametro é a collection. 2º schema.

module.exports = Model