const express = require("express");
const router = express.Router();
const {
  getAllRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurantController");
const { auth, isAdmin } = require("../middleware/auth");

router.get("/", getAllRestaurants);
router.post("/", auth, isAdmin("super_admin"), createRestaurant);
router.put("/:id", auth, isAdmin("super_admin"), updateRestaurant);
router.delete("/:id", auth, isAdmin("super_admin"), deleteRestaurant);

module.exports = router;
