const User = require('../models/user');

function usersIndex(req, res) {
  User.find({}, (err, users) => {
    if(err) return res.status(500).json({ error: err });
    res.json(users);
  });
}
function usersCreate(req, res) {
  User.create(req.body, (err, users) => {
    if(err) return res.status(500).json({ error: err });
    res.status(201).json(users);
  });
}


module.exports = {
  index: usersIndex,
  create: usersCreate
};
