// invocar no express
const express = require('express')
// para linkaar com os controllers
const controller = require('../controller/pokedexController')
//invocando router
const router = express.Router()

// criando uma rota para criar um novo pokemon
router.post("/pokedex", controller.createPokemon)
// uma rota para retorna os pokemons salvos no banco
router.get("/pokedex", controller.findAllPokemons)
// buscar pokemon especifico, por id
router.get("/pokedex/:id", controller.findPokemonById)
// atualizar pokemon pelo id
router.patch("/pokedex/:id", controller.updatePokemonById)
// uma rota para deletar pokemno pelo id
router.delete("/pokedex/:id", controller.deletePokemonById)


// sempre lembrando de exportar router (para o app)
module.exports = router