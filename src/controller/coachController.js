const nodemon = require("nodemon")
const { response } = require("../app")
const { findByIdAndUpdate } = require("../models/coachModel")
const coachModel =require("../models/coachModel")
// post -> criar um treinador
// get -> visualizar todos os treinadores
// get -> visualizar um treinador por id
//patch ->
//delete ->

/**
 * 
 * const { name, age, team } = req.body
 * const age = req.body.age
 * const name = req.body.name
 * const team = req.body.team
 */
const CoachModel = require('../models/coachModel')
const createCoach = async (req, res) => {
  try{
    const {name, team, region, age, gender } = req.body

    const newCoach = new CoachModel({
        name, team, region, age, gender
    })

    const savedCoach = await newCoach.save()
      res.status(201).json(savedCoach)
    }catch (error) {
     console.error(error)
     res.status(500).json({ message: error.message })
    }
   }
   
   const findAllCoaches = async (req, res) =>{
  try{
    const allCoaches = await CoachModel.find()
    res.status(200).json(allCoaches)
  }catch(error){
    console.error(error)
    res.status(500).json({message:error.message})
  }
}

const findCoachById = async (req, res) => {
  try{
    const findCoach = await CoachModel.findById(req.params.id)
    res.status(200).json(findCoach)
  }catch (error){
    console.error(error)
    res.status(500).json({message:error.message})
  }
}   

const updateCoach = async (req,res) => {
  try{
    const {nome,age,region,team,gender} = req.body
    const updateCoach = await CoachModel.findByIdAndUpdate(req.params.id,{
      nome, age, region, team, gender
    })

    res.status(200).json(updateCoach)
  }catch(error){
    console.error(error)
    res.status(500).json({message:error.message})
  }

}

const deletCoach = async (req,res) => {
  try{
    const {id} = req.params
    await CoachModel.findByIdAndDelete(req.params.id)
    const message ='otreinador com o {id} foi deletado com sucesso!'
    res.status(200).json({message})
  }catch(error){
    console.error(error)
    res.status(500).json({message: error.message})

  }
  
}
module.exports =  {
  createCoach,
  findCoachById ,
  findAllCoaches,
  updateCoach,
  deletCoach
}
