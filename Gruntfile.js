module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Project configuration.
  grunt.initConfig({

    uglify: {
      dist: {
        src: [
          './assets/js/vendor/jquery.mask.min.js',
          './assets/js/vendor/owl.carousel.min.js',
          './assets/js/app.js'
        ],
        dest: 'assets/js/app.min.js'
      }
    },

    cssmin: {
      options: {
        keepSpecialComments: 0
      },      
      dist: {
        src: [
          './assets/css/normalize.min.css',
          './assets/css/font-awesome.min.css',
          './assets/css/owl.carousel.css',
          './assets/css/owl.transitions.css',
          './assets/css/grid-1200.css',
          './assets/css/app.css'
        ],
        dest: './assets/css/app.min.css'
      }
    }   
  });

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);
};