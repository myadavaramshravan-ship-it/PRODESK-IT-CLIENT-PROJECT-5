const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createBooking,
  getBookings,
  getBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

router.use(authMiddleware);

// Create
router.post("/", createBooking);

// Read All
router.get("/", getBookings);

// Read One
router.get("/:id", getBooking);

// Update
router.put("/:id", updateBooking);

// Delete
router.delete("/:id", deleteBooking);

module.exports = router;