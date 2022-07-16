const controller = require("../controller/coachController"); // 1.importo o controller
const express = require("express"); // 2. ajuda do express

const router = express.Router();

router.post("/treinador", controller.createCoach);
router.get("/treinadores", controller.findAllCoaches);
router.get("/treinadores/:id", controller.findCoachById);
router.patch("/treinador/:id", controller.updateCoach);
router.delete("/treinador/:id", controller.deleteCoach);

module.exports = router;
