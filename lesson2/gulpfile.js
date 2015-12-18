var gulp = require('gulp');
var sass = require('gulp-sass')

gulp.task('default', function() {
  // place code for your default task here
  console.log('hello')
});

gulp.task('styles', function(){

  gulp.src('sass/**/*.scss')
      //pipe sass to convert scss to css
      .pipe(sass()
          //on sass error, don't break the build, just log an error
          .on('error', sass.logError))
      //save css to css folder
      .pipe(gulp.dest('./css'))

})
