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
        const { name, team, reagion, age, gender } = req.body
        // especificar que é novo, n subscrever. 'new' só funciona com classe
        const newCoach = new CoachModel({
            name, team, reagion, age, gender
        })

        const savedCoach = await newCoach.save()
    } catch {

    }
}

// get -> visualizar treinadores
// get -> buscar por id
