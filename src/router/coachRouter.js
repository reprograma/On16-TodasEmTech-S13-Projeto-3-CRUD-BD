//1. controller
//2. ajuda do express

const controller = require('../controller/coachController')
const express = require('express')

const router = express.Router()

router.post("/treinador", controller.creatCoach)

module.exports = router