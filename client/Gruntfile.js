module.exports = function(grunt) {

	var browserifyExternal = [
		"jquery",
		"lodash",
		"printf",
		"angular"
	];

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		jshint: {
			all: ["src/js/**/*.js"],
			options: {
				jshintrc: true
			}
		},

		watch: {
			less: {
				files: ["src/**/*.less"],
				tasks: ["less"],
				options: {
					spawn: false
				}
			},
			js: {
				files: ["src/js/**/*.js"],
				tasks: ["jshint", "browserify:client"],
				options: {
					spawn: false
				}
			},
			copy: {
				files: ["src/index.html", "src/js/**/*.html", "src/img/**/*"],
				tasks: ["copy"],
				options: {
					spawn: false
				}
			}
		},

		less: {
			options: {
				cleancss: true,
			},
			styles: {
				files: {
					"dist/css/main.css": ["src/less/vendor/*.less", "src/**/*.less"]
				}
			}
		},

		browserify: {
			vendor: {
				files: {
					"dist/js/vendor.js": []
				},
				options: {
					require: browserifyExternal,
					transform: ["browserify-shim"]
				}
			},
			vendorBuild: {
				files: {
					"tmp/vendor.js": []
				},
				options: {
					require: browserifyExternal,
					transform: ["browserify-shim"]
				}
			},
			client: {
				files: {
					"dist/js/client.js": ["src/js/**/*.js"]
				},
				options: {
					external: browserifyExternal,
					bundleOptions: {
						debug: true
					}
				},
			},
			clientBuild: {
				files: {
					"tmp/client.js": ["src/js/**/*.js"]
				},
				options: {
					external: browserifyExternal,
				},
			},
		},

		uglify: {
			options: {
				mangle: false
			},
			all: {
				files: {
					"dist/js/vendor.js": ["tmp/vendor.js"],
					"dist/js/client.js": ["tmp/client.js"]
				}
			}
		},

		copy: {
			main: {
				files: [
					{ src: "src/index.html", dest: "dist/index.html" },
					{ expand: true, cwd: "src/js/", src: ["**/*.html"], dest: "dist/"},
					{ expand: true, cwd: "src/img/", src: ["**/*"], dest: "dist/img/"},
					{ expand: true, cwd: "src/fonts/", src: ["**/*"], dest: "dist/fonts/"},
				]
			}
		},

		connect: {
			client: {
				options: {
					port: 9000,
					hostname: "localhost",
					base: "dist",
					keepalive: true
				}
			},
		},
	});

	grunt.loadNpmTasks("assemble-less");
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default", ["jshint", "browserify:vendorBuild", "browserify:clientBuild", "uglify", "less", "copy"]);
};
