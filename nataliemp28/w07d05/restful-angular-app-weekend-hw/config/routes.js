const router = require('express').Router();
const express = require('express');
const authController = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const oauthController = require('../controllers/oauth');
// Add user routes or other resource routes here

const dogsController = require('../controllers/dogs');

router
  .post('/register', authController.register)
  .post('/login', authController.login)
  .post('/auth/facebook', oauthController.facebook);

router.route('/dogs')
  .get(dogsController.index)
  .post(secureRoute, dogsController.create);
router.route('/dogs/:id')
  .get(dogsController.show)
  .put(secureRoute, dogsController.update)
  .patch(dogsController.update)
  .delete(secureRoute, dogsController.delete);

module.exports = router;
