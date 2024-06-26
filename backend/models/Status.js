const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  grievance: {
    type: String,
    required: true
  },
  decision: {
    type: String,
    required: true
  }
});

const Status = mongoose.model('Status', statusSchema);

module.exports = Status;
