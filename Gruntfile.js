module.exports = function(grunt) {

	var config = {
		pkg: grunt.file.readJSON('package.json'),

		browserify: {
			options: {
				watch: true,
				keepAlive: true,
				transform: [
					['hbsfy', {'extensions': ['hbs']}],
					['babelify', {presets: ['es2015'], plugins: ['transform-class-properties']}],
					['stylify', {'extensions': ['styl']}]
				]
			},
			dev: {
				options: {
					browserifyOptions: {debug: true},
					plugin: [
						['minifyify', {map: 'app.min.map', output: 'dist/app.min.map'}]
					]
				},
				files: {'dist/app.min.js': 'src/js/main.js'}
			}
		},

		clean: {
			build: ['dist/**/*.*']
		},

		stylus: {
			build: {
				options: {
					watch: true,
					sourcemap: {inline: true},
					compress: true,
					'include css': true
				},
				files: {
					'dist/app.min.css': ['src/styles/**/*.styl']
				}
			}
		},


		connect: {
			server: {
				options: {
					port: 1234,
					hostname: '*',
				},
			}
		}
	};

	require('load-grunt-tasks')(grunt);

	grunt.initConfig(config);

	grunt.registerTask('build', ['clean', 'stylus', 'connect', 'browserify']);

};
