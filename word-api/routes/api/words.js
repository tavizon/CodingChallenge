'use strict';

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
		return response.send('Hello World!');
	}

	router.get('/api/words', words);

	return router;
};
