require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const carRoutes = require("./routes/car.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB and start server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // ✅ no options
    console.log("MongoDB Connected");

    // Routes
    app.use("/api/auth", authRoutes);
    app.use("/api/cars", carRoutes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

startServer();
