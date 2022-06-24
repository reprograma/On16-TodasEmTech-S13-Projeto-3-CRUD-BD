const mongoose = require('mongoose')

const pokedexSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },

  name: {
    type: String,
    required: true
  },

  type: {
    type: [String],
    required: true
  },

  abilities: {
    type: [String],
    required: true
  },

  description: String,

  coach: { // nao precisa ter o mesmo nome da coleção, pois não é sobre isso.
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'coach' //faz referencia a outra coleção já criada, faz a o relaionamento dos treinadores com os seus pokemons.
  }
  
}, {timestamps: true})

const Model = mongoose.model('pokedex', pokedexSchema)

module.exports = Model