/**
 * Created by pkn on 9/21/15.
 */
module.exports = function(grunt) {
    grunt.initConfig ({
        sass: {
            dist: {
                files: {
                    'app/css/style.css': 'sass/style.scss'
                }
            }
        },
        cssmin: {
            css: {
                files: {
                    'app/css/style.min.css' : ['app/css/style.css']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 3 version', 'ie 8', 'ie 9']
            },
            files: {
                src: 'app/css/style.min.css',
                dest: 'app/css/style.min.css'
            }
        },
        watch: {
                css: {
                    files: ['sass/*.scss'],
                    tasks: ['sass','cssmin','autoprefixer'],
                    options: {
                        livereload: true // needed to run LiveReload
                    }
                },
                js:{
                    files:['app/**/*.js'],
                    tasks:['uglify']
                }

            },
        karma:{
            unit:{
                options:{
                    framework:['jasmine'],
                    browsers:['PhantomJs'],
                    singleRun:true,
                    files:['bower_components/angular/angular.min.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                        'bower_components/angular-mocks/angular-mocks.js',
                        'app/app.js',
                        'app/**/*.js',
                        'tests/**/*.js'
                    ]
                }
            }
        },
        uglify : {
            js: {
                files: {
                    'app/js/app.min.js' : [ 'bower_components/angular/angular.min.js',
                        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                        'app/app.js', 'app/controllers/*.js',"app/services/*.js"
                    ]
                }
            }
        }



    })


    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer')
    grunt.loadNpmTasks('grunt-karma')
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['cssmin:css', 'autoprefixer', 'uglify:js']);
};
