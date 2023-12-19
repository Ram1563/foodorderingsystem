const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: String,
  orderDetails: Array,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
