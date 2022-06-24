const CoachModel = require('../models/coachModel') //primeira letra maiúscula pois uma model não é uma variável e sim uma classe

// post (create a coach) 
// get (read all coaches)
// get (read coach by id)
// patch (update coach by id)
// delete (delete coach by id)


//função assincrona pois tem algo dentro dela que não pertence ao código, que neste caso é o banco de dados
const createCoach = async (req, res) => {
    try {
        const { name, team, region, age, gender } = req.body 

        //coloca o new na frente para não sobrescrever ao criar o novo treinador, só funciona com classe
        const newCoach = new CoachModel({ 
            name, team, region, age, gender
        })
        
        const savedCoach = await newCoach.save() //para salvar no banco de dados, await espera o banco salvar

        res.status(201).json(savedCoach) //passa o que foi salvo no banco pois é o mais recente

    } catch (error) {        
        console.error(error)
        res.status(500).json({ message: error.message})
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

const findCoachById = async (req, res) => {
    try {
        const findCoach = await CoachModel.findById(req.params.id)
        res.status(200).json(findCoach)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const updateCoach = async (req, res) => {
    try {
        const { name, team, region, age, gender } = req.body
        const updatedCoach = await CoachModel
        .findByIdAndUpdate(req.params.id, {
            name, team, region, age, gender
        })

        res.status(200).json(updatedCoach)

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message})
    }
}

const deleteCoach = async (req, res) => {
    try {
        const { id } = req.params
        await CoachModel.findByIdAndDelete(req.params.id)
        const message = `Coach with id: ${id} deleted succesfully`
        res.status(200).json(message)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}



module.exports = {
    createCoach,
    findAllCoaches,
    findCoachById,
    updateCoach,
    deleteCoach
}

