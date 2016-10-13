module.exports = function(grunt) {
  var vendor_files = {
      javascript: [
        './_vendor/jquery/jquery.slim.js',
      ],
      stylesheet: [],
  };


  var project_files = {
      javascript: [
        './assets/js/_src/**/*.js',
      ],
      stylesheet: [
        './_site/public/assets/css/vendor/**.css',
      ],
  };

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*===================================================== \n'
                +'= <%= pkg.siteName %> \n'
                +'= by <%= pkg.author %> \n'
                +'= [LAST BUILD: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>] \n'
                +'=====================================================*/\n'
      },
      build: {
        src: project_files.javascript,
        dest: './_site/public/assets/js/app.min.js'
      },
    },
    cssmin : {
      options : {
        keepSpecialComments: 0,
        rebase: true,
        banner: '/*===================================================== \n'
                +'= <%= pkg.siteName %> \n'
                +'= by <%= pkg.author %> \n'
                +'= [LAST BUILD: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>] \n'
                +'=====================================================*/\n'
      },
      dist: {
        src: project_files.stylesheet,
        dest: './_site/public/assets/css/app.min.css',
      }
    },
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      dist: {
        src: '_site/public/index.html',
        dest: '_site/public/index.min.html',
      }
    },
     processhtml: {
      options: {
         process: true,
       },
      dist: {
        src: '_site/public/index.min.html',
        dest: '_site/public/index.html',
      }
     },
    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: '_site/public/assets/img/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: '_site/public/assets/img/'                  // Destination path prefix
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'processhtml', 'imagemin']);
};