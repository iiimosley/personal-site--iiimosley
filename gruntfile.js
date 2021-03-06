const sass = require('node-sass');

module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            files: {
                src: 'js/main.js',
                dest: 'dist/bundle.js'
            },
            options: {
                transform: ['hbsfy']
            }
        },
        jshint: {
            files: ["js/**/*.js"],
            options: {
                predef: ["document", "console"],
                esnext: true,
                globalstrict: true,
                globals: {},
                browserify: true
            }
        },
        sass: {
            options: { implementation: sass, sourceMap: true },
            dist: {
                files: {
                    "stylesheets/main.css": "sass/main.scss"
                }
            }
        },
        watch: {
            options: {
                reload: true
            },
            javascripts: {
                files: ["js/**/*.js"],
                tasks: ["jshint", "browserify"]
            },
            hbs: {
                files: ['templates/**/*.hbs'],
                tasks: ["browserify"]
            },
            sass: {
                files: ["sass/**/*.scss"],
                tasks: ["sass"]
            }
        }
    });

    require("matchdep")
        .filter("grunt-*")
        .forEach(grunt.loadNpmTasks);

    grunt.registerTask("default", ['jshint', 'sass', 'browserify', 'watch']);
};
