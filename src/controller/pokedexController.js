// dando acesso ao models
const PokedexModel = require('../models/pokedexModel')
// buscar coachmodel
const CoachModel = require('../models/coachModel')

// {post} Criar Pokemon
const createPokemon = async (req, res) => {
    try{
        // requerer id do treinador
        const { coachId } = req.body
        //buscar o treinador por id
        const findCoach = await CoachModel.findById(coachId)
    
        if (!coachId) {  // preciso de um id pra encontraar
            return res.status(400).json({ message: "É Necessário o Id do Treinador"})
        } if (!findCoach) { // esse eu nao achei
            return res.status(404).json({ message: 'Treinador não Encontrado, tente de novo.'})
        }
        // body

    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }  
}

module.exports = {
    createPokemon
}