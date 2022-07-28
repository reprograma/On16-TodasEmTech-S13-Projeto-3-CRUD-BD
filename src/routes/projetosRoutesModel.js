const controller = require('../controller/ProjetosControllerModel')
const express = require('express')
const router = express.Router()



router.post("/adm", controller.create)
router.get("/admlist", controller.getAll)
router.delete("/delete/:id", controller.deleteById)
router.post("/adm/login", controller.createLogin)


module.exports = router