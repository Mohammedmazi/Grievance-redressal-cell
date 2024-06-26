// models/Grievance.js

// Import necessary modules
const mongoose = require('mongoose');

// Define Grievance schema
const uniongSchema = new mongoose.Schema({
  
  description: { type: String, required: true },

});

// Create Grievance model from schema
const Uniong = mongoose.model('Uniong', uniongSchema);

// Export Grievance model
module.exports = Uniong;