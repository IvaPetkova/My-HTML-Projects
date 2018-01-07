'use strict';

const template = require('../../views/components/Search.hbs');
const Logo = require('../components/Logo.js');
const Button = require('./Button.js');

class Search {

	constructor(logo, currentWeather, forecastWeather) {
		this.container = document.createElement('div');
		this.container.classList.add('search-container');

		this.render();

		this.logo = logo;
		this.currentWeather = currentWeather;
		this.forecastWeather = forecastWeather;

	}

	render() {
		this.container.innerHTML = template();

		this.button();
		this.search();
	}

	button() {
		const searchButton = new Button('Search');
		this.container.appendChild(searchButton.container);
	}

	returnData() {

		let searchValue = document.querySelector('.search-value');

		const data = fetch(`http://api.apixu.com/v1/forecast.json?key=2bfb747832cd43e3895140316170907&q=${searchValue.value}&days=7`);

		if(data) {
			data.then(res => res.json())
				.then(data => {

					this.showCurrentWeather(data);
					this.showForecastWeather(data);

				}).catch(err => console.log(err));
		}

	}

	search() {
		let searchValue = this.container.querySelector('.search-value');
		let button = this.container.querySelector('.search-container .btn');

		searchValue.addEventListener('input', () => {

			if(searchValue.value.length > 0) {
				button.classList.remove('disabled');
			}
			else {
				button.classList.add('disabled');
			}

		});

		searchValue.addEventListener('keyup', (e) => {
			e.preventDefault();
			if (e.keyCode === 13) {
				button.click();
			}
		});

		button.addEventListener('click', () => {
			this.returnData();
			searchValue.value = '';
		});

	}

	showCurrentWeather(data) {
		this.logo.hidden();

		this.currentWeather.show(data);
	}

	showForecastWeather(data) {
		this.currentWeather.hidden();

		this.forecastWeather.show(data);
	}

}

module.exports = Search;
