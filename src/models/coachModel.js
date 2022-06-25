<<<<<<< HEAD
const mongoose = require("mongoose");

const coachSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
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
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      default: "Uninformed.",
    },
  },
  { timestamps: true }
);

const Model = mongoose.model("coach", coachSchema);

module.exports = Model;
=======
const mongoose = require('mongoose')

const coachSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },

  name: {
    type: String, // " " -> representa um texto
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
    default: "Não Informado."
  }

}, { timestamps: true }) // gera automaticamente as datas de atualizacao e criação

const Model = mongoose.model('coach', coachSchema)

module.exports = Model
>>>>>>> 4d7f5bd6d58d47ab10ff2c22d47771e781decd5c
