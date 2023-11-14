const express = require("express");
const bookingController = require("../controllers/bookingController.js");
const router = express.Router();

router.post("/createBooking", bookingController.createBooking);
router.get("/listBookings", bookingController.listBookings);
router.put("/updateBooking/:idBooking", bookingController.updateBooking);
router.delete("/disableBooking/:idBooking", bookingController.disableBooking);
router.put("/enableBooking/:idBooking", bookingController.enableBooking);

module.exports = router;
