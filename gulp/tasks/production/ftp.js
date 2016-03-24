var gulp      = require('gulp');
var ftp       = require('vinyl-ftp' );
var vfb       = require('vinyl-ftp-branch' );

/**
 * Copy files and folder to server
 * via ftp
 */
gulp.task( 'ftp', ['publish'],  function() {
  var options = vfb({
     host: 'ftp.antoinegrelard.fr',
     userKey: 'key1',
     parallel: 10
    });

 	var conn = ftp.create(options);

 	return gulp.src( "build/production/**", { base: 'build/production', buffer: false } )
 	 	.pipe( conn.newer( '/www/test' ) ) // only upload newer files
 	 	.pipe( conn.dest( '/www/test' ) );
});