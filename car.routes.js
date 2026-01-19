const express = require("express");
const router = express.Router();
const Car = require("../models/Car");

// POST /api/cars/add
router.post("/add", async (req, res) => {
  try {
    const { name, brand, fuel, price, img } = req.body;
    if (!name) return res.status(400).json({ message: "Car name is required" });

    const car = new Car({ name, brand, fuel, price, img });
    await car.save();

    res.status(201).json({ message: "Car added", car });
  } catch (err) {
    console.error("Error adding car:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/cars
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
