// Generated on 2014-11-02 using generator-browserify 0.4.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowerrc: grunt.file.readJSON('.bowerrc'),
    // configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist',
      vendor: '<%= bowerrc.directory %>',
      node: 'node_modules'
    },
    banner: '/*!\n' +
            ' * <%= pkg.name %>-<%= pkg.version %>\n' +
            ' * <%= pkg.author %>\n' +
            ' * <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' */\n\n',
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      less: {
        files: ['<%= yeoman.app %>/less/{,*/}*.less'],
        tasks: ['less:server', 'autoprefixer']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      browserify: {
        files: ['<%= yeoman.app %>/scripts/**/*.js', 'test/{,*/}*.js'],
        tasks: ['browserify:dev', 'concat:dev']
      },
      mocha: {
        files: ['test/{,*/}*.js'],
        tasks: ['browserify:test', 'mocha']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/**/*.html',
          '.tmp/styles/{,*/}*.css',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
          '<%= yeoman.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: '',
          livereload: false
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    less: {
      options: {
        compile: true,
        banner: '<%= banner %>'
      },
      dev: {
        src: ['<%= yeoman.app %>/less/app.less'],
        dest: '.tmp/styles/app.css'
      },
      bootstrap: {
        src: ['<%= yeoman.vendor %>/bootstrap/less/bootstrap.less'],
        dest: '<%= yeoman.dist %>/styles/bootstrap.css'
      },
      'bootstrap-min': {
        options: {
          compress: true
        },
        src: ['<%= yeoman.vendor %>/bootstrap/less/bootstrap.less'],
        dest: '<%= yeoman.dist %>/styles/bootstrap.min.css'
      },
      dist: {
        options: {
          compress: true
        },
        src: ['<%= yeoman.app %>/less/app.less'],
        dest: '<%= yeoman.dist %>/styles/app.min.css'
      }
    },
    browserify: {
      options: {
        transform: ["reactify"]
      },
      vendor: {
        src: [],
        dest: '.tmp/scripts/vendor.js',
        options: {
          debug: true,
          require: ['jquery', 'lodash', 'backbone'],

          alias: [
            'lodash:underscore'
          ]
        }
      },
      dev: {
        src: ['<%= yeoman.app %>/scripts/main.js'],
        dest: '.tmp/scripts/main.js',
        options: {
          debug: true,
          external: ['lodash']
        }
      },
      test: {
        src: ['test/{,*/}*.js'],
        dest: '.tmp/test/test.js',
        options: {
          debug: true,
          external: ['jquery', 'lodash', 'backbone']
          // ignore: ['test/lib/*.js', 'test/spec/*.js']
        }
      }
    },
    
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>'
      },
      dev: {
        src: ['.tmp/scripts/vendor.js', '.tmp/scripts/main.js'],
        dest: '.tmp/scripts/app.js'
      },
      dist: {
        src: ['.tmp/scripts/vendor.js', '.tmp/scripts/main.js'],
        dest: '.tmp/scripts/app.js'
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/
    // not enabled since usemin task does concat and uglify
    // check index.html to edit your build targets
    // enable this task if you prefer defining your build targets here
    /*uglify: {
      dist: {}
    },*/
    'bower-install': {
      app: {
        html: '<%= yeoman.app %>/index.html',
        ignorePath: '<%= yeoman.app %>/'
      }
    },
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
            '<%= yeoman.dist %>/styles/fonts/{,*/}*.*'
          ]
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.app %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: ['<%= yeoman.dist %>']
      },
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'images/{,*/}*.webp',
            'styles/fonts/{,*/}*.*'  ,
            'bower_components/sass-bootstrap/fonts/*.*'
          ]
        }]
      },
      styles: {
        expand: true,
        dot: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },
    
    modernizr: {
      devFile: '<%= yeoman.vendor %>/modernizr/modernizr.js',
      outputFile: '<%= yeoman.dist %>/bower_components/modernizr/modernizr.js',
      files: [
        '<%= yeoman.dist %>/scripts/{,*/}*.js',
        '<%= yeoman.dist %>/styles/{,*/}*.css',
        '!<%= yeoman.dist %>/scripts/vendor/*'
      ],
      uglify: true
    },
    concurrent: {
      server: [
        'less:dev',
        'browserify:dev',
        'browserify:vendor',
        'copy:styles'
      ],
      test: [
        'copy:styles',
        'browserify:vendor',
        'browserify:dev',
        'browserify:test'
      ],
      dist: [
        'less:dist',
        'browserify',
        'copy:styles',
        'imagemin',
        'svgmin',
      ]
    }
  });

  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'concat:dev',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function() {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'mocha',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'modernizr',
    'copy:dist',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'test',
    'build'
  ]);
};
