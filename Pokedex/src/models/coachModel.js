const mongoose = require('mongoose');


const coachSchema = mongoose.Schema({
//gerando id automaticamente
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true,
        unique: true
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
        default: "Não informado"
    }
}, { timestamps: true })

module.exports = coachSchema;