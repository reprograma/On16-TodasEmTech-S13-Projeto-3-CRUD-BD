 main
// 1. Precisar do controller
// 2. Ajuda do express para fazer uso da função Router

// 1.controller
// 2. ajuda do express
 main

const controller = require('../controller/coachController')
const express = require('express')

const router = express.Router()

router.post("/treinador", controller.createCoach)
router.get("/treinadores", controller.findAllCoaches)
 main
router.patch("/treinador/:id", controller.updateCoach)
router.delete("/treinador/:id", controller.deleteCoach)
router.get("/treinadores/:id", controller.findCoachById)


router.get("/treinadores/:id", controller.findCoachById)
router.patch("/treinador/:id", controller.updateCoach)
router.delete("/treinador/:id", controller.deleteCoach)
 main

module.exports = router