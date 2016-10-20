const router = require('express').Router();
const usersController = require('../controllers/usersController');

router.route('/user')
.get(usersController.index)
.post(usersController.create);

module.exports = router;
