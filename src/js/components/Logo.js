'use strict';

const template = require('../../views/components/Logo.hbs');

class Logo {

	constructor() {
		this.container = document.createElement('div');


		this.container.classList.add('logo-container');
		this.render();
	}

	render() {
		this.container.innerHTML = template();
	}
}

module.exports = Logo;
