//Importações
const PokedexModel = require('../models/pokedexModel')
const CoachModel = require('../models/coachModel')

//Códigos API
const createPokemon = async (req, res) => {
  try {
    const { coachId, name, type, abilities, description } = req.body

    if (!coachId) {
      return res.status(400).json({ message: 'O ID do Treinador é Obrigatório!' })
    }

    const findCoach = await CoachModel.findById(coachId)

    if (!findCoach) {
      return res.status(404).json({ message: 'Treinador não encontrado!' })
    }

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

const findAllPokemons = async (req, res) => {
  try {
    const allPokemons = await PokedexModel.find().populate('coach')
    res.status(200).json(allPokemons)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const findPokemonById = async (req, res) => {
  try {
    const findPokemon = await PokedexModel
      .findById(req.params.id).populate('coach')

    if (findPokemon == null) {
      return res.status(404).json({ message: "Pokemon não encontrado!" })
    }

    res.status(200).json(findPokemon)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updatePokemonById = async (req, res) => {
  try {
    const { id } = req.params
    const { coachId, name, type, abilities, description } = req.body
    const findPokemon = await PokedexModel.findById(id)
    if (findPokemon == null) {
      return res.status(404).json({ message: "Pokemon não encontrado." })
    }
    if (coachId) {
      const findCoach = await CoachModel.findById(coachId)
      if (findCoach == null) {
        return res.status(404).json({ message: 'Treinador não encontrado!' })
      }
    }
    findPokemon.name = name || findPokemon.name
    findPokemon.type = type || findPokemon.type
    findPokemon.abilities = abilities || findPokemon.abilities
    findPokemon.description = description || findPokemon.description
    findPokemon.coach = coachId || findPokemon.coach

    const savedPokemon = await findPokemon.save()
    res.status(200).json(savedPokemon)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const deletePokemonById = async (request, response) => {
  try {
    const { id } = request.params
    const findPokemon = await PokedexModel.findById(request.params.id) //tenta encontrar o pokemon no PokedexModel
    if (findPokemon == null) {
      return response.status(404).json({ message: `O pokémon com o ID ${id} não foi encontrado` })
    }

    await findPokemon.delete()
    response.status(200).json({ message: `O pokémon ${findPokemon.name} foi deletado com sucesso.` })

  } catch (error) {
    response.status(500).json({ message: error.message })

  }
}
//Exportações
module.exports = {
  createPokemon, findAllPokemons, findPokemonById, updatePokemonById, deletePokemonById

}