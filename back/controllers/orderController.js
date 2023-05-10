const { Order } = require("../models/orderModel");
const { User } = require("../models/userModel");

const newOrder = async (req, res) => {
  console.log(req.body.orderList);

  const order = await Order.create({
    $push: { orderList: req.body.orderList },
  });

  if (order) {
    order.save();
    res.status(201).json({
      data: order,
    });
  } else {
    res.status(400).json("Data not inserted");
  }

  const userOrder = await User.updateOne({ $push: { orders: order._id } });
  if (userOrder) {
    console.log("updated");
  } else {
    console.log("not updated");
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.json({ data: order, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//get all orders
const getAllOrders = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id })
    .select("-password -email")
    .populate("orders");

  if (user) {
    res.status(201).json({ userData: user });
  } else {
    res.status(400).json({ message: "something went wrong" });
  }
};

module.exports = { newOrder, deleteOrder, getAllOrders };
