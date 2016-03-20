var gulp       = require('gulp');
var plumber    = require('gulp-plumber');
var browserify = require('browserify');
var source 	   = require('vinyl-source-stream');
var buffer 	   = require('vinyl-buffer');
var config     = require('../../config').scripts;

gulp.task('scripts:production', ['babel'], function() {
	var b = browserify({
		entries: 'temp/app.js',
		debug: true
	});

	return b.bundle()
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(gulp.dest(config.prod));
});