const router = require('express').Router();
const express = require('express');
// Add user routes or other resource routes here

const dogs = require('../controllers/dogs');


router.route('/dogs')
  .get(dogs.index)
  .post(dogs.create);
router.route('/dogs/:id')
  .get(dogs.show)
  .put(dogs.update)
  .patch(dogs.update)
  .delete(dogs.delete);

module.exports = router;
