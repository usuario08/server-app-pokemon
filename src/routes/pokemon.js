const express = require('express');
const router = express.Router();
const Pokemon = require('../modelos/pokemon');

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        if (!body) throw Error(`No se encontró el cuerpo en la petición`);
        const newPokemon = new Pokemon(body);
        const respuesta = await newPokemon.save();
        res.status(201).send(respuesta);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message });
    }
})

router.get('/', async (req,res) => {
    try {
        const pokemones = await Pokemon.find();
        res.send(pokemones);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message });
    }
 })

module.exports = router;