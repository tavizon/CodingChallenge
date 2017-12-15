'use strict';

const Words = require('../../lib/words');
const validUrl = require('valid-url');
const logger = require('../../lib/utils/log').getLogger(__filename);

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
		if (validUrl.isWebUri(request.query.url)) {
			Words.count(request.query.url)
				.then(function (wordCount) {
					return response.json({words: wordCount});
				})
				.catch(err => {
					logger.error(err.message);
					return response.status(500).json({error: err.message});
				});
		} else {
			return response.status(400).json({error: 'URL was invalid or not supplied'});
		}
	}

	router.get('/api/words', words);

	return router;
};
