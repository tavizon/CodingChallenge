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
		let count = 0;
		requestPage(url, function (error, response, body) {
			if (error) {
				return reject(error);
			} else {
				let text = htmlToText.fromString(body, {
					wordwrap: false,
					ignoreImage: true,
					ignoreHref: true
				});

				return resolve(text);
			}
		});
	});
}

/**
 * Count words in a string
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
		.catch((err) => {
			return reject(err);
		});
	});
}

module.exports = {
	getText,
	count
};
