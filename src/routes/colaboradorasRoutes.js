// 1. importar controller
// 2. ajuda do express para criar as rotas

const controller = require('../controller/colaboradorasController')
const express = require('express')

const router = express.Router()

router.post("/colaboradoras", controller.create)
router.get("/colaboradoras", controller.getAll)
router.delete("/colaboradoras/:id", controller.deleteById)
router.post("/colaboradoras/login", controller.login)
// router.delete("/colaboradoras/:id", controller.)

module.exports = router

