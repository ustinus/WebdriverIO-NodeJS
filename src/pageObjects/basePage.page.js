"use strict";
class Page {
	constructor() {
		this.title = 'base Page';
	}
	open(url) {
		browser.url(url);
	}
}
module.exports = new Page();