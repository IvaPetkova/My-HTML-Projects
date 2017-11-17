'use strict';

const template = require('../../views/pages/Search.hbs');

class SearchPage {

	constructor() {
		this.container = document.createElement('div');
		this.container.className = 'search-container';
		this.render();

	}

	render() {
		this.container.innerHTML = template();
		this.search();
	}

	search() {
		let searchValue = this.container.querySelector('.search-value');
		let button = this.container.querySelector('.btn');

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

						console.log(data);

						alert(data.location.name + " " + data.location.country + " " + data.current.temp_c + " °C")

					}).catch(err => console.log(err));
			}
		});

	}

}

module.exports = SearchPage;
