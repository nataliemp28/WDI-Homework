const express = require('express');
const router = express.Router();
const dinoController = require('../controllers/dinoController');




router.route('/dinos')
  .get(dinoController.index)
  .post(dinoController.create);




// HOMEPAGE, in views: index.
router.get('/', (req, res) => res.render('index'));

router.get('/dinos', (req, res) => {
    Dino.find({}, (err, dino) => {
        if(err) return res.status(500).send("500: Server Error");
        res.render('./dinos/index', { dino });
    });
});

router.get('/dinos/new', (req, res) => res.render('./dinos/new'));
router.post('/dinos', (req, res) => {
    Dino.create(req.body.dino, (err, dino) => {
        if(err) return res.status(500).send("500: Server Error");
        res.redirect(301, '/dinos');
    });
});

module.exports = router;
