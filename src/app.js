const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { postHandler, getHandler } = require('./controllers/bfhlController');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// BFHL routes
app.post('/bfhl', postHandler);
app.get('/bfhl', getHandler);

module.exports = app;