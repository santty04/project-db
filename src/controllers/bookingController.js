require("express");
const Booking = require("../models/booking");
const Table = require("../models/table");
const User = require("../models/user");

async function createBooking(req, res) {
  try {
    await Booking.create({
      bookingDate: req.body.bookingDate,
      bookingStatus: req.body.bookingStatus,
      idUser: req.body.idUser,
      idTable: req.body.idTable,
    })
      .then(function (data) {
        return res.status(200).json({
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).json({
          error: error,
        });
      });
  } catch (e) {
    console.log(e);
  }
}

async function listBookings(req, res) {
  try {
    await Booking.findAll({
      attributes: [
        "idBooking",
        "bookingDate",
        "bookingStatus",
        "createdAt",
        "updatedAt",
        "destroyTime",
        "idUser",
        "idTable",
      ],
      order: ["idBooking"],
      include: [
        {
          model: User,
          attributes: ["nameUser"],
        },
        {
          model: Table,
          attributes: ["descriptionTable"],
        },
      ],
    })
      .then(function (data) {
        return res.status(200).json({
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).json({
          error: error,
        });
      });
  } catch (e) {
    console.log(e);
  }
}

async function updateBooking(req, res) {
  try {
    await Booking.update(
      {
        bookingDate: req.body.bookingDate,
        bookingStatus: req.body.bookingStatus,
        idUser: req.body.idUser,
        idTable: req.body.idTable,
      },
      {
        where: {
          idBooking: req.params.idBooking,
        },
      }
    )
      .then(function (data) {
        return res.status(200).json({
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).json({
          error: error,
        });
      });
  } catch (e) {
    console.log(e);
  }
}

async function disableBooking(req, res) {
  try {
    await Booking.destroy({
      where: { idBooking: req.params.idBooking },
    })
      .then(function (data) {
        return res.status(200).json({
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).json({
          error: error,
        });
      });
  } catch (e) {
    console.log(e);
  }
}

async function enableBooking(req, res) {
  try {
    await Booking.restore({
      where: { idBooking: req.params.idBooking },
    })
      .then(function (data) {
        return res.status(200).json({
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).json({
          error: error,
        });
      });
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  createBooking,
  listBookings,
  updateBooking,
  disableBooking,
  enableBooking,
};
