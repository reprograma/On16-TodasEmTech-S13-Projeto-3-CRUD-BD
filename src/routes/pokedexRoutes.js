//Importações
const express = require('express')
const controller = require('../controller/pokedexController')

const router = express.Router()

//rotas
router.post("/pokedex", controller.createPokemon)
router.get("/pokedex", controller.findAllPokemons)
router.get("/pokedex/:id", controller.findPokemonById)
router.patch("/pokedex/:id", controller.updatePokemonById)
router.delete("/pokedex/:id", controller.deletePokemonById)
//Exportações
module.exports = router