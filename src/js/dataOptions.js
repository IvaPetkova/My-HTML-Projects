window.onload = function () {

	wrapper = document.querySelector('.app-component'),
		htmlTemplate = document.querySelector('.weather-template').innerText,
		template = Handlebars.compile(htmlTemplate);

	wrapper.innerHTML = (template(forecastWeather));
};
