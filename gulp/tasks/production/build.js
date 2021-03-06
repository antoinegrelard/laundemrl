var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function(callback) {
  runSequence('delete', 'jekyll:production',
  [
    'sass',
    'fonts:production',
    'images:production',
    'scripts:production'
  ],
  [
    'optimize:css',
    'optimize:js'
  ],
  callback);
});