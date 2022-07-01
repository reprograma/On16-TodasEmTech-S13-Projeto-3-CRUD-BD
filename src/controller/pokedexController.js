const PokedexModel = require('../models/pokedexModel')
const CoachModel = require('../models/coachModel')

const createPokemon = async (request, response) => {
   try {
     const { coachId, name, type, abilities, description } = request.body
     const findCoach = await CoachModel.findById(coachId)

     if (!coachId) {
       return response.status(400).json({ message: 'É obrigatório o id do treinador'})
     }

     if (!findCoach) {
      return response.status(404).json({ message: 'Treinador não foi encontrado'})
     }

     const newPokemon = new PokedexModel({
      coach: coachId,
      name, type, abilities, description
     })

     const savedPokemon = await newPokemon.save()

     response.status(200).json(savedPokemon)

   } catch (error) {
    console.error(error)
    response.status(500).json({ message: error.message })
   }
}

const findAllPokemons = async (request, response) => {
   try {
      const allPokemons = await PokedexModel.find().populate('coach')
      response.status(200).json(allPokemons)
   } catch (error) {
    response.status(500).json({ message: error.message })
   }
}

    const findPokemonById = async(request, response) => { 
      try {
        const findPokemon = await PokedexModel
          .findById(request.params.id).populate('coach')

       if (findPokemon == null) {
        return response.status(404).json({ message: "pokemon não encontrado."})
       }
        response.status(200).json(findPokemon)  
      } catch (error) {
        response.status(500).json({ message: error.message })
      }
    }


    //1.verificar se o pokemon existe
    //2.verificar se o cachId recebido existe
    //3.verificar se o dado recebido é válido

    const updatePokemonById = async (request, response) => {
      try {
        const { id } = request.params
        const { coachId, name, type, abilities, description } = request.body

        const findPokemon = await PokedexModel.findById(id)

        if (findPokemon == null) {
          return response.status(404).json({ message: "pokemon não encontrado."})
        }

        if (coachId) {
          const findCoach = await CoachModel.findById(coachId)
          if (findCoach == null) {
            return response.status(404).json({ message: 'Treinador não foi encontrado'})
          }
        }

        findPokemon.name = name || findPokemon.name
        findPokemon.type = type || findPokemon.type
        findPokemon.abilities = abilities || findPokemon.abilities
        findPokemon.description = description || findPokemon.description
        findPokemon.coach = coachId || findPokemon.coach

        const savedPokemon = await findPokemon.save()

        response.status(200).json(savedPokemon)

    } catch (error) {
      console.error(error) 
      response.status(500).json({ message: error.message })     

      }
    }

module.exports = { 
    createPokemon,
    findAllPokemons,
    findPokemonById,
    updatePokemonById 
}