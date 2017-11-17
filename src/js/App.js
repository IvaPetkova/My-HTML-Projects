'use strict';

const template = require('../views/index.hbs');
const Logo = require('./components/Logo.js');
const Search = require('./pages/Search.js');
const CurrentWeather = require('./pages/CurrentWeather.js');

class App {

	constructor() {
		this._render();
	}

	_render() {
		let container = document.querySelector('.app-container');
		container.innerHTML = template();

		let logo = new Logo();
		container.querySelector('.visible-box').appendChild(logo.container);

		let currentWeather = new CurrentWeather(search);
		container.querySelector('.visible-box').appendChild(currentWeather.container);

		let search = new Search(logo, currentWeather);
		container.querySelector('.app').appendChild(search.container);

	}
}

module.exports = App;
