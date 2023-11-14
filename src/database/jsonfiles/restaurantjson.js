const Restaurant = require("../../models/restaurant");

function createTypeUsers() {
  Restaurant.bulkCreate([    
          {
            "idRestaurant": null,
            "nameRestaurant": "Tasty Bites",
            "locationOnBoard": "123 Main Street",
            "foodPreferences": "Italian"
          },
          {
            "idRestaurant": null,
            "nameRestaurant": "Spice Haven",
            "locationOnBoard": "456 Oak Avenue",
            "foodPreferences": "Indian"
          },
          {
            "idRestaurant": null,
            "nameRestaurant": "Sushi Paradise",
            "locationOnBoard": "789 Elm Street",
            "foodPreferences": "Japanese"
          },
          {
            "idRestaurant": null,
            "nameRestaurant": "Mediterranean Delight",
            "locationOnBoard": "101 Pine Road",
            "foodPreferences": "Mediterranean"
          },
          {
            "idRestaurant": null,
            "nameRestaurant": "Burger Junction",
            "locationOnBoard": "202 Maple Drive",
            "foodPreferences": "American"
          },
          {
            "idRestaurant": null,
            "nameRestaurant": "Cantonese Corner",
            "locationOnBoard": "303 Birch Lane",
            "foodPreferences": "Chinese"
          },
          {
            "idRestaurant": null,
            "nameRestaurant": "Veggie Delight",
            "locationOnBoard": "404 Cedar Boulevard",
            "foodPreferences": "Vegetarian"
          },
          {
            "idRestaurant": null,
            "nameRestaurant": "BBQ Bliss",
            "locationOnBoard": "505 Oak Way",
            "foodPreferences": "Barbecue"
          }    
  ]);
}

module.exports = {
    createTypeUsers
}
