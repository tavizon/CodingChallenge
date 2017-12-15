'use strict';

const config = require('./config');

const express = require('express');
const helmet = require('helmet');
const logger = require('./lib/utils/log').getLogger(__filename);

const app = express();

// Set headers - see https://helmetjs.github.io/
app.use(helmet(config.helmet));

// Am I alive?
app.get('/ping', (request, response) => response.send('PONG'));

// Setup routes
app.use('/', require('./routes')(express.Router()));

// 404 for anything else
app.use('*', (request, response) => response.status(404).json({error: 'Page not found'}));

// Start it up
module.exports = app.listen(config.application.port, () => {
	logger.info({
		action: 'listen',
		message: `word-api - listening on port ${config.application.port}`
	});
});
