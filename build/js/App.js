'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = require('./Config');
var template = Handlebars.compile(htmlTemplate);
var DataOptions = require('./dataOptions');
// const data = require('./data/ForecastWeather');
// const CurrentWeather = require('./data/CurrentWeather');
// const Search = require('./pages/search');

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.update();
	}

	// Public methods -------------------------------------------------------


	_createClass(App, [{
		key: 'update',
		value: function update(value) {
			this._render(value);
		}

		// Private methods ------------------------------------------------------

	}, {
		key: '_render',
		value: function _render(value) {

			var container = document.querySelector('.app-container'),
			    htmlTemplate = document.querySelector('.weather-template').innerText;

			container.innerHTML = template();

			// let html = template();
			// let container = document.querySelector('.app-container');
			// container.innerHTML = html;

			var search = new Search();
			container.querySelector('.wrapper').appendChild(search.container);
			console.error(search);
		}
	}]);

	return App;
}();

module.exports = App;