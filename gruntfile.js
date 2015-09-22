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
            watch: {
                source: {
                    files: ['sass/*.scss'],
                    tasks: ['sass'],
                    options: {
                        livereload: true // needed to run LiveReload
                    }
                }
            }

    })


    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};
