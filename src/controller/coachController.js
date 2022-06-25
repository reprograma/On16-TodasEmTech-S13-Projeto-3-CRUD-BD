const CoachModel = require('../models/coachModel') //PascalCase, primeira letra com maiúscula quando se trata de uma classe (boas práticas de uso do código)

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

const creatCoach = async (require, response) => {
    try {
        const {name, team, region, age, gender } = require.body

        const newCoach = new CoachModel({
            name, team, region, age, gender
        })

        const savedCoach = await newCoach.save()

        response.status(201).json(savedCoach)
    } catch (error) {
      console.error(error)
      response.status(500).json({ message: error.message })
    }
}

module.exports = {
    creatCoach
}