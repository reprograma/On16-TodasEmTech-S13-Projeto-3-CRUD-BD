<<<<<<< HEAD
const controller = require("../controller/coachController");
const express = require("express");

const router = express.Router();

router.post("/coach", controller.createCoach);

router.get("/coach", controller.findAllCoaches);
router.get("/coach/:id", controller.findCoachById);

router.patch("/coach/:id", controller.updateCoach);

router.delete("/coach/:id", controller.deleteCoach);

module.exports = router;
=======
// 1.controller
// 2. ajuda do express

const controller = require('../controller/coachController')
const express = require('express')

const router = express.Router()

router.post("/treinador", controller.createCoach)
router.get("/treinadores", controller.findAllCoaches)
router.get("/treinadores/:id", controller.findCoachById)
router.patch("/treinador/:id", controller.updateCoach)
router.delete("/treinador/:id", controller.deleteCoach)

module.exports = router
>>>>>>> 4d7f5bd6d58d47ab10ff2c22d47771e781decd5c
