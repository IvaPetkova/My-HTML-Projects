'use strict';

const template = require('../../views/pages/CurrentWeather.hbs');
const Search = require('./Search.js');

class CurrentWeatherPage {

	constructor(search) {
		this.container = document.createElement('div');
		this.container.classList.add('current-weather-container');

		this.render();

		this.search = search;

	}

	render() {
		this.container.innerHTML = template();
	}

	show(data) {

		this.container.classList.add('show');

		let show = this.container.querySelector('.current-weather');

		show.innerHTML = this.printWeather(data);
		console.warn('search data', this.search.data.location.name);
	}

	printWeather(data) {
		const html = `
			<span class="city-name">${data.location.name}</span>
			<span class="temp">${data.current.temp_c + " °C"}</span>
			<img class="icon" src="${data.current.condition.icon}">
			<span class="condition-text">${data.current.condition.text}</span>
		`;

		return html;
	}

	hidden() {
		this.container.classList.add('hidden');
		console.warn('hidden result');
	}
}

module.exports = CurrentWeatherPage;
