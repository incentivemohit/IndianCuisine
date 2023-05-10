const { User } = require("../models/userModel");

//update user
const updateUser = async (req, res) => {
  if (req.body.name) {
    req.body.name = req.body.name;
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.param.id);

    res.status(201).json("User deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//get a user
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(201).json(others);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//get all user
const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { updateUser, deleteUser, getUser, getAllUser };
