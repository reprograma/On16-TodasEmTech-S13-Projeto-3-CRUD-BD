const controller = require('../controller/coachController')
const express = require('express')

const router = express.Router()

router.post("/coach", controller.creatCoach)
router.get("/treinadores", controller.findAllCoaches)
router.get("/treinadores/:id", controller.findCoachById)
router.patch("/treinador/:id", controller.updateCoach)
router.delete("/treinador/:id", controller.deleteCoach)

module.exports = router