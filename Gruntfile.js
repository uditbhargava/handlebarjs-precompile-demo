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
            templates : {
                files: ["templates/**/*.hbs", "templates/*.hbs"],
                tasks: ['handlebars']
            },

            tasks: ['handlebars']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['handlebars']);

};
