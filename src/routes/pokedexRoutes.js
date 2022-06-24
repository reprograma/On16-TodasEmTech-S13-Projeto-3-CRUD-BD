const controller = require('../controller/pokedexController')
const express = require('express')

const router = express.Router()

router.post('/pokedex', controller.createPokemon)
router.get('/pokedex', controller.findAllPokedex)
router.get('/pokedex/:id', controller.findPokemonById)
router.patch('/pokemon/:id', controller.updatePokemonById)
router.delete('/pokemon/:id', controller.deletePokemonById)

module.exports = router