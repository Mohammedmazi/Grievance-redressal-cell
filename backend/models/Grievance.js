// models/Grievance.js

// Import necessary modules
const mongoose = require('mongoose');

// Define Grievance schema
const grievanceSchema = new mongoose.Schema({
  
  description: { type: String, required: true },

});

// Create Grievance model from schema
const Grievance = mongoose.model('Grievance', grievanceSchema);

// Export Grievance model
module.exports = Grievance;
