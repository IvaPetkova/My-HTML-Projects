'use strict';

const template = require('../../views/pages/ForecastWeather.hbs');
const Button = require('../../js/components/Button');

class ForecastWeather {

	constructor() {
		this.container = document.createElement('div');
		this.container.classList.add('forecast-weather-container');

		this.render();

	}

	render() {
		this.container.innerHTML = template();
		this.button();
	}

	button() {
		const button = new Button('Current Weather');
		this.container.appendChild(button.container);

		button.container.addEventListener('click', () => {
			this.hidden();
			this.container.previousElementSibling.classList.add('show');
		});
	}

	show(data) {
		this.container.classList.add('show');

		let show = this.container.querySelector('.content');

		show.innerHTML = this.printWeather(data);
		console.warn('search Forecast data', this.search.data.location.name);
	}

	hidden() {
		this.container.classList.remove('show');
	}

	printWeather(data) {
		const weatherOptions = `
			<span class="city-name">${data.location.name}</span>
			<span class="temp">${data.current.temp_c + " °C"}</span>
			<img class="icon" src="${data.current.condition.icon}">
			<span class="condition-text">${data.current.condition.text}</span>
		`;

		return weatherOptions;
	}
}

module.exports = ForecastWeather;
