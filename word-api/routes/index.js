'use strict';

const logger = require('../lib/utils/log').getLogger(__filename);

module.exports = (router) => {
	router.all('*', (request, response, next) => {
		logger.info(request.query);
		return next();
	});
	router = require('./api/words.js')(router);

	return router;
};
