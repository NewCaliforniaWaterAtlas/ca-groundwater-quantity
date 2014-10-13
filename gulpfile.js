var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var notify = require('gulp-notify');
var cache = require('gulp-cache');
var livereload = require('gulp-livereload');
var changed = require('gulp-changed');
var mocha = require('gulp-mocha');
var karma = require('gulp-karma');


gulp.task('styles', function () {
	var stream =  gulp.src([
		'public/vendor/bootstrap/dist/css/bootstrap.css',
		'public/vendor/fontawesome/css/font-awesome.css',
		'public/vendor/mapbox.js/mapbox.css',
		'public/vendor/leaflet-fullscreen/Control.FullScreen.css',
		'public/css/style.css'
	], {base: 'public/'})
	.pipe(changed('public/build/css'))
	.pipe(replace('/*!', '/*'))
	.pipe(concat('site.css'))
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	.pipe(gulp.dest('public/build/css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifyCSS())
	.pipe(gulp.dest('public/build/css'))
	.pipe(notify({ message: 'CSS task complete' }));
	return stream;
});

gulp.task('scripts', function () {
	var stream =  gulp.src([
		'public/vendor/angular/angular.js',
		'public/vendor/angular-ui-router/release/angular-ui-router.js',
		// 'public/vendor/ngstorage/ngStorage.js',
		// 'public/vendor/lodash/dist/lodash.js',
		'public/vendor/angular-bootstrap/ui-bootstrap-tpls.js',
		'public/js/core.js'

	], {base: 'public/'})
	.pipe(changed('public/build/js'))
	// .pipe(jshint('.jshintrc'))
	// .pipe(jshint.reporter('default'))
	.pipe(concat('site.js'))
	.pipe(gulp.dest('public/build/js'))
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('public/build/js'))
	.pipe(notify({ message: 'Scripts task complete' }));
	return stream;
});

gulp.task('default', function() {
  gulp.start('styles', 'scripts');
});

// watches

gulp.task('styles:watch', function() {
  // Watch .css files
  gulp.watch('public/css/custom/**/*.css', ['styles']);
});

gulp.task('scripts:watch', function() {
  // Watch .js files
  gulp.watch('public/js/**/*.js', ['scripts']);
});


gulp.task('watchall', function() {
  gulp.start('styles:watch', 'scripts:watch');
});