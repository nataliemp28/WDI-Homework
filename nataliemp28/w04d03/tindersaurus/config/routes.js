const express = require('express');
const router = express.Router();
const dinoController = require('../controllers/dinoController');
const Dino = require('../models/dinos');

// HOMEPAGE, in views: index.
router.get('/', (req, res) => res.render('index'));

router.get('/dinos', (req, res) => {
    Dino.find({}, (err, dinos) => {
        if(err) return res.status(500).send("500: Server Error");
        res.render('dinos/index', { dinos });
    });
});

module.exports = router;
