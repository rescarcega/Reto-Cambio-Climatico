/*==============*\
    Variables
\*==============*/

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus');


// Javascript

var jsSources = [
	'components/scripts/jquery.js',
	'components/scripts/plugins.js'
];


// Jade 

var jadeSources = [
	'login/*.jade',
	'formulario/*.jade',
	'consumo/*.jade',
	'mensajes/*.jade',
	'comparte/*.jade',
	'gasto/*.jade',
	'mensual/*.jade',
	'indicador/*.jade',
	'analisis/*.jade',
	'emisiones/*.jade',
	'reduccion/*.jade',
	'consejos/*.jade',
	'!Template/*.jade'
];

// Stylus

var stylusSources = [
	'Template/style.styl'
];



/*================*\
    * Scripts *
\*================*/

gulp.task('js', function() {
	gulp.src(jsSources)
	.pipe(uglify())
	.pipe(concat('script.js'))
	.pipe(gulp.dest('public/js'));

});



/*===============*\
	* jade *
\*===============*/

gulp.task('templates', function(){
	gulp.src(jadeSources)
		.pipe(jade())
		.pipe(gulp.dest('public'));
});



/*===============*\
	* stylus *
\*===============*/

gulp.task('compress', function(){
	gulp.src(stylusSources)
		.pipe(stylus({
			compress: true
		}))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('public/css'));
});



/*=====================*\
    * General task *
\*=====================*/

gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']);
	gulp.watch('**/*.jade', ['templates']);
	gulp.watch('**/*.styl', ['compress']);

});

gulp.task('default', ['js', 'templates', 'compress', 'watch']);
