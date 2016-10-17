const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/home', (req, res) => res.render('home'));
router.get('/hilary', (req, res) => res.render('hilary'));
router.get('/donald', (req, res) => res.render('donald'));


module.exports = router;
