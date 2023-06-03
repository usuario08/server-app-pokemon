const express = require('express');
const router = express.Router();
const rutasPokemon = require('./pokemon');

router.use('/pokemon', rutasPokemon);

module.exports = router;