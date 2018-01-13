'use strict';

const template = require('../../views/components/Search.hbs');
const Logo = require('../components/Logo.js');
const Button = require('./Button.js');

class Search {

	constructor(logo, currentWeather, forecastWeather, errorPage) {
		this.container = document.createElement('div');
		this.container.classList.add('search-container');

		this.render();

		this.logo = logo;
		this.currentWeather = currentWeather;
		this.forecastWeather = forecastWeather;
		this.errorPage = errorPage;

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

	returnData() {
		let searchValue = document.querySelector('.search-value');

		const data = fetch(`http://api.apixu.com/v1/forecast.json?key=2bfb747832cd43e3895140316170907&q=${searchValue.value}&days=7`);

		if(data) {
			data.then(res => res.json())
				.then(data => {

					if (data.error) {
						this.showError(data.error);
					}
					else {
						this.showCurrentWeather(data);
					}
				});
		}

	}

	showCurrentWeather(data) {
		this.logo.hidden();

		this.currentWeather.show(data);

		this.currentWeather.container
			.querySelector('.btn')
			.addEventListener('click', () => this.showForecastWeather(data));
	}

	showForecastWeather(data) {
		this.currentWeather.hidden();

		this.forecastWeather.show(data);
	}

	showError(dataError) {
		let errorBox = document.querySelector('.error-message');
		errorBox.innerHTML = dataError.message;

		this.errorPage.show();
	};

}

module.exports = Search;
