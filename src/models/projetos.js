const mongoose = require("mongoose");

const projetoSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name: { type: String, required: true },
    state: { type: String, required: true },
    topic: { type: String, required: true },
    description: { type: String, required: true },
    format: { type: String, required: true }
})


const projeto = mongoose.model('projeto', projetoSchema);

module.exports = projeto