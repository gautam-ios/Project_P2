// models/Denomination.js

const mongoose = require('mongoose');

const denominationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Denomination = mongoose.model('Denomination', denominationSchema);

module.exports = Denomination;
