const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  github: { type: String, required: true, unique: true }
});

module.exports = mongoose.model("User", userSchema);

// {
// 	"title": "My Awesome Project",
// 	"github": "https://github.com/username/my-awesome-project",
// 	"url": "http://my-awesome-project.herokuapp.com/",
// 	"users": ["5820b7687be92a1aa4241b47", "5820b7687be92a1aa4241b48", "5820b7687be92a1aa4241b49", "5820b7687be92a1aa4241b4a"]
// }
