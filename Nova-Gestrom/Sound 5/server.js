const express = require("express");
const mongoose = require("mongoose");
const Restaurant = require("./models/Restaurant");
const MenuItem = require("./models/MenuItem");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/food_delivery")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.post("/restaurants", async (req, res) => {
  const data = await Restaurant.create(req.body);
  res.json(data);
});
app.post("/menu", async (req, res) => {
  const item = await MenuItem.create(req.body);
  res.json(item);
});
app.get("/menu", async (req, res) => {
  const items = await MenuItem.find().populate("restaurantId");
  res.json(items);
});
app.put("/menu/:id", async (req, res) => {
  const updated = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});
app.delete("/menu/:id", async (req, res) => {
  const deleted = await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted Successfully", deleted });
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
