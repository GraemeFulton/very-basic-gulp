var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

/**
 * Defaul
 * @param  {[type]} 'default' [description]
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
gulp.task('default', function() {
  // use gulp watch to listen for changes in sass, then execute styles task
  gulp.watch('sass/**/*.scss', ['styles']);
  gulp.run(
    'browser-sync'
  );

});

/**
 * browser-sync
 * @param  {[type]} 'browser-sync' [description]
 * @param  {[type]} function(      [description]
 * @return {[type]}                [description]
 */
gulp.task('browser-sync', function(){

  browserSync.init({
    server: {
             baseDir: "./"
         }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);


})

/**
 * styles
 * @param  {[type]} 'styles'  [description]
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
gulp.task('styles', function(){

  gulp.src('sass/**/*.scss')
      //pipe sass to convert scss to css
      .pipe(sass()
          //on sass error, don't break the build, just log an error
          .on('error', sass.logError))
      //pipe autoprefixer
      .pipe(autoprefixer({
          browsers:['last 2 versions']
      }))
      //save css to css folder
      .pipe(gulp.dest('./css'))
      //update browser-sync stream
	    .pipe(browserSync.stream());
})
