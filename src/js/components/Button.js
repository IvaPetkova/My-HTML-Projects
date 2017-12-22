'use strict';

const template = require('../../views/components/Button.hbs');

class Button {

	constructor(label) {
		this.container = document.createElement('div');
		this.container.classList.add('button-container');

		this.render();

		let test = this.container.querySelector('.label');
		test.innerHTML = label;
	}

	render() {
		this.container.innerHTML = template();
	}

}

module.exports = Button;
