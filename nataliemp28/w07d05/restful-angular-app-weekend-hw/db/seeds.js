const mongoose = require('mongoose');
const Dog = require('../models/dog');
const db = require('../config/db');

mongoose.connect(db.uri);

const dogs = [
  {
    name: 'Buster',
    breed: 'Boxer',
    nature: 'Friendly, playful, energetic',
    photo: 'http://ichef.bbci.co.uk/news/976/cpsprodpb/B853/production/_92378174_new2.jpg'
  },
  {
    name: 'Doug',
    breed: 'Pug',
    nature: 'Lazy, hungry, cute',
    photo: 'http://www.weloveallanimals.com/wp-content/uploads/2016/02/doug6.png'
  }
];

Dog.collection.drop();

Dog.create(dogs, (err, dogs) => {
  if(err) console.log('Error creating dogs');
  else console.log(`${dogs.length} dogs created`);

  mongoose.connection.close();
});
