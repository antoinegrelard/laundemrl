var gulp        = require('gulp');
var config      = require('../../config').fonts;

/**
 * Copy images to build folder
 * if not changed
 */
gulp.task('fonts:production', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.prod));
});