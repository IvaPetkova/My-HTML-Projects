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
			if(searchValue.value.length !== 0) {
				search();
			}
		});

	}



}

module.exports = SearchPage;
