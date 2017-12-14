'use strict';

const Words = require('../../lib/words');
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
			Words.count(request.query.url).then(function (wordCount) {
				return response.json({words: wordCount});
			});
		} else {
			return response.status(500).json({error: 'URL was invalid or not supplied'});
		}
	}

	router.get('/api/words', words);

	return router;
};
