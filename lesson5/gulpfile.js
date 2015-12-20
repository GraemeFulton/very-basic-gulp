/*eslint-disable */

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');

/**
 * Defaul
 * @param  {[type]} 'default' [description]
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
gulp.task('default',['styles','lint'], function() {
  // use gulp watch to listen for changes in sass, then execute styles task
  gulp.watch('sass/**/*.scss', ['styles']);
  //lint js files
  gulp.watch('js/**/*.js', ['lint']);

  //run browser-sync
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

/**
 * lint
 * @param  {[type]} 'lint'   [description]
 * @param  {[type]} function (             [description]
 * @return {[type]}          [description]
 */
gulp.task('lint', function () {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['**/*.js','!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});
