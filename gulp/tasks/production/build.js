var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function(callback) {
  runSequence('delete', 'jekyll:production',
  [
    'sass',
    'fonts',
    'images',
    'scripts:libraries',
    'scripts'
  ],
  [
    'optimize:css',
    'optimize:js',
    'optimize:html'
  ],
  'revision',
  'rev:collect',
  callback);
});