/*
 * index.js
 * Copyright 2017 Lucas Neves <lcneves@gmail.com>
 *
 * A sample server setup for the Livre project.
 * Reads configuration from the file './config/default.json'.
 */

'use strict';

const config = require('config').get('config');

require('livre-server')(config);

