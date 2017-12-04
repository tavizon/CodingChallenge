'use strict';

const config = require('./config');

const express = require('express');
const helmet = require('helmet');

const app = express();

// Set headers - see https://helmetjs.github.io/
app.use(helmet(config.helmet));

// Am I alive?
app.get('/ping', (request, response) => response.send('PONG'));

app.use('/', require('./routes')(express.Router()));

// Start it up
module.exports = app.listen(config.application.port, () => {
	console.log(`word-api - listening on port ${config.application.port}`);
});
