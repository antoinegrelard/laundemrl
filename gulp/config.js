var src               = 'app';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var srcAssets         = 'app/_assets';
var jsLibAssets       = 'app/_bower_components';
var developmentAssets = 'build/assets';
var productionAssets  = 'build/production/assets';

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      port: 9999,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/imgs/**',
        developmentAssets + '/fonts/*'
      ]
    },
    production: {
        server: {
          baseDir: [production]
        },
        port: 9998
      }
  },
  delete: {
    src: [build],
    temp: 'temp'
  },
  jekyll: {
    development: {
      src:    src,
      dest:   development,
      config: '_config.yml'
    },
    production: {
      src:    src,
      dest:   production,
      config: '_config.yml,_config.build.yml'
      }
  },
  sass: {
    src:  srcAssets + '/scss/main.scss',
    dest: developmentAssets + '/css',
    options: {
      sourcemap: true,
      style: 'expanded',
      noCache: true,
      bundleExec: true
    }
  },
  scripts: {
    src: srcAssets + '/js/**/*.js',
    temp: 'temp/**/*.js',
    dest: developmentAssets + '/js',
    prod: productionAssets + '/js'
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  images: {
    src:  srcAssets + '/imgs/**/*',
    dest: developmentAssets + '/imgs',
    prod: productionAssets + '/imgs'
  },
  fonts: {
    src:  srcAssets + '/fonts/*',
    dest: developmentAssets + '/fonts',
    prod: productionAssets + '/fonts'
  },
  watch: {
    jekyll: [
      '_config.yml',
      '_config.build.yml',
      src + '/_data/**/*.{json,yml,csv}',
      src + '/_includes/**/*.{html,xml}',
      src + '/_layouts/*.html',
      src + '/_plugins/*.rb',
      src + '/_posts/*.{markdown,md}',
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
      src + '/*'
    ],
    sass:    srcAssets + '/scss/**/*.{sass,scss}',
    scripts: srcAssets + '/js/**/*.js',
    images:  srcAssets + '/imgs/**/*',
    fonts:  srcAssets + '/fonts/*'
  },
  scsslint: {
    src: [
      srcAssets + '/scss/**/*.{sass,scss}'
      ],
      options: {
        bundleExec: true
      }
  },
  optimize: {
    css: {
      src:  developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    js: {
        src: productionAssets + '/js/app.js',
        dest: productionAssets + '/js/',
        options: {}
    },
    html: {
        src: production + '/**/*.html',
        dest: production,
        options: {
          collapseWhitespace: true
        }
    }
  },
  revision: {
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/js/*.js',
        productionAssets + '/imgs/**/*'
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'manifest.json',
        path: productionAssets
      }
    }
  },
  collect: {
    src: [
      productionAssets + '/manifest.json',
      production + '/**/*.{html,xml,txt,json,css,js}',
      '!' + production + '/feed.xml'
    ],
    dest: production
  }
};