// dando acesso ao models
const PokedexModel = require('../models/pokedexModel')
// buscar coachmodel
const CoachModel = require('../models/coachModel')
const { find } = require('../models/coachModel')

// {post} Criar Pokemon
const createPokemon = async (req, res) => {
    try{
        // requerer id do treinador e body
        const { coachId, name, type, abilities, description} = req.body
        //buscar o treinador por id
        const findCoach = await CoachModel.findById(coachId)
    
        if (!coachId) {  // preciso de um id pra encontraar
            return res.status(400).json({ message: "É Necessário o Id do Treinador"})
        } if (!findCoach) { // esse eu nao achei
            return res.status(404).json({ message: 'Treinador não Encontrado, tente de novo.'})
        } 
                   // body
        const newPokemon = new PokedexModel({
            coach: coachId,
            name, type, abilities, description 
        })
        const savedPokemon = await newPokemon.save()
        res.status(200).json(savedPokemon)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }  
}

const findAllPokemons = async (req, res) => {
    try{
        const allPokemons = await PokedexModel.find().populate('coach') // populate traz a refs do banco
        res.status(200).json(allPokemons)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message})
    }
}

const findPokemonById = async(req, res) => {
    try {
        const findPokemon = await PokedexModel.
        findById(req.params.id).populate('coach') // trago o treinador junto ainda
        
        if (findPokemon == null) {
            return res.status(404).json({ message: 'pokemon não encontrado.' })
        }

        res.status(200).json(findPokemon)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

const updatePokemonById = async (req, res) => {
    try {
        const { id } = req.params
        const { coachId, name, type, abilities, description} = req.body
        const findPokemon = await PokedexModel.findById(id)

        if (findPokemon == null) {
            return res.status(404).json({message: "Pokemon não encontrado."})
        }

        if (coachId) {
            const findCoach = await CoachModel.findById(coachId)
            if (findCoach == null) {
                return res.status(404).json({ message: 'Treinador não encontrado'})
            }
        } 
        // if (name)   {findPokemon.name == name}
        findPokemon.name = name || findPokemon.name
        findPokemon.type = type || findPokemon.type
        findPokemon.abilities = abilities || findPokemon.abilities
        findPokemon.description = description || findPokemon.description
        findPokemon.coach = coachId || findPokemon.coach

        const savedPokemon = await findPokemon.save()
        res.status(200).json(savedPokemon)
    } catch (error) {
        console.error(error)
        res.status(404).json({ message: error.message})

    }
}
module.exports = {
    createPokemon,
    findAllPokemons,
    findPokemonById,
    updatePokemonById
}