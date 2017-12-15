'use strict';

const config = require('../../config');
module.exports = require('kink-logger')(config.log.configFile);
