module.exports = {
  index: dogsIndex,
  create: dogsCreate,
  show: dogsShow,
  update: dogsUpdate,
  delete: dogsDelete
};


const Dog = require('../models/dog');


//INDEX /////////////////
function dogsIndex(req, res) {
  Dog.find((err, dogs) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.', error: err });
    return res.status(200).json(dogs);
  });
}
//CREATE ///////////////
function dogsCreate(req, res) {
  const dog = new Dog(req.body);
  dog.save((err, dog) => {
    if (err) return res.status(400).json({ messsage: 'Something went wrong.', error: err });
    return res.status(201).json(dog);
  });
}
//SHOW /////////////////
function dogsShow(req, res) {
  Dog.findById(req.params.id, (err, dog) => {
    if (err) return res.status(500).json({ messsage: 'Something went wrong.', error: err });
    if (!dog) return res.status(404).json({ message: 'No character found.' });
    return res.status(200).json(dog);
  });
}
//UPDATE ///////////////
function dogsUpdate(req, res) {
  Dog.findByIdAndUpdate(req.params.id, req.body, (err, dog) => {
    if (err) return res.status(500).json({ messsage: 'Something went wrong.', error: err });
    if (!dog) return res.status(404).json({ message: 'No dog found.' });
    return res.status(200).json(dog);
  });
}
//DELETE //////////////
function dogsDelete(req, res) {
  Dog.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).json({ messsage: 'Something went wrong.', error: err });
    return res.status(204).send();
  });
}
