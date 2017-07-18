'use strict';

const template = require('../../views/pages/search.hbs');

class SearchComponent {

    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'search-container';
		this.render();
    }

    render() {
        this.container.innerHTML = template();
    }

}

module.exports = SearchComponent;
