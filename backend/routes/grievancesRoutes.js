// routes/grievancesRoutes.js

// Import necessary modules and controllers
const express = require('express');
const router = express.Router();
const grievancesController = require('../controllers/grievancesController');

// Define routes
router.post('/grievances', grievancesController.createGrievance);
router.get('/grievances', grievancesController.getGrievances);
// Define other routes as needed

// Export router
module.exports = router;
