const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://bhoomikas:bhumika0409@cluster0.r9dkmom.mongodb.net/carDB"

    );
    console.log("MongoDB Atlas Connected");
  } catch (err) {
     console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
