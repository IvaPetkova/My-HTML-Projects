'use strict';

const template = require('../views/index.hbs');
const Logo = require('./components/Logo.js');
const Search = require('./pages/Search.js');

class App {

	constructor() {
		this._render();
	}

	_render() {
		let container = document.querySelector('.app-container');


			container.innerHTML = template();

		let logo = new Logo();
		container.querySelector('.app').appendChild(logo.container);

		let search = new Search();
		container.querySelector('.app').appendChild(search.container);

	}
}

module.exports = App;
