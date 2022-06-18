// acessando os models
const CoachModel = require('../models/coachModel') //Coach com caixa alta, não é uma variavel qlqr. é uma Model, bb

/**
 * 
 * const  {name, age, team} = req.body
 * const name = req.body.name
 * const age = req.body.age
 * const team = req.body.team 
 */

// post -> novo treinador
// async porque vai aguardar ser passado o novo treinador para criar/salvar no servidor 
const createCoach = async(req, res) => {
    try {
        const { name, team, region, age, gender } = req.body
        // especificar que é novo, n subscrever. 'new' só funciona com classe
        const newCoach = new CoachModel({
            name, team, region, age, gender
        })

        const savedCoach = await newCoach.save()
// me mostra o salvo, mais recente
        res.status(201).json(savedCoach)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: error.message
        })
    }
}

// get -> visualizar treinadores
const findAllCoaches = async (req, res) => {
    try {
        const allCoaches = await CoachModel.find()
        res.status(200).json(allCoaches)
    } catch (error) {
        res.status(500).json({ 
            message: error.message
        })
    }
}
// get -> buscar por id
// patch e delete por mangoose

// exportando as funções
module.exports = {
    createCoach,
    findAllCoaches
}