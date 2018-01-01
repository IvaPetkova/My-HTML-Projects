'use strict';

const template = require('../../views/pages/Search.hbs');
const Logo = require('../components/Logo.js');

class SearchPage {

	constructor(logo, currentWeather, forecastWeather) {
		this.container = document.createElement('div');
		this.container.className = 'search-container';

		this.render();

		this.logo = logo;
		this.currentWeather = currentWeather;
		this.forecastWeather = forecastWeather;

	}

	render() {
		this.container.innerHTML = template();
		this.search();
	}

	search() {
		let searchValue = this.container.querySelector('.search-value');
		let button = this.container.querySelector('.search .btn');

		searchValue.addEventListener('input', () => {

			if(searchValue.value.length > 0) {
				button.classList.remove('disabled');
			}
			else {
				button.classList.add('disabled');
			}

		});

		button.addEventListener('click', () => {
			const data = fetch(`http://api.apixu.com/v1/current.json?key=37a2650f4cb24c0a87091627171511&q=${searchValue.value}`);

			if(searchValue.value.length) {
				data.then(res => res.json())
					.then(data => {

						this.showCurrentWeather(data);
						this.showForecastWeather(data);

					}).catch(err => console.log(err));
			}
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

module.exports = SearchPage;
