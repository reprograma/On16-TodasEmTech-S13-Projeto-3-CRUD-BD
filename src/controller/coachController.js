const CoachModel = require("../models/coachModels");

const createCoach = async (req, res) => {
  try {
    const { name, team, region, age, gender } = req.body;
    const newCoach = new CoachModel({
      name,
      team,
      region,
      age,
      gender,
    });

    const savedCoach = await newCoach.save();

    res.status(201).json(savedCoach);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const findAllCoaches = async (req, res) => {
  try {
    const allCoaches = await CoachModel.find();
    res.status(200).json(allCoaches);
  } catch {
    console.log(error);
    res.status(500).json({ message: error.message });
  };
};

const findCoachById = async (req, res) => {
  try {
    const findCoach = await CoachModel.findById(req.params.id);
    res.status(200).json(findCoach);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const updateCoach = async (req, res) => {
  try {
    const { name, age, region, team, gender } = req.body;
    const updateCoach = await CoachModel.findByIdAndUpdate(req.params.id, {
      name,
      age,
      region,
      team,
      gender,
    });

    res.status(200).json(updateCoach);
  } catch {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const deleteCoach = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCoach = await CoachModel.findByIdAndDelete(id);
    const message = `The coach with id ${deleteCoach.name} was successfully deleted`;
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

module.exports = {
  createCoach,
  findAllCoaches,
  findCoachById,
  updateCoach,
  deleteCoach,
};
