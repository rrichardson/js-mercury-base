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
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/app.min.css': ['css/normalize.css', 'css/skeleton.css', 'css/custom.css']
        }
      }
    }
});

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-babel');
grunt.loadNpmTasks('grunt-browserify');
grunt.loadNpmTasks('grunt-curl');
grunt.registerTask('default', ['babel', 'browserify', 'uglify', 'cssmin']);

}
