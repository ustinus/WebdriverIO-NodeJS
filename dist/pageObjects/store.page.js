"use strict";

var Page = require('./basePage.page.js');

var simplePageresponseObject = require('./simpleResponse.page.js');

var discoverPage = require('./discover.page.js');

class StorePage extends discoverPage {}
module.exports = StorePage;