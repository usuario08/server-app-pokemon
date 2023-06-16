const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use('/', routes);

module.exports = app;