const Table = require("../../models/table");

function createTypeUsers() {
  Table.bulkCreate([    
        {
          "idTable": null,
          "numberPeople": 4,
          "descriptionTable": "Riverside View",
          "tableAvailability": true,
          "tableReservationTime": "18:30:00",
          "tableReservationDate": "2023-12-17",
          "idRestaurant": 1
        },
        {
          "idTable": null,
          "numberPeople": 2,
          "descriptionTable": "Artistic Nook",
          "tableAvailability": true,
          "tableReservationTime": "19:45:00",
          "tableReservationDate": "2023-12-18",
          "idRestaurant": 2
        },
        {
          "idTable": null,
          "numberPeople": 6,
          "descriptionTable": "Skyline Terrace",
          "tableAvailability": true,
          "tableReservationTime": "20:15:00",
          "tableReservationDate": "2023-12-19",
          "idRestaurant": 3
        },
        {
          "idTable": null,
          "numberPeople": 8,
          "descriptionTable": "Exclusive Lounge",
          "tableAvailability": false,
          "tableReservationTime": "21:30:00",
          "tableReservationDate": "2023-12-20",
          "idRestaurant": 4
        },
        {
          "idTable": null,
          "numberPeople": 4,
          "descriptionTable": "Gourmet Corner",
          "tableAvailability": true,
          "tableReservationTime": "18:45:00",
          "tableReservationDate": "2023-12-21",
          "idRestaurant": 5
        },
        {
          "idTable": null,
          "numberPeople": 2,
          "descriptionTable": "Romantic Spot",
          "tableAvailability": true,
          "tableReservationTime": "19:15:00",
          "tableReservationDate": "2023-12-22",
          "idRestaurant": 6
        },
        {
          "idTable": null,
          "numberPeople": 6,
          "descriptionTable": "Beachfront Bliss",
          "tableAvailability": true,
          "tableReservationTime": "20:30:00",
          "tableReservationDate": "2023-12-23",
          "idRestaurant": 7
        },
        {
          "idTable": null,
          "numberPeople": 8,
          "descriptionTable": "VIP Dining",
          "tableAvailability": false,
          "tableReservationTime": "21:45:00",
          "tableReservationDate": "2023-12-24",
          "idRestaurant": 8
        },
        {
          "idTable": null,
          "numberPeople": 4,
          "descriptionTable": "Fireside Retreat",
          "tableAvailability": true,
          "tableReservationTime": "18:00:00",
          "tableReservationDate": "2023-12-25",
          "idRestaurant": 1
        },
        {
          "idTable": null,
          "numberPeople": 2,
          "descriptionTable": "Serenity Cove",
          "tableAvailability": true,
          "tableReservationTime": "19:30:00",
          "tableReservationDate": "2023-12-26",
          "idRestaurant": 2
        },
        {
          "idTable": null,
          "numberPeople": 6,
          "descriptionTable": "Elevated Deck",
          "tableAvailability": true,
          "tableReservationTime": "20:45:00",
          "tableReservationDate": "2023-12-27",
          "idRestaurant": 3
        },
        {
          "idTable": null,
          "numberPeople": 8,
          "descriptionTable": "Grand Banquet",
          "tableAvailability": false,
          "tableReservationTime": "21:15:00",
          "tableReservationDate": "2023-12-28",
          "idRestaurant": 4
        },
        {
          "idTable": null,
          "numberPeople": 4,
          "descriptionTable": "Rooftop Garden",
          "tableAvailability": true,
          "tableReservationTime": "18:30:00",
          "tableReservationDate": "2023-12-29",
          "idRestaurant": 5
        },
        {
          "idTable": null,
          "numberPeople": 2,
          "descriptionTable": "Chic Terrace",
          "tableAvailability": true,
          "tableReservationTime": "19:45:00",
          "tableReservationDate": "2023-12-30",
          "idRestaurant": 6
        },
        {
          "idTable": null,
          "numberPeople": 6,
          "descriptionTable": "Private Garden",
          "tableAvailability": true,
          "tableReservationTime": "20:15:00",
          "tableReservationDate": "2023-12-31",
          "idRestaurant": 7
        },
        {
          "idTable": null,
          "numberPeople": 8,
          "descriptionTable": "Chef's Counter",
          "tableAvailability": false,
          "tableReservationTime": "21:30:00",
          "tableReservationDate": "2024-01-01",
          "idRestaurant": 8
        },
        {
          "idTable": null,
          "numberPeople": 4,
          "descriptionTable": "Rustic Retreat",
          "tableAvailability": true,
          "tableReservationTime": "18:45:00",
          "tableReservationDate": "2024-01-02",
          "idRestaurant": 1
        },
        {
          "idTable": null,
          "numberPeople": 2,
          "descriptionTable": "Harbor View",
          "tableAvailability": true,
          "tableReservationTime": "19:15:00",
          "tableReservationDate": "2024-01-03",
          "idRestaurant": 2
        },
        {
          "idTable": null,
          "numberPeople": 6,
          "descriptionTable": "Mountain Retreat",
          "tableAvailability": true,
          "tableReservationTime": "20:30:00",
          "tableReservationDate": "2024-01-04",
          "idRestaurant": 3
        },
        {
          "idTable": null,
          "numberPeople": 8,
          "descriptionTable": "Garden Pavilion",
          "tableAvailability": false,
          "tableReservationTime": "21:45:00",
          "tableReservationDate": "2024-01-05",
          "idRestaurant": 4
        },
        {
          "idTable": null,
          "numberPeople": 4,
          "descriptionTable": "Fireside Lounge",
          "tableAvailability": true,
          "tableReservationTime": "18:00:00",
          "tableReservationDate": "2024-01-06",
          "idRestaurant": 5
        },
        {
          "idTable": null,
          "numberPeople": 2,
          "descriptionTable": "Urban Oasis",
          "tableAvailability": true,
          "tableReservationTime": "19:30:00",
          "tableReservationDate": "2024-01-07",
          "idRestaurant": 6
        },
        {
          "idTable": null,
          "numberPeople": 6,
          "descriptionTable": "Sunset Deck",
          "tableAvailability": true,
          "tableReservationTime": "20:45:00",
          "tableReservationDate": "2024-01-08",
          "idRestaurant": 7
        },
        {
          "idTable": null,
          "numberPeople": 8,
          "descriptionTable": "Lakeside Retreat",
          "tableAvailability": false,
          "tableReservationTime": "21:15:00",
          "tableReservationDate": "2024-01-09",
          "idRestaurant": 8
        }
  ]);
}

module.exports = {
    createTypeUsers
}
