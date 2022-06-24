//Importação do CoachModel para acesso em código específico
const CoachModel = require('../models/coachModel')

//Códigos API
//Cria novo treinador. Verbo POST
const createCoach = async (req, res) => {
   try {
      const { name, team, region, age, gender } = req.body

      const newCoach = new CoachModel({
        name, team, region, age, gender
      })

      const savedCoach = await newCoach.save()

      res.status(201).json(savedCoach)
   } catch (error) {
     console.error(error)
     res.status(500).json({ message: error.message })
   }
}

//Retorna lista de coaches criados. Verbo GET
const findAllCoaches = async (req, res) => {
  try {
    const allCoaches = await CoachModel.find()
    res.status(200).json(allCoaches)
  } catch(error) {
    console.error(error)
    res.status(500).json({ message: error.message})
  }
}

//Retorna coach por ID especificado. Verbo GET
const findCoachById = async (req, res) => {
   try {
     const findCoach = await CoachModel.findById(req.params.id)
     res.status(200).json(findCoach)
   } catch (error) {
     console.error(error)
     res.status(500).json({ message: error.message })
   }
}

//Atualiza coach. Verbo PUT
const updateCoach = async (req, res) => {
  try {
    const { name, age, region, team, gender } = req.body
    const updatedCoach = await CoachModel
    .findByIdAndUpdate(req.params.id, {
      name, age, region, team, gender
    })
    res.status(200).json(updatedCoach)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

//Deleta coach. Verbo DELETE
const deleteCoach = async (req, res) => {
   try {
       const { id } = req.params
       await CoachModel.findByIdAndDelete(id)
       const message = `O treinador com o ${id} foi deletado com sucesso!`
      res.status(200).json({ message })
   } catch (error) {
     console.error(error)
     res.status(500).json({ message: error.message })
   }
}

module.exports =  {
  createCoach, findAllCoaches, updateCoach, deleteCoach, findCoachById
}