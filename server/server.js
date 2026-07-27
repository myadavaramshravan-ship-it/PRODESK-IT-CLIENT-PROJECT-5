require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://YOUR-VERCEL-APP.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Mechanic Booking API Running",
  });
});

// 404 Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});