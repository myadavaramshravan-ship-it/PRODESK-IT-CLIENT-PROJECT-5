const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    vehicleNumber: {
      type: String,
      required: true,
      uppercase: true,
    },

    vehicleType: {
      type: String,
      required: true,
    },

    serviceType: {
      type: String,
      required: true,
    },

    bookingDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);