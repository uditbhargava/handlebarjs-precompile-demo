module.exports = function(grunt) {
    grunt.initConfig({
        handlebars: {
            // comment by dev 2nd commit
            all: {
				
                files: {
                    
                    // converting all .hbs(handlerbar template file ) into all.js file
                    // you can change the directory according to your requirement
                    "js/all.js": ["templates/*.hbs"]
                }
            }
        },
	    // comment for commit 1

        watch: {
			/** the grunt is waching if any changes in .hbs files 
			 *  if so there will be peform the task hanldebars which does precompile (.hbs to .js)
			 *  **/
            templates : {
			    files: ["templates/*.hbs"],
                tasks: ['handlebars']
            },

            tasks: ['handlebars']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['handlebars']);
};
