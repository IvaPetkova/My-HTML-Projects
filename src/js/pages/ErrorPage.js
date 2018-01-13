'use strict';

const template = require('../../views/pages/ErrorPage.hbs');

class ErrorPage {
	constructor() {
		this.container = document.createElement('div');
		this.container.classList.add('error-page-container');

		this.render();
	}

	render() {
		this.container.innerHTML = template();
	}

	show() {
		this.container.classList.add('show');
	}
}
module.exports = ErrorPage;
