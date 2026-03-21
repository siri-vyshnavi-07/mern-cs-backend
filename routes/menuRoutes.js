const express = require("express");
const router = express.Router();
const {
  getMenuByRestaurant,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} = require("../controllers/menuController");
const { auth, isAdmin } = require("../middleware/auth");

router.get("/:restaurantId", getMenuByRestaurant);
router.post("/", auth, isAdmin("restaurant_admin"), createMenuItem);
router.put("/:id", auth, isAdmin("restaurant_admin"), updateMenuItem);
router.delete("/:id", auth, isAdmin("restaurant_admin"), deleteMenuItem);

module.exports = router;
