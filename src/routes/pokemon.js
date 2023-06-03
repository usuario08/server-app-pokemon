const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola Desde Pokemon cambiado');
})

module.exports = router;