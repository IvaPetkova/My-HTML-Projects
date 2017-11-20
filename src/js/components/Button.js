'use strict';

const template = require('../../views/components/Button.hbs');

class Button {

	constructor() {
		this.container = document.createElement('div');
		this.container.classList.add('button-container');

		this.render();
	}

	render() {
		this.container.innerHTML = template();
	}

}

module.exports = Button;
