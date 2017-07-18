'use strict';

function search() {

	var input = document.querySelector('input');

	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {

		if (xhr.readyState === XMLHttpRequest.DONE) {

			console.log('First: ' + xhr.responseText);

			var data = JSON.parse(xhr.responseText);
			console.log('Second: ' + data.location.name);

			var array = data.location.name;

			content(data);
		}
	};

	xhr.open('GET', 'http://api.apixu.com/v1/current.json?key=2bfb747832cd43e3895140316170907&q=' + input.value, true);

	xhr.send(null);
}

function content(data) {

	wrapper = document.querySelector('.app-container');

	wrapper.innerHTML = template(data);
};