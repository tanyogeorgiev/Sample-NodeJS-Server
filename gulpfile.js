let gulp = require('gulp')
let del = require('del')
let uglify = require('gulp-uglify')
let concat = require('gulp-concat')
let css = require('gulp-minify-css')

gulp.task('css', function () {
  del.sync(['build/allcss*'])

  return gulp.src([
    'content/site.css'
  ])
  .pipe(css())
  .pipe(concat('allcss.min.css'))
  .pipe(gulp.dest('build'))
})
gulp.task('scripts', function () {
  del.sync(['build/allcss*'])

  return gulp.src([
    'content/ex.js'
  ])
  .pipe(uglify())
  .pipe(concat('alljs.min.js'))
  .pipe(gulp.dest('build'))
})

gulp.task('default', ['scripts', 'css'], function () {})
