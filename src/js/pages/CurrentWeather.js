'use strict';

const template = require('../../views/pages/CurrentWeather.hbs');
const Search = require('./Search.js');
const Button = require('../components/Button.js');
const ForecastWeather = require('../pages/ForecastWeather');

class CurrentWeatherPage {

	constructor(search) {
		this.container = document.createElement('div');
		this.container.classList.add('current-weather-container');

		this.render();
		this.search = search;

	}

	render() {
		this.container.innerHTML = template();
		this.button();
	}

	button() {
		const button = new Button('Go to Forecast Weather');
		this.container.appendChild(button.container);

		button.container.addEventListener('click', () => {
			this.hidden();
			this.container.nextElementSibling.classList.add('show');
		});
	}

	show(data) {
		this.container.classList.add('show');

		let show = this.container.querySelector('.content');

		show.innerHTML = this.printWeather(data);
	}

	hidden() {
		this.container.classList.remove('show');
	}

	//ToDo: Move this data to appropriate files.
	printWeather(data) {
		const html = `
			<span class="city-name">${data.location.name}</span>
			<span class="temp">${data.current.temp_c + " °C"}</span>
			<img class="icon" src="${data.current.condition.icon}">
			<span class="condition-text">${data.current.condition.text}</span>
		`;

		return html;
	}

}

module.exports = CurrentWeatherPage;
