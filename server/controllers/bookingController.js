const Booking = require("../models/Booking");
const sanitizeText = require("../utils/sanitize");

// Create Booking
exports.createBooking = async (req, res) => {
  try {
    let {
      customerName,
      phone,
      vehicleNumber,
      vehicleType,
      serviceType,
      bookingDate,
      status,
    } = req.body;

    if (
      !customerName ||
      !phone ||
      !vehicleNumber ||
      !vehicleType ||
      !serviceType ||
      !bookingDate
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    customerName = sanitizeText(customerName);
    phone = sanitizeText(phone);
    vehicleNumber = sanitizeText(vehicleNumber);
    vehicleType = sanitizeText(vehicleType);
    serviceType = sanitizeText(serviceType);

    const booking = await Booking.create({
      customerName,
      phone,
      vehicleNumber,
      vehicleType,
      serviceType,
      bookingDate,
      status,
      createdBy: req.user.id,
    });

    console.log("[Analytics] User interacted with Feature Complete CRUD");

    res.status(201).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Bookings
exports.getBookings = async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [
            {
              customerName: {
                $regex: req.query.search,
                $options: "i",
              },
            },
            {
              vehicleNumber: {
                $regex: req.query.search,
                $options: "i",
              },
            },
          ],
        }
      : {};

    const bookings = await Booking.find({
      createdBy: req.user.id,
      ...keyword,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Booking
exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found.",
      });
    }

    res.json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Booking
exports.updateBooking = async (req, res) => {
  try {
    let booking = await Booking.findOne({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found.",
      });
    }

    const data = { ...req.body };

    Object.keys(data).forEach((key) => {
      if (typeof data[key] === "string") {
        data[key] = sanitizeText(data[key]);
      }
    });

    booking = await Booking.findByIdAndUpdate(
      req.params.id,
      data,
      {
        new: true,
        runValidators: true,
      }
    );

    console.log("[Analytics] User interacted with Feature Complete CRUD");

    res.json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Booking
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found.",
      });
    }

    await booking.deleteOne();

    console.log("[Analytics] User interacted with Feature Complete CRUD");

    res.json({
      success: true,
      message: "Booking deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};