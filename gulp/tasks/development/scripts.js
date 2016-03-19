var gulp       = require('gulp');
var plumber    = require('gulp-plumber');
var babel	   = require('gulp-babel');
var browserify = require('browserify');
var source 	   = require('vinyl-source-stream');
var buffer 	   = require('vinyl-buffer');
var config     = require('../../config').scripts;

/**
 * Render es6 files into readable files and copy to destination
 */
gulp.task('babel', function() {
return gulp.src(config.src)
	.pipe(plumber())
	.pipe(babel())
	.pipe(gulp.dest('temp'));
});

gulp.task('scripts', ['babel'], function() {
	var b = browserify({
		entries: 'temp/app.js',
		debug: true
	});

	return b.bundle()
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(gulp.dest(config.dest));
});