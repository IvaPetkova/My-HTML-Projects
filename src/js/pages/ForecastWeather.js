'use strict';

const template = require('../../views/pages/ForecastWeather.hbs');
const Button = require('../../js/components/Button');

class ForecastWeather {

	constructor(search) {
		this.container = document.createElement('div');
		this.container.classList.add('forecast-weather-container');

		this.render();

	}

	render() {
		this.container.innerHTML = template();

		this.button();
	}

	button() {
		const button = new Button('Go to Current Weather');
		this.container.appendChild(button.container);

		button.container.addEventListener('click', () => {
			this.hidden();
			this.container.previousElementSibling.classList.add('show');
		});
	}

	show(data) {
		this.container.classList.add('show');

		this.printWeather(data);
	}

	hidden() {
		this.container.classList.remove('show');
	}

	//ToDo: Move this data to appropriate files.
	printWeather(data) {

		console.log(data);
		const forecastData = data.forecast.forecastday;
		console.log('forecastData ', forecastData);

		forecastData.forEach(days => {
			console.log(days.hour[0]);
			document.querySelector('.forecast-weather .content').innerHTML += `
			<div class="hour">
				<span class="city-name">${days.hour[0]}</span>
			</div>
			`
		});

	}
}

module.exports = ForecastWeather;
