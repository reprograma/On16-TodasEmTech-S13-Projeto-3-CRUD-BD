const mongoose = require("mongoose");

// name, team, insignia, pokemons, region, age, trofel, gender

const PokedexSchema = mongoose.Schema(
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

    abilites: {
      type: [String],
      require: true,
    },

    description: String,

    coach: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "coach",
    },
  },
  { timestamps: true }
);

const Model = mongoose.model("pokedex", PokedexSchema);

module.exports = Model;
