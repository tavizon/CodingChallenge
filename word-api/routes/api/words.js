'use strict';

const validUrl = require('valid-url');

module.exports = function (router) {
	/**
	 * Count words on a webpage
	 *
	 * @param  {Object} request - Express request object.
	 * @param  {Object} response - Express response object.
	 *
	 * @return {*} - JSON with the word count result.
	 */
	function words(request, response) {
		response.setHeader('Content-Type', 'application/json');
		if (validUrl.isWebUri(request.query.url)) {

			return response.send(request.query);
		}

		return response.status(500).send({error: 'URL was invalid or not supplied'});
	}

	router.get('/api/words', words);

	return router;
};
