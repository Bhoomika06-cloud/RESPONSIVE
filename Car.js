const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String },
  fuel: { type: [String], default: [] },
  price: { type: Number },
  img: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Car", carSchema);
