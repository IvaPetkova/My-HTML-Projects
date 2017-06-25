module.exports = function (grunt) {

	grunt.initConfig({
		connect: {
			options: {
				port: 9001,
				livereload: 35729,
				hostname: 'localhost',
			},
			livereload: {
				options: {
					open: true,
					base: [
						'Weather-app'
					]
				}
			}
		},
		watch: {
			js: {
				files: ['Gruntfile.js', './src/js/**/*.js'],
				tasks: ['uglify'],
				options: {
					livereload: true
				}
			},
			stylus: {
				files: ['src/styles/**/*.styl'],
				tasks: ['stylus'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['src/views/**/*.html'],
				tasks: ['stylus'],
				options: {
					livereload: true
				}
			},
			livereload: {
				options: {
					livereload: '35729'
				},
				files: [
					'./src/js/**/*.js',
					'./src/styles/**/*.css',
					'./src/views/**/*.html',
					],
			}
		},
		uglify: {
			js: {
				files: {
					'./dist/app.min.js': ['./src/js/**/*.js']
				}
			}
		},
		stylus: {
			compile: {
				options: {
					compress: true
				},
				files: {
					'./dist/app.min.css': './src/styles/**/*.styl'
				}
			}
		},
	});

	//Load plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Task lists
	grunt.registerTask('build', ['uglify', 'stylus', 'connect', 'watch']);
};
