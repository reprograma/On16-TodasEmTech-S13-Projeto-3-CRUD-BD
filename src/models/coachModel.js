const mongoose = require('mongoose');

const coachSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    
    name: {
        type: String,
        required: true,
        unique: true
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
        default: 'Não informado'
    }

}, { timestamps: true }); //gera automaticamente as datas de atualização e criação;

const Model = mongoose.model('coach', coachSchema);

module.exports = Model