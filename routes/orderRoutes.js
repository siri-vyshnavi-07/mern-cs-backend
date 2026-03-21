const express = require("express");
const router = express.Router();
const {
  placeOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");
const { auth, isAdmin } = require("../middleware/auth");

router.post("/", auth, placeOrder);
router.get("/my", auth, getUserOrders);
router.get("/all", auth, isAdmin("super_admin"), getAllOrders);
router.put("/:id/status", auth, updateOrderStatus);

module.exports = router;
