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
        // me retorna td
        res.status(200).json(allCoaches)
    } catch (error) { // caso encontre um erro me aprensenta
        res.status(500).json({ 
            message: error.message
        })
    }
}
// get -> buscar por id

// patch
const updateCoach = async (req, res) => {
    try {
        // o que vou alterar?
        const { name, age, region, team, gender} = req.body       
        // achar por id e atualizar pelo body dado
        const updatedCoach = await CoachModel
        .findByIdAndUpdate(req.params.id, 
            {name, age, region, team, gender})
        // retorna o que foi atualizado
        res.status(200).json(updatedCoach)
        //caso erro
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message})
        }
}

// e delete por mangoose
const deleteCoach = async (req, res) => {
    try {
        const { id } = req.params
        await CoachModel.findByIdAndDelete(id)
        const message = `O treinador com o id: ${id} foi deletado com sucesso!`
        res.status(200).json({ message })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

// exportando as funções
module.exports = {
    createCoach,
    findAllCoaches,
    updateCoach,
    deleteCoach
}