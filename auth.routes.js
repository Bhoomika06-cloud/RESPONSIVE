const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const { username, contact } = req.body;
    if (!username || !contact) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Check if user exists
    let user = await User.findOne({ contact });
    if (!user) {
      user = new User({ username, contact });
      await user.save();
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error("Error in login route:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
