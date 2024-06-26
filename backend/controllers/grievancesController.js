// controllers/grievancesController.js

// Import necessary modules and models
const Grievance = require('../models/Grievance');

// Define controller functions
exports.createGrievance = async (req, res) => {
  try {
    // Create a new grievance document
    const newGrievance = new Grievance(req.body);
    // Save the grievance to the database
    await newGrievance.save();
    // Return success response
    res.status(201).json({ message: 'Grievance created successfully', data: newGrievance });
  } catch (error) {
    // Return error response
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

exports.getGrievances = async (req, res) => {
  try {
    // Fetch all grievances from the database
    const grievances = await Grievance.find();
    // Return grievances as response
    res.status(200).json({ data: grievances });
  } catch (error) {
    // Return error response
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Define other controller functions as needed
