const mongoose = require('mongoose');
const dinoSchema = mongoose.Schema({

  //update schema content here for dinos
    content: String,
    cite: String
});

module.exports = mongoose.model('Dino', dinoSchema);
