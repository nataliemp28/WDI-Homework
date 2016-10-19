const Dino = require('../models/dino');

function dinosIndex(req, res){
  Dino.find({}, (err, dinos) => {
    if (err) return res.status(500).send('500: Server Error');
    res.render('dinos/index', { dino });
  });
}

function dinosNew(req, res){
  res.render('dinos/new');
}

//create new quote
function dinosCreate(req, res) {
  Dino.create(req.body.dino, (err, dino) => {
    if (err) return res.status(500).send('500: Server Error');
    res.redirect(301, '/dinos');
  });
}

//show a quote (find by ID)
function dinosShow(req, res) {
  Dino.findById(req.params.id, (err, dino) => {
    if (err) return res.status(500).send('500: Server Error');
    res.render('dinos/show', { quote });
  });
}

//edit the quote.
function dinosEdit(req, res) {
  Dino.findByIdAndUpdate(req.params.id, (err, dino) => {
    if (err) return res.status(500).send('500: Server Error');
    res.render('dinos/edit', { dino });
  });
}

function dinosUpdate(req, res) {
  Dino.findByIdAndUpdate(req.params.id, req.body.dino, (err, dino) => {
    if (err) return res.status(500).send('500: Server Error');
    res.redirect(301, `/dino/${dino.id}`);
  });
}
//delete
function dinosDelete(req, res) {
  Dino.findByIdAndRemove(req.params.id, (err) => {
    if (err) return res.status(500).send('500: Server Error');
    res.redirect(301, '/dinos');
  });
}

module.exports = {
  index: dinosIndex,
  new: dinosNew,
  create: dinosCreate,
  show: dinosShow,
  edit: dinosEdit,
  update: dinosUpdate,
  delete: dinosDelete
};
