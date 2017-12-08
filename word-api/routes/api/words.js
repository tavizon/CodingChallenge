'use strict';

// const cheerio = require('cheerio');
const htmlToText = require('html-to-text');
const requestPage = require('request');
const validUrl = require('valid-url');
const wordCount = require('wordcount');

module.exports = function (router) {
/**
 * Get html from url
 *
 * @param  {string} url - url of html to scrape.
 *
 * @return {string} - html.
 */
	function getPage(url) {
		return new Promise(function (resolve, reject) {
			let count = 0;
			requestPage(url, function (error, response, body) {
				let html = htmlToText.fromString(body, {
					wordwrap: false,
					ignoreImage: true,
					ignoreHref: true
				});

				resolve(html);
			});
		});
	}

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
			getPage(request.query.url).then(function (html) {
				return response.json({words: wordCount(html)});
			});
		} else {
			return response.status(500).json({error: 'URL was invalid or not supplied'});
		}
	}

	router.get('/api/words', words);

	return router;
};
