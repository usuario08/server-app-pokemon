const mongoose = require('mongoose');

const mongoUri = `mongodb://127.0.0.1:27017/DBTallerWeb`;
const conn = mongoose.connect(mongoUri);

module.exports = conn;