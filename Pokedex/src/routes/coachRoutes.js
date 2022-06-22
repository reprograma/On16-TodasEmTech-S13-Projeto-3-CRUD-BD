
const controller = require('../controller/coachController')
const express = require('express')

const router = express.Router()

router.post("/create", controller.createCoach)
router.get("/allCoachs", controller.findAllCoaches)
router.patch("/update/:id", controller.updateCoach)
router.delete("/delete/:id", controller.deleteCoach)
router.get("/coachById/:id", controller.findCoachById)

module.exports = router