const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  product: String,
  quantity: Number,
  price: Number,
  status: String
});
module.exports = mongoose.model("Order", OrderSchema);
