'use strict';

const template = require('../views/index.hbs');
const Search = require('./pages/search');

class App {

	constructor() {
		this.update();
	}

	// Public methods -------------------------------------------------------
	update(value) {
		this._render(value);
	}

	// Private methods ------------------------------------------------------
	_render(value) {
		let html = template();
		let container = document.querySelector('.app-container');
			container.innerHTML = html;

		let search = new Search();
		container.querySelector('.app-component').appendChild(search.container);

	}
}

module.exports = App;
