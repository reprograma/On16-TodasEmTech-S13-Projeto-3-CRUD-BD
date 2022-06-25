<<<<<<< HEAD
const mongoose = require("mongoose");

const pokedexSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },

    name: {
      type: String,
      required: true,
    },

    type: {
      type: [String],
      required: true,
    },

    abilities: {
      type: [String],
      required: true,
    },

    description: String,

    coach: {
      type: mongoose.Schema.Types.Object,
      required: true,
      ref: "coach",
    },
  },
  { timestamps: true }
);

const Model = mongoose.model("pokedex", pokedexSchema);

module.exports = Model;
=======
const mongoose = require('mongoose')

const PokedexSchema = mongoose.Schema({
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

   coach: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'coach'
   }
}, { timestamps: true })

const Model = mongoose.model('pokedex', PokedexSchema)
module.exports = Model
>>>>>>> 4d7f5bd6d58d47ab10ff2c22d47771e781decd5c
