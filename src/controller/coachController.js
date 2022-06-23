const CoachModel = require('../models/coachModel')
// uma model não é uma variável normal, ela é uma classe então é pascalcase, com letra maiúscula

// post -> criar um treinador 
// get -> visualizar todos os treinadores 
// get -> visualizar um treinador por id

// const { name, age, team } = req.body
// equivale a:
// const name = req.body.name
// const age = req.body.age
// const team = req.body.team

const createCoach = async (req, res) => {
    try {
        const { name, team, region, age, gender } = req.body
        // preciso passar esse dado pra minha Model, para poder criar um novo coach model
        const newCoach = new CoachModel({
            name, team, region, age, gender
        })
        // agora precisamos salvar o treinador no banco de dados
        // e deixar isso sincrono, para poder dar o feedback 
        const savedCoach = await newCoach.save()

        // passa o savedCoach porque é o mais atualizado
        res.status(201).json(savedCoach)
    } catch (error) {
        console.error(error) //  vai mostrar no terminal qual foi o motivo do erro
        res.status(500).json({ message: error.message })
    }
}

const findAllCoaches = async (req, res) => {
    try {
        const allCoaches = await CoachModel.find()
        res.status(200).json(allCoaches)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}
// update com o mongoose

const updateCoach = async (req, res) => {
    try {
        const { name, age, region, team, gender} = req.body
        const updateCoach = await CoachModel.
    findByIdAndUpdate(req.params.id, {

        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const deleteCoach = async (req, res) => {
    try {
        const { id } = req.params 
        await CoachModel.findByIdAndDelete(id)
        const message = `O treinador ${deletedcoach.name} foi deletado com sucesso!`
        res.status(200).json({ message })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}
const findCoachById = async (req, res) => {
    try {
        const findCoach = await CoachModel.findById(req.params.id)
            if(findCoach == null) {
                return res.status(404).json({ message: 'Treinador não encontrado.'})
            }
        res.status(200).json(findCoach)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message})
    }
}

module.exports = {
    createCoach, findAllCoaches, updateCoach, deleteCoach, findCoachById
}