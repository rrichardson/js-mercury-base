module.exports = function(grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
        options: {
            modules: "common",
            sourceMap: true
        },

        dist: {
            files: {
                'objs/app.js': 'src/app.js'
            }
        }
    },

    browserify: {
      dist: {
        files: {
            'lib/app.js' : 'objs/app.js'
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'lib/app.js',
        dest: 'lib/app.min.js'
      }
    }
  });

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-babel');
grunt.loadNpmTasks('grunt-browserify');

grunt.registerTask('default', ['babel', 'browserify', 'uglify']);

}
