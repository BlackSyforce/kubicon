/*global module:false*/
module.exports = function(grunt) {

  //Run 'MODULE=csAccount grunt karma:(unit|watch)', to unit test a single module
  var MODULE = process.env.MODULE || '**';
  var BASE_URL = process.env.BASE_URL || "http://localhost:8081";

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    // In this concatenation task is where we set the order of loading the angular files
    concat: {
      options: {
        stripBanners: true,
        seperator: ';'
      },
      components: {
        src: [
          'src/assets/components/angular/angular.min.js',
          'src/assets/components/angular-route/angular-route.min.js',
          'src/assets/components/jquery/dist/jquery.min.js',
          'src/assets/components/ngmap/build/scripts/ng-map.min.js'
        ],
        dest: 'dist/assets/js/components.min.js'
      },
      dist: {
        src: [
          "dist/assets/js/components.min.js",
          "dist/assets/js/app.min.js"
        ],
        dest: "dist/assets/js/production.min.js"
      }
    },
    uglify: {
      options: {
        preserveComments: false,
        semicolons: true,
        sourceMap: false
      },
      app: {
        src: [
          "dist/assets/js/modules.js",
          "dist/assets/js/app.js"
        ],
        dest: "dist/assets/js/app.min.js"
      }
    },
    jshint: {
      options: {
        curly: true, // Forces curlies around all statements
        eqeqeq: false, // Forces all equality checks to be typed
        immed: true, // Forces wrapping immediate function calls with parantheses
        latedef: true, // Prohibits use of a variable before it's defined
        newcap: false, // Requires capitilization of constructor functions
        noarg: true, // Prohibits arguments.caller
        sub: true, // Suppresses warnings about forcing dot notation
        undef: true, // Prohibits the use of explicitly undeclared variables
        unused: false, // Lets you know if you've got unused variables
        eqnull: true, // Suppresses warnings about equality checks against null (a == null)
        browser: true, // Defines globals exposed by modern browsers
        lastsemic: true, // Suppreses warnings about missing semicolons if its the last statement of the block
        expr: true, // Suppresses warnings about expressions where you'd expect to see assignments or function calls, needs to be true cause of uglify
        devel: true, // Adds globals for development like console and alert
        jquery: true, // Adds globals for jQuery
        globals: {
          'angular': true
        },
        '-W117':true
      },
      angular: {
        src: ['src/app.js', 'src/controllers/*.js', 'src/directives/*.js']
      },
      data: {
        src: ['src/assets/data/**/*.json']
      },
      requests: {
        src: ['src/assets/requests/*/*.json']
      },
      app: {
        src: ["./src/app/**/*.js", "Gruntfile.js"]
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: false,
          cwd: 'src/assets/scss',
          src: ['*.scss'],
          dest: 'dist/assets/css',
          ext: '.css'
        }]
      },
      dev: {
        options: {
          style: "expanded"
        },
        files: [{
          expand: false,
          cwd: "./src/assets/scss",
          src: "*.scss",
          dest: "./src/assets/css",
          ext: ".css"
        }]
      }
    },
    clean: {
      dist: {
        src: ["dist"]
      },
      afterDist: {
        src: [
          "dist/assets/js/*.js",
          "!dist/assets/js/production.min.js"
        ]
      }
    },
    //Right now, copy tasks are only used in the build task
    copy: {
      images: {
        expand:true,
        cwd: "./src/assets",
        src: ["img/**", "images/**"],
        dest: "./dist/assets"
      },
      views: {
        expand:true,
        cwd: "./src",
        src: ["views/**"],
        dest: "./dist"
      },
      index: {
        src: ["./src/index-build.html"],
        dest: "./dist/index.html"
      },
      shiv: {
        src: ["./src/assets/components/html5shiv/dist/html5shiv.min.js"],
        dest: "./dist/assets/js/html5shiv.min.js"
      },
      components: {
        expand: true,
        cwd: "./src/assets/components",
        src: ["**/*.css"],
        dest : "./dist/assets/components"
      },
      fonts: {
        expand: true,
        cwd: "./src/assets/fonts",
        src: ["*"],
        dest: "./dist/assets/fonts"
      }
    },
    watch: {
      scss: {
        cwd: "src/assets/scss",
        files: ['*.scss', '**/*.scss'],
        tasks: ['sass:dev', "notify:scss"]
      },
      css: {
        options: {
          cwd: "src/assets/css",
          livereload: 1352
        },
        files: ["*.css", "**/*.css"]
      },
      js: {
        options: {
          livereload: 1352
        },
        files: ["src/**/*.js", "Gruntfile.js"],
        tasks: ["newer:jshint:app", "notify:js"]
      },
      views: {
        options: {
          cwd: 'src/views',
          livereload: 1352
        },
        files: ['*.tpl.html', '**/*.tpl.html']
      },
      tests: {
        files: ['src/app/**/tests/*.test.js'],
        tasks: ["mocha"]
      }
    },
    notify: {
      everything: {
        options: {
          title: 'Everything Compiled',
          message: 'Grunt default run and everythings compiled!'
        }
      },
      angular: {
        options: {
          title: 'Angular Compiled',
          message: 'Angular successfully compiled!'
        }
      },
      data: {
        options: {
          title: 'Data Linted',
          message: 'Everything is valid JSON'
        }
      },
      requests: {
        options: {
          title: 'Data Linted',
          message: 'Everything is valid JSON'
        }
      },
      scss: {
        options: {
          title: 'SCSS Compiled',
          message: 'SCSS Compiled and Complete'
        }
      },
      js: {
        options: {
          title: "JSHint",
          message: "JS files successfully linted!"
        }
      },
      dev: {
        options: {
          title: "dev",
          message: "JS files linted. SASS compiled."
        }
      },
      build: {
        options: {
          title: "Build",
          message: "Everything compiled, minified, and concatenated into dist folder."
        }
      }
    },
    //Append js files to index.html
    'sails-linker': {
      components: {
        options: {
          startTag: "<!-- components -->",
          endTag: "<!-- /components -->",
          fileTmpl: '<script src="%s"></script>',
          appRoot: 'src'
        },
        files: {
          "./src/index.html": [
            'src/assets/components/angular/angular.min.js',
            'src/assets/components/angular-route/angular-route.min.js',
            'src/assets/components/jquery/dist/jquery.min.js',
            'src/assets/components/ngmap/build/scripts/ng-map.min.js'
          ]
        }
      },
      modules: {
        options: {
          startTag: '<!-- modules -->',
          endTag: '<!-- /modules -->',
          fileTmpl: '<script src="%s"></script>',
          appRoot: 'src'
        },
        files: {
          "./src/index.html": [
            "src/app.js",
            "src/controllers/*.js",
            "src/directives/*.js"
          ]
        }
      },
      app: {
        options: {
          startTag: '<!-- app -->',
          endTag: '<!-- /app -->',
          fileTmpl: '<script src="%s"></script>',
          appRoot: 'src'
        },
        files: {
          "./src/index.html": [
            "src/app.js",
            "src/controllers/*.js",
            "src/directives/*.js"
          ]
        }
      }
    },
    ngAnnotate: {
      modules: {
        files: [{
          src: [
            "src/app.js",
            "src/controllers/*.js",
            "src/directives/*.js"
          ],
          dest: './dist/assets/js/modules.js'
        }]
      },
      app: {
        files: [{
          src: [
              "src/app.js",
              "src/controllers/*.js",
              "src/directives/*.js"
            ],
          dest: './dist/assets/js/app.js'
        }]
      }
    },
    server: {
      dev: {
        host: "localhost",
        port: 6081,
        index: "index.html",
        publicDir: "./src"
      },
      live: {
        host: "localhost",
        port: 6081,
        index: "index.html",
        publicDir: "./dist",
        wait: true
      }
    },
    meta: {
      deps: [
        'src/assets/components/angular/angular.min.js',
        'src/assets/components/angular-route/angular-route.min.js',
        'src/assets/components/jquery/dist/jquery.min.js',
        'src/assets/components/ngmap/build/scripts/ng-map.min.js'
      ]
    },
    karma: {
      options: {
        //configFile: './tests/unit/karma.config.js',
        basePath: "./",
        files: [
          '<%= meta.deps %>',
          'src/app/'+ MODULE +'/**/*.js',
          'src/app/*.js',
          'src/views/templates.js',
          'src/app/'+ MODULE +'/tests/unit/*.spec.js'
        ],
        exclude: [
          'src/app/**/tests/**/*.test.js',
          'src/app/**/tests/**/*.conf.js',
          'src/app/**/tests/**/*.e2e.js'
        ],
        singleRun: false,
        autoWatch: true,
        port: 9999,
        frameworks: ['jasmine'],
        reporters: ['spec', 'coverage'],
        browsers: ['Chrome'],
        colors: true,
        preprocessors: {
          'src/app/*/{*.js,!(tests)/**/*.js}': 'coverage'
        },
        proxies: {
          '/': BASE_URL
        }
      },
      unit: {
        singleRun: true
      },
      watch: {
        singleRun: false
      }
    },
    shell: {
      shutDown: {
        command: 'curl http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer'
      },
      webdriver: {
        command: "webdriver-manager start"
      }
    },
    ngtemplates: {
      karma: {
        options: {
          module: 'Crowdskout.Templates'
        },
        cwd: 'src',
        src: 'views/**/*.html',
        dest: 'src/views/templates.js'
      }
    }
  });

  // Tasks to force and unforce, currently not being used
  grunt.registerTask('forceOn', 'set force option on', function() {
    if ( !grunt.option('force')) {
      grunt.config.set('useForce', true);
      grunt.option('force', true);
    }
  });

  grunt.registerTask('forceOff', 'set force option off', function() {
    if (grunt.config.get('useForce')) {
      grunt.option('force', false);
    }
  });

  //Server
  grunt.registerMultiTask("server", function() {

    var done    = this.async();
    var express = require("express");
    var serve   = require("serve-static");
    var app     = express();

    //Serve static files in public directory
    app.use(serve(this.data.publicDir, {
      'index': [
        this.data.index
      ]
    }));

    var that = this;
    //Redirect everything to #path, so angular can catch it
    app.get("*", function(req, res) {
      var options = {
        root: that.data.publicDir
      };
      res.sendFile('index.html', options, function (err) {
        if (err) {
          console.log(err);
        }
      });
    });

    //Start up express server
    var self = this;
    app.listen(this.data.port, function() {
      console.log("Server started on port: " + self.data.port);
      if(!self.data.wait) {
        done();
      }
    });
  });

  //Wrap in a func, in case we need it later,
  //should be called within a registerTask cb
  function spawnNew(name, args){
    var done = this.async();
    var spawn = require("child_process").spawn;
    var command = spawn(name, args);

    command.stdout.setEncoding('utf8');
    command.stderr.setEncoding('utf8');

    command.stdout.on('data', function (data) {
      data = data.replace("\n", "");
      console.log(data);
    });
    command.stderr.on('data', function (data) {
      data = data.replace("\n", "");
      console.log(data);
    });
    command.on('close', function (code) {
      done();
    });
  }

  //Protractor: this expects the selenium webdriver to be running, as well as our app.
  //Open a new terminal and run 'grunt webdriver' and then run 'grunt protractor' in a new tab
  //
  //To run protractor with a different baseUrl, run 'BASE_URL=http://dev.com grunt protractor'
  //or set BASE_URL as an environment var in your .bash_profile
  grunt.registerTask("protractor", function() {
    spawnNew.call(this, 'protractor', ['protractor.conf.js']);
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-sails-linker');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-notify');

  // Default task.
  // grunt.registerTask('no-watch', ['jshint:gruntfile', 'jshint:angular', 'jshint:data', 'ngmin', 'concat', 'uglify', 'jshint:foot', 'scss', 'clean', 'notify:everything']);
  // grunt.registerTask('default', ['no-watch', 'watch']);
  // grunt.registerTask('angular', ['jshint:angular', 'ngmin', 'concat:foot', 'uglify:foot', 'jshint:foot', 'clean:ngMinTmp', 'notify:angular']);
  // grunt.registerTask('scss', ['forceOn', 'forceOff', 'sass:dist', 'notify:scss']);

  grunt.registerTask("dev", [
    "sails-linker",
  ]);

  grunt.registerTask("dev:watch", [
    "dev",
    "watch",
    "notify:dev"
  ]);

  grunt.registerTask("dev:serve", [
    "dev",
    "server:dev",
    "watch",
    "notify:dev"
  ]);

  grunt.registerTask("build", [
    "clean:dist",
    "sass:dist",
    "jshint:app",
    "copy",
    "ngAnnotate",
    "concat:components",
    "uglify:app",
    "concat:dist",
    "clean:afterDist",
    "notify:build"
  ]);

  grunt.registerTask("build:serve", [
    "build",
    "server:live"
  ]);

  //If selenium is already running,
  //run 'grunt webdriver:shutdown'
  grunt.registerTask("webdriver", [
    "shell:webdriver"
  ]);

  grunt.registerTask("webdriver:shutdown", [
    "shell:shutDown"
  ]);

  //Run all unit tests
  //To test a single module, run 'MODULE=csModule grunt unit'
  grunt.registerTask("test:unit", [
    "ngtemplates:karma",
    "karma:unit"
  ]);

  //Watch spec files
  grunt.registerTask("autotest:unit", [
    "ngtemplates:karma",
    "karma:watch"
  ]);

  //Run all end-to-end tests
  //To test a single module, run 'MODULE=csModule grunt e2e'
  grunt.registerTask("test:e2e", [
    "protractor"
  ]);

  //Run all unit and e2e tests
  //To test a single module, run 'MODULE=csModule grunt test'
  grunt.registerTask("test", [
    "ngtemplates:karma",
    "karma:unit",
    "protractor"
  ]);

};
