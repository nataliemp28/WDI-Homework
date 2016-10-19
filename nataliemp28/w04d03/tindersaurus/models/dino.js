const mongoose = require('mongoose');
const dinoSchema = mongoose.Schema({

  //update schema content here for dinos
    description: String,
    name: String,
    age: Number,
    species: String,
    image: String,
    single: String,
    likes: String

});

module.exports = mongoose.model('Dino', dinoSchema);
