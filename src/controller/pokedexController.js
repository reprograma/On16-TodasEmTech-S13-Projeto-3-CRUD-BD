const PokedexModel = require("../models/pokedexModel");
const CoachModel = require("../models/coachModels");

const createPokemon = async (req, res) => {
  try {
    const { coachId, name, type, abilites, description } = req.body;

    if (!coachId) {
      return res.status(400).json({ message: "The coach Id is required" });
    }

    const findCoach = await CoachModel.findById(coachId);

    if (!findCoach) {
      return res.status(404).json({ message: "Coach not found" });
    }

    const newPokemon = new PokedexModel({
      coach: coachId,
      name,
      type,
      abilites,
      description,
    });
    const savedPokemon = await newPokemon.save();
    res.status(200).json(savedPokemon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const findAllPokemons = async (req, res) => {
  try {
    const allPokemons = await PokedexModel.find().populate("coach");
    res.status(200).json(allPokemons);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const findPokemonById = async (req, res) => {
  try {
    const findPokemon = await PokedexModel.findById(req.params.id).populate(
      "coach"
    );
    if (findPokemon == null) {
      res.status(404).json({ message: "Pokemon not found" });
    }
    res.status(200).json(findPokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//1- verificar se o pokemon existe
// 2 verificar se o coachId recebido existe

const updatePokemonById = async (req, res) => {
  try {
    const { id } = req.params;
    const { coachId, name, type, abilites, description } = req.body;
    const findPokemon = await PokedexModel.findById(id);
    if (findPokemon == null) {
      res.status(404).json({ message: "Pokemon not found" });
    }

    if (coachId) {
      const findCoach = await CoachModel.findById(coachId);

      if (findCoach == null) {
        return res.status(404).json({ message: "Coach not found" });
      }
    }
    //if(name) findPokemon.name = name
    findPokemon.name = name || findPokemon.name;
    findPokemon.type = type || findPokemon.type;
    findPokemon.abilites = abilites || findPokemon.abilites;
    findPokemon.description = description || findPokemon.description;
    findPokemon.coach = coachId || findPokemon.coach;

    const savedPokemon = await findPokemon.save();
    res.status(200).json(savedPokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const findPokemon = await PokedexModel.findById(id);

    if (findPokemon == null) {
      return res.status(404).json({ message: `Pokemon with id ${id} not found` });
    }
    await findPokemon.remove();

    res.status(200).json({ message: `Pokemon with id ${id} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPokemon,
  findAllPokemons,
  findPokemonById,
  updatePokemonById,
  updatePokemonById,
  deletePokemon,
};
