const Restaurant = require("../models/restaurantModel");

exports.addRestaurant = async (req, res) => {
  try {
    const { name, menu, totalCapacity } = req.body;

    const newRestaurant = new Restaurant({
      name,
      menu,
      totalCapacity,
      capacityInUse: 0,
    });
    await newRestaurant.save();
    res.json(newRestaurant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMenu = async (req, res) => {
  try {
    const restaurantName = req.params.restaurantName;
    const newMenu = req.body.menu;
    await Restaurant.findOneAndUpdate(
      { name: restaurantName },
      { menu: newMenu },
    );
    res.json({ message: "Menu updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.printAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
