const controller = require('../controller/projetosController')
const express = require('express')
const router = express.Router()



router.post("/addProjeto", controller.getAddProject)
router.get("/projetoslist", controller.getAllProjects)
router.get("/projeto/:id",  controller.getIdProject)
router.get("/projeto/tema", controller.getTopic)
router.get("/projeto/estado", controller.getByState)
router.patch("/updateFormat/:id", controller.patchUpdateFormat)
router.put("/updateProject/:id", controller.putUpdateProjectId)
router.delete("/delete/:id", controller.deleteProject)



module.exports = router