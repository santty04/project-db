const Booking = require("../../models/booking");

function createTypeUsers() {
  Booking.bulkCreate([    
        {
          "idBooking": null,
          "bookingDate": "2023-12-10T18:30:00Z",
          "bookingStatus": true,
          "idUser": 1,
          "idTable": 1
        },
        {
          "idBooking": null,
          "bookingDate": "2023-12-11T19:00:00Z",
          "bookingStatus": true,
          "idUser": 2,
          "idTable": 2
        },
        {
          "idBooking": null,
          "bookingDate": "2023-12-12T20:15:00Z",
          "bookingStatus": false,
          "idUser": 3,
          "idTable": 3
        },
        {
          "idBooking": null,
          "bookingDate": "2023-12-13T21:30:00Z",
          "bookingStatus": true,
          "idUser": 4,
          "idTable": 4
        },
        {
          "idBooking": null,
          "bookingDate": "2023-12-14T18:45:00Z",
          "bookingStatus": true,
          "idUser": 5,
          "idTable": 5
        },
        {
          "idBooking": null,
          "bookingDate": "2023-12-15T19:15:00Z",
          "bookingStatus": false,
          "idUser": 6,
          "idTable": 6
        },
        {
          "idBooking": null,
          "bookingDate": "2023-12-16T20:30:00Z",
          "bookingStatus": true,
          "idUser": 7,
          "idTable": 7
        },
        {
          "idBooking": null,
          "bookingDate": "2023-12-17T21:45:00Z",
          "bookingStatus": true,
          "idUser": 8,
          "idTable": 8
        },
        {
          "idBooking": null,
          "bookingDate": "2023-12-18T18:00:00Z",
          "bookingStatus": false,
          "idUser": 9,
          "idTable": 9
        },
        {
          "idBooking": null,
          "bookingDate": "2023-12-19T19:30:00Z",
          "bookingStatus": true,
          "idUser": 10,
          "idTable": 10
        },
        {
          "idBooking": null,
          "bookingDate": "2023-12-20T20:45:00Z",
          "bookingStatus": true,
          "idUser": 11,
          "idTable": 11
        },
        {
          "idBooking": null,
          "bookingDate": "2023-12-21T21:15:00Z",
          "bookingStatus": false,
          "idUser": 12,
          "idTable": 12
        },
        {
          "idBooking": null,
          "bookingDate": "2023-12-22T18:30:00Z",
          "bookingStatus": true,
          "idUser": 13,
          "idTable": 13
        },
        {
          "idBooking": null,
          "bookingDate": "2023-12-23T19:45:00Z",
          "bookingStatus": true,
          "idUser": 14,
          "idTable": 14
        },
        {
          "idBooking": null,
          "bookingDate": "2023-12-24T20:15:00Z",
          "bookingStatus": false,
          "idUser": 15,
          "idTable": 15
        }
  ]);
}

module.exports = {
    createTypeUsers
}
