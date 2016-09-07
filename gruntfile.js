module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'js/main.js': ['assets/js/*.js']
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'css/main.css': ['assets/css/normalize.css', 'assets/css/style.css', 'assets/css/responsive.css']
                }
            }
        },
        watch: {
            options: {livereload: true},
            scripts: {
                files: ['assets/js/*.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['assets/css/*.css'],
                tasks: ['cssmin']
            },
            html: {
                files: ['*.html']
            }
        }
    });
    grunt.registerTask('default', 'watch');
}