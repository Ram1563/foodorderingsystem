const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurantController");

router.post("/add-restaurant", restaurantController.addRestaurant);

router.put("/update-menu/:restaurantName", restaurantController.updateMenu);

router.get("/print-all-restaurants", restaurantController.printAllRestaurants);

module.exports = router;
