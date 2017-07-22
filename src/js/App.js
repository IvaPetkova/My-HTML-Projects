'use strict';

const template = require('../views/index.hbs');
const Search = require('./pages/search.js');

class App {

	constructor() {
		this._render();
	}

	_render() {
		let html = template();
		let container = document.querySelector('.app-container');
			container.innerHTML = html;

		let search = new Search();
		container.querySelector('.app-component').appendChild(search.container);

	}
}

module.exports = App;
