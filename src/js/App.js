'use strict';

const template = require('../views/index.hbs');
const Search = require('./pages/Search.js');

class App {

	constructor() {
		this._render();
	}

	_render() {
		// let html = template();
		let container = document.querySelector('.app-container');
			container.innerHTML = template();

			console.log('container.innerHTML = template();');

		let search = new Search();
		container.querySelector('.app').appendChild(search.container);

	}
}

module.exports = App;
