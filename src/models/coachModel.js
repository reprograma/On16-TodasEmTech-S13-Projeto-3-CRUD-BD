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
