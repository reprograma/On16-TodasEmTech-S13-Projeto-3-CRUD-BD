<<<<<<< HEAD
const express = require("express");
const controller = require("../controller/pokedexController");

const router = express.Router();

router.post("/pokedex", controller.createPokemon);

router.get("/pokedex", controller.findAllPokemon);
router.get("/pokedex/:id", controller.findPokemonById);

router.patch("/pokedex/:id", controller.updatePokemonById);

router.delete("/pokedex/:id", controller.deletePokemonById);

module.exports = router;
=======
const express = require('express')
const controller = require('../controller/pokedexController')

const router = express.Router()

router.post("/pokedex", controller.createPokemon)
router.get("/pokedex", controller.findAllPokemons)
router.get("/pokedex/:id", controller.findPokemonById)
router.patch("/pokedex/:id", controller.updatePokemonById)
router.delete("/pokedex/:id", controller.deletePokemonById)

module.exports = router
>>>>>>> 4d7f5bd6d58d47ab10ff2c22d47771e781decd5c
