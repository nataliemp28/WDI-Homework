const router = require('express').Router();
const winesController = require('../controllers/winesController');

router.route('/wines')
.get(winesController.index)
.post(winesController.create);

router.route('/wines/:id')
.get(winesController.show)
.put(winesController.update)
.delete(winesController.delete);

module.exports = router;
