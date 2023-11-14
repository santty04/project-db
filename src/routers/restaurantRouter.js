const express = require("express");
const restaurantController = require("../controllers/restaurantController.js");
const router = express.Router();

router.post("/createRestaurant", restaurantController.createRestaurant);
router.get("/listRestaurants", restaurantController.listRestaurants);
router.put("/updateRestaurant/:idRestaurant", restaurantController.updateRestaurant);
router.delete("/disableRestaurant/:idRestaurant", restaurantController.disableRestaurant);
router.put("/enableRestaurant/:idRestaurant", restaurantController.enableRestaurant);

module.exports = router;
