// 1. Precisar do controller
// 2. Ajuda do express para fazer uso da função Router

const controller = require('../controller/coachController')
const express = require('express')

const router = express.Router()

router.post("/treinador", controller.createCoach)
router.get("/treinadores", controller.findAllCoaches)
router.patch("/treinador/:id", controller.updateCoach)
router.delete("/treinador/:id", controller.deleteCoach)
router.get("/treinadores/:id", controller.findCoachById)


module.exports = router