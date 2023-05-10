const express = require("express");
const router = express.Router();
const {
  newOrder,
  deleteOrder,
  getAllOrders,
} = require("../controllers/orderController");

router.route("/neworder").post(newOrder);
router.route("/orders/:id").get(getAllOrders);
router.route("/order/:id").delete(deleteOrder);

module.exports = router;
