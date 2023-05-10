const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} = require("../controllers/userController");
const router = express.Router();

const {
  verfyTokenAndAuthorization,
  verfyTokenAndAdmin,
} = require("./verifyToken");

router
  .route("/users/:id")
  .put(verfyTokenAndAuthorization, updateUser)
  .delete(verfyTokenAndAuthorization, deleteUser);

router.route("/users/find/:id").get(verfyTokenAndAdmin, getUser);
router.route("/users").get(getAllUser);

module.exports = router;
