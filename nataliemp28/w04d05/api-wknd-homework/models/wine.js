//this creates the object schema, for adding to the database via
//insomnia. Must require mongoose and be running mongod.
//Then needs to be exported via module.exports to be used elsewhere.

const mongoose = require('mongoose');

const wineSchema = mongoose.Schema({
  image: String,
  origin: { type: String, required: true },
  vineyard: { type: String, required: true },
  variety: { type: String, required: true },
  year: { type: Number, required: true }
});

module.exports = mongoose.model('Wine', wineSchema);
