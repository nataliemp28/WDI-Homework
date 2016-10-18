const express = require('express');
const router = require('express').Router();
const quotesController = require('../controllers/quotesController');


//automatically loads quotes index.ejs page when you go to homepage.
router.get('/', (req, res) => res.redirect('/quotes'));

//index of quotes
router.route('/quotes')
.get(quotesController.index)
.post(quotesController.create);

//new quote
router.route('/quotes/new')
.get(quotesController.new);

//show/update/delete
router.route('/quotes/:id')
.get(quotesController.show)
.put(quotesController.update)
.delete(quotesController.delete);

router.route('/quotes/:id/edit')
.get(quotesController.edit);

module.exports = router;
