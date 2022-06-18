
// post -> criar um treinador
// get -> visualizar todos os treinadores
// get -> visualizar um treinador por id

/**
 * 
 * const { name, age, team } = req.body
 * const age = req.body.age
 * const name = req.body.name
 * const team = req.body.team
 */
const CoachModel = require('../models/coachModel')
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

module.exports =  {
  createCoach
}