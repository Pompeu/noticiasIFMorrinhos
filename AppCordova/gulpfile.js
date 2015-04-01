var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect');

gulp.task('scripts', function() {
  return gulp.src([
    'src/bower_components/angular/angular.min.js',
    'src/main.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/app/scripts'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  return gulp.src('dist/app/*.html')
    .pipe(connect.reload());
});

gulp.task('watch',function() {
  gulp.watch('src/*.js',['scripts']);
  gulp.watch('dist/app/*.html',['html']);
})

gulp.task('connect',function() {
  connect.server({
    root:['dist/app/'],
    port: 8000,
    livereload: true
  })
});

gulp.task('default',['scripts','html','watch', 'connect'])