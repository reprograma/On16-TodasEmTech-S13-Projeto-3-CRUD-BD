// 1. controller
const controller = require('../controller/coachController')
// 2. ajuda do express
const express = require('express')
// iniciando router
const router = express.Router()

// rota para novo treinador
router.post("/treinador", controller.createCoach)
// rota para retornar todos
router.get("/treinadores", controller.findAllCoaches)
// rota pra buscar por id

// rota para atualizar treinador
router.patch("/treinador/:id", controller.updateCoach)
// rota para deletar
router.delete("/delete/:id", controller.deleteCoach)

module.exports = router