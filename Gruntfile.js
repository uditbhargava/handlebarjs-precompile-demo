module.exports = function(grunt) {
    grunt.initConfig({
        handlebars: {
            all: {
                files: {
                    //"js/templates.js": ["templates/**/*.hbs"]
                    "js/all.js": ["templates/**/*.hbs", "templates/*.hbs"]
                }
            }
        },

        watch: {
            tasks: ['handlebars']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.registerTask('default', ['handlebars']);

};
