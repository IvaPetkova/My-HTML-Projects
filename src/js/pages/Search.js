'use strict';

const template = require('../../views/pages/Search.hbs');

class SearchPage {

	constructor() {
		this.container = document.createElement('div');
		this.container.className = 'search-container';
		this.render();
	}

	render() {
		this.container.innerHTML = template();
	}

}

module.exports = SearchPage;
