const mongoose = require('mongoose');

const DogSchema = mongoose.Schema({
  name: { type: String, trim: true, required: true },
  breed: { type: String, trim: true },
  nature: { type: String, trim: true },
  photo: { type: String }
});

module.exports = mongoose.model('Dog', DogSchema);
