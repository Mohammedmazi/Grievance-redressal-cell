const mongoose = require('mongoose');

const unionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
 
  password: {
    type: String,
    required: true
  }
});

const Union = mongoose.model('Union', unionSchema);

module.exports = Union;
