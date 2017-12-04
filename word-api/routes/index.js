'use strict';

module.exports = (router) => {
	router = require('./api/words.js')(router);

	return router;
};
