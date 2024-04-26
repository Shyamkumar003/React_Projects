const person = require("../models/person");

const createPersonDetails = async (req, res) => {
  try {
    const data = await person.create(req.body);
    res.status(201).json({ data });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getPersonDetails = async (req, res) => {
  try {
    const data = await person.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getDetailsById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await person.findById({ _id: id });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const deleteDetailsById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await person.findById({ _id: id });
    await person.deleteOne(data);
    res.status(200).send("Details is deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = { createPersonDetails, getPersonDetails, getDetailsById, deleteDetailsById};
