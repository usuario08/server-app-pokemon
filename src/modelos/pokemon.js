const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    Nombre: {
        type: String,
        required: true,
        unique: true
    },
    Imagen: {
        type: String,
        required: true
    },
    Habilidades: {
        type: [String]
    }
})

module.exports = mongoose.model('pokemon', pokemonSchema);