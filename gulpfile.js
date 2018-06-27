const gulp =require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//compile sass files
gulp.task('sass', () => {
  return gulp.src('src/sass/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
})

//server & watch

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: './src'
  });

  gulp.watch('src/sass/main.scss', ['sass']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
})

gulp.task('default', ['serve']);