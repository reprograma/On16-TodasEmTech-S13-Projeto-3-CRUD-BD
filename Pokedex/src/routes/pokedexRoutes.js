
const controller = require('../controller/pokedexController')
const express = require('express')

const router = express.Router()

router.post("/pokedex", controller.createPokemon)
router.get("/findAll", controller.findAllPokemons)
router.get("/getById/:id", controller.findPokemonById)
router.patch("update/:id", controller.updatePokemonById)
router.delete("/pokedex/:id", controller.deletePokemonById)
module.exports = router