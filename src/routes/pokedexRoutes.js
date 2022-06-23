// 1. importar controller
// 2. ajuda do express para criar as rotas

const controller = require('../controller/pokedexController')
const express = require('express')

const router = express.Router()

router.post("/pokedex", controller.createPokemon)
router.get("/pokedex", controller.findAllPokemon)
router.get("/pokedex/:id", controller.findPokemonById)
router.patch("/pokedex/:id", controller.updatePokemonById)
router.delete("/pokedex/:id", controller.deletePokemonById)

module.exports = router
