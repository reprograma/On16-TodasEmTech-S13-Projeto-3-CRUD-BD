const controller = require("../controller/pokedexController.js");
const express = require("express");

const router = express.Router();

router.post("/pokedex", controller.createPokemon)
router.get("/pokedex", controller.fildAllPokemons)
router.get("/pokedex/:id", controller.findPokemonById)
router.patch("/pokedex/:id", controller.updatePokemonById)
router.delete("/pokedex/:id", controller.deletePokemonById)

module.exports = router