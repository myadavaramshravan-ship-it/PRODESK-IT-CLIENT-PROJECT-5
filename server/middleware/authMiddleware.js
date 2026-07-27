const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  console.log("Headers:", req.headers);

  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("No Authorization Header");
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    const token = authHeader.split(" ")[1];

    console.log("Received Token:", token);
    console.log("JWT_SECRET:", process.env.JWT_SECRET);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded Token:", decoded);

    req.user = decoded;

    next();
  } catch (error) {
    console.log("JWT Error:", error.name);
    console.log("JWT Message:", error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

module.exports = authMiddleware;