const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  menu: Object,
  totalCapacity: Number,
  capacityInUse: Number,
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
