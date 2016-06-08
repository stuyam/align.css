var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('style', function() {
  gulp.src('src/center.scss')
    .pipe(autoprefixer())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.'));
});
