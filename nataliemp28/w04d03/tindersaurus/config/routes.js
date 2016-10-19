const express = require('express');
const router = express.Router();
const dinoController = require('../controllers/dinoController');


// HOMEPAGE
router.get('/', (req, res) => res.render('index'));

// INDEX & CREATE
router.route('/dinos')
  .get(dinoController.index)
  .post(dinoController.create);

// NEW
router.get('/dinos/new', dinoController.new);

// SHOW & UPDATE
router.route('/dinos/:id')
  .get(dinoController.show)
  .put(dinoController.update)
  .delete(dinoController.delete);

// EDIT
router.get('/dinos/:id/edit', dinoController.edit);

module.exports = router;
