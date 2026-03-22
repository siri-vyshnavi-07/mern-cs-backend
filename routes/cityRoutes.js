const express = require("express");
const router = express.Router();
const {
  getAllCities,
  createCity,
  deleteCity,
} = require("../controllers/cityController");
const { auth, isAdmin } = require("../middleware/auth");

router.get("/", getAllCities);
router.post("/", auth, isAdmin("super_admin"), createCity);
router.delete("/:id", auth, isAdmin("super_admin"), deleteCity);

module.exports = router;
