const express = require("express");
const router = express.Router();

const MyModel = require("../models/model");

// Get All Data
router.get("/data", async (req, res) => {
  try {
    const allData = await MyModel.find({});
    res.status(200).json(allData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Data by id
router.get("/data/:id", async (req, res) => {
  try {
    const oneData = await MyModel.findById(req.params.id);
    res.status(200).json(oneData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Create a new Data
router.post("/data", async (req, res) => {
  try {
    const newData = new MyModel(req.body);
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a Data by id
router.put("/data/:id", async (req, res) => {
  try {
    const updatedData = await MyModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: "Data successfully updated", updatedData });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a Data by id
router.delete("/data/:id", async (req, res) => {
  try {
    const deletedData = await MyModel.findByIdAndDelete(req.params.id);
    res.status(204).json(deletedData);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;
