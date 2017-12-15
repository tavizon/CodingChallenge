'use strict';

const htmlToText = require('html-to-text');
const requestPage = require('request');
const wordCount = require('wordcount');

/**
 * Get html from url
 *
 * @param  {string} url - url of html to scrape.
 *
 * @return {string} - text from html.
 */
function getText(url) {
	return new Promise(function (resolve, reject) {
		requestPage(url, function (error, response, body) {
			if (error) {
				// return reject(error);
				return reject(new Error("Error requesting page"));
			} else if (response.headers['content-type'].includes('text')) {
				let text = htmlToText.fromString(body, {
					wordwrap: false,
					ignoreImage: true,
					ignoreHref: true
				});
				return resolve(text);
			} else {
					return reject(new Error("URL contains no text"));
				}
			// }
		});
	});
}

/**
 * Count words scraped from a url
 *
 * @param {string} - url of html to scrape.
 *
 * @return {number} - word count result.
 */
function count(url) {
	return new Promise(function (resolve, reject) {
		getText(url).then(function (text) {
			let counted = wordCount(text);
			return resolve(counted);
		})
		.catch((error) => {
			return reject(error);
		});
	});
}

module.exports = {
	getText,
	count
};
