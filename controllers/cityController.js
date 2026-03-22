const City = require("../models/City");

exports.getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCity = async (req, res) => {
  try {
    const city = await City.create(req.body);
    res.status(201).json(city);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCity = async (req, res) => {
  try {
    await City.findByIdAndDelete(req.params.id);
    res.json({ message: "City deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
