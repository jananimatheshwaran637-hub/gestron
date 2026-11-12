const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const Order = require("./models/Order");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/user_orders")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
app.post("/orders", async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});
app.get("/orders", async (req, res) => {
  const orders = await Order.find().populate("userId");
  res.json(orders);
});
app.get("/users/:id/orders", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.id }).populate("userId");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
