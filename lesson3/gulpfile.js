var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer')

gulp.task('default', function() {
  // use gulp watch to listen for changes in sass, then execute styles task
  gulp.watch('sass/**/*.scss', ['styles']);
});

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

})
