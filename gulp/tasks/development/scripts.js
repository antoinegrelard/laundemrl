var gulp     = require('gulp');
var changed  = require('gulp-changed');
var config   = require('../../config').scripts;

/**
 * Copy scripts from
 * bower components, local libraries and app scripts
 */
 gulp.task('scripts', function() {
   return gulp.src(config.app.src)
     .pipe(changed(config.app.dest)) // Ignore unchanged files
     .pipe(gulp.dest(config.app.dest));
 });

 gulp.task('scripts:libraries', function() {
   return gulp.src(config.libraries.src)
     .pipe(changed(config.libraries.dest)) // Ignore unchanged files
     .pipe(gulp.dest(config.libraries.dest));
 });