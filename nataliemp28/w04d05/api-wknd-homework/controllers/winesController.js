const Wine = require('../models/wine');

//basic index controller
function winesIndex(req, res) {
  Wine.find((err, wines) => {
    if(err) return res.status(500).json({ error: "500: server error" });
    res.json(wines);
  });
}
function winesCreate(req, res) {
    Wine.create(req.body, (err, wine) => {
        if(err) res.status(500).json({ error: "500: server error" });
        res.status(201).json(wine);
    });
}
function winesShow(req, res) {
  Wine.findById(req.params.id, (err, wine) => {
    if(err) return res.status(500).json({ error: "500: server error" });
    res.json(wine);
  });
}
function winesUpdate(req, res) {
  Wine.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, wine) => {
    if(err) return res.status(500).json({ error: "500: server error" });
    res.json(wine);
  });
}
function winesDelete(req, res) {
  Wine.findByIdAndRemove(req.params.id, (err) => {
    if(err) return res.status(500).json({ error: "500: server error" });
    res.status(204).send();
  });
}
module.exports = {
  index: winesIndex,
  create: winesCreate,
  show: winesShow,
  update: winesUpdate,
  delete: winesDelete
};
