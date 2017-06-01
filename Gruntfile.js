module.exports = function (grunt) {

	grunt.initConfig({
		stylus: {
			compile: {
				options: {
					compress: true
				},
				files: {
					'./dist/app.min.css': './src/styles/**/*.styl'
				}
			}
		}
	});

	//Load plugins
	grunt.loadNpmTasks('grunt-contrib-stylus');

	//Task lists
	grunt.registerTask('serve', ['stylus']);
};