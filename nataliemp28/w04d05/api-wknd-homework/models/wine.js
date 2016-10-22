const mongoose = require('mongoose');

const wineSchema = mongoose.Schema({
  image: String,
  origin: { type: String, required: true },
  vineyard: { type: String, required: true },
  variety: { type: String, required: true },
  year: { type: Number, required: true }
});

module.exports = mongoose.model('Wine', wineSchema);
