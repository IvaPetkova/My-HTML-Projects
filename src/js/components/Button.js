'use strict';

const template = require('../../views/components/Button.hbs');

class Button {

	constructor(label) {
		this.container = document.createElement('div');
		this.container.classList.add('button-container');

		this.render();

		let title = this.container.querySelector('.label');
		title.innerHTML = label;
	}

	render() {
		this.container.innerHTML = template();
	}

}

module.exports = Button;
