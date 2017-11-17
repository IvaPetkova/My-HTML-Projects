'use strict';

const template = require('../../views/pages/CurrentWeather.hbs');

class CurrentWeatherPage {

	constructor() {
		this.container = document.createElement('div');
		this.container.classList.add('current-weather-container');
		this.render();
	}

	render() {
		this.container.innerHTML = template();
	}
}



module.exports = CurrentWeatherPage;
