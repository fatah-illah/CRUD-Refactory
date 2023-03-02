const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/crud";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

module.exports = mongoose.connection;
