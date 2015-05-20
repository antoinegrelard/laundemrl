var gulp      = require('gulp');
var ftp       = require('vinyl-ftp' );
var prompt    = require('gulp-prompt');

/**
 * Copy files and folder to server
 * via ftp
 */
gulp.task( 'ftp', function() {

 // using base = '.' will transfer everything to /public_html correctly
 // turn off buffering in gulp.src for best performance

 return gulp.src('/')
 	 .pipe( prompt.prompt({
 	 	type: 'password',
 	 	name: 'pass',
 	 	message: 'enter your password'
 	 }, function(res){

 	 	var conn = ftp.create(
 	 		{
 	 		 host:     'ftp.antoinegrelard.fr',
 	 		 user:     'antoinegq',
 	 		 password: res.pass,
 	 		 parallel: 10
 	 		}
 	 	)

 	 	gulp.src( "build/production/**", { base: 'build/production', buffer: false } )
 	 	.pipe( conn.newer( '/www/test' ) ) // only upload newer files
 	 	.pipe( conn.dest( '/www/test' ) );
 	 }))

} );