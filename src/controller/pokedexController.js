const PokedexModel = require('../models/pokedexModel')
const CoachModel = require('../models/coachModel')

const createPokemon = async (req, res) => {
    try {
        const { coachId, name, type, abilities, description } = req.body // <-
        if (!coachId) {
            return res.status(400).json({ message: 'é obrigatório o id do treinador'})
        }

        const findCoach = await CoachModel.findById(coachId)

        if (!findCoach) {
            return res.status(400).json({ message: 'treinador não foi encontrado'})
        }
        /**
      * new PokedexModel -> a gente gera um novo MODELO de um pokemon
      * com base na Schema
      */

        const newPokemon = new PokedexModel({
            coach: coachId,
            name, type, abilities, description
        })
        
        const savedPokemon = await newPokemon.save()

        res.status(200).json(savedPokemon)
     } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
     }
}


const findPokemonById = async(req, res) => {
    try {
        const findPokemon = await PokedexModel
        .findById(req.params.id).populate('coach')
        
        if (findPokemon == null) {
            return res.status(404).json({ message: "pokemon não encontrado"})
        }
        res.status(200).json(findPokemon)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

/**
 * 
 * 1. verificar se o pokemon existe [ x ]
 * 2. verificar se o coachId recebido existe
 * 3. verificar se o dado recebido é valido
 */

