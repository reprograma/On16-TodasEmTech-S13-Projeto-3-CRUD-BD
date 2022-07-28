const mongoose = require('mongoose');

const projetosSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },   
    nome: {type: String},
    email:{type: String},
    senha:{type: String}
},
{
    versionKey:false

})

const admProjetos = mongoose.model('admProjetos', projetosSchema)

module.exports = admProjetos