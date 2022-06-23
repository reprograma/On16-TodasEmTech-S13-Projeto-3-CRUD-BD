const mongoose = require("mongoose");

// name, team, insignia, pokemons, region, age, trofel, gender

const coachSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },

    name: {
      type: String, // representa texto
      required: true, //campo obrigatorio
      unique: true, // eu digo que não aceito mais de um nome no sistema
    },

    team: String, // se não for obrigatorio e for so uma informação não precisa de "{}"

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
      default: "Not informed",
    },
  },
  { timestamps: true }
); // gera automaticamente

const Model = mongoose.model("coach", coachSchema);

module.exports = Model;