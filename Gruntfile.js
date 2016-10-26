module.exports = function(grunt) {

  var javascript = grunt.file.readJSON('_data/assets/javascript.json').file,
      stylesheet = grunt.file.readJSON('_data/assets/stylesheet.json').file
  ;

  function addPath(item, index){
    var r = "_site"+item;
    return r;
  };

  javascript = javascript.map(addPath);
  stylesheet = stylesheet.map(addPath);

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
        src: javascript,
        dest: '_site/assets/js/app.min.js'
      },
    },
    cssmin : {
      options : {
        keepSpecialComments: 0,
        rebase: false,
        banner: '/*===================================================== \n'
                +'= <%= pkg.siteName %> \n'
                +'= by <%= pkg.author %> \n'
                +'= [LAST BUILD: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>] \n'
                +'=====================================================*/\n'
      },
      dist: {
        src: stylesheet,
        dest: '_site/assets/css/app.min.css',
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '_site/assets/img/',
          src: ['**/*.{png,jpg,gif}']
          dest: "_site/"
        }]
      }
    },
    htmlmin: {
      dynamic: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: '_site/',
          src: ['**/*.html'],
          dest: "_site/"
        }]
      }
    },
    clean: {
      js: javascript,
      css: stylesheet,
      folder: '_site/bower_components'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin','imagemin', 'clean']);
};
