'use strict';

const template = require('../views/index.hbs');
const Logo = require('./components/Logo.js');
const CurrentWeather = require('./pages/CurrentWeather.js');
const ForecastWeather = require('./pages/ForecastWeather.js');
const Search = require('./components/Search.js');
const ErrorPage = require('./pages/ErrorPage.js');

class App {

	constructor() {
		this._render();
	}

	_render() {
		let container = document.querySelector('.app-container');
		container.innerHTML = template();

		let logo = new Logo();
		container.querySelector('.top').appendChild(logo.container);

		let currentWeather = new CurrentWeather();
		container.querySelector('.show-box').appendChild(currentWeather.container);

		let forecastWeather = new ForecastWeather();
		container.querySelector('.show-box').appendChild(forecastWeather.container);

		let search = new Search(logo, currentWeather, forecastWeather);
		container.querySelector('.app').appendChild(search.container);

		let errorPage = new ErrorPage();
		container.querySelector('.show-box').appendChild(errorPage.container);

	}
}

module.exports = App;
