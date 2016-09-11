var gulp = require('gulp');

var
  del = require('del'),
  useref = require('gulp-useref'),
  gulpif = require('gulp-if'),
  htmlmin = require('gulp-htmlmin'),
  mincss = require('gulp-clean-css'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  replace = require('gulp-replace'),
  copy = require('gulp-copy'),
  zip = require('gulp-zip');


var uglifyOpts = {
  compress: {
    global_defs: {
      exports: false,
      define: false
    }
  }
};


gulp.task('clean', function () {
  return del([
    'dist',
    'package.zip'
  ]);
});

gulp.task('minify', ['clean'], function () {
  return gulp.
  src('app/*.html').
  pipe(useref()).
  pipe(gulpif('*.html', htmlmin({ collapseWhitespace: true }))).
  pipe(gulpif('*.css', mincss())).
  pipe(gulpif('*.js', uglify(uglifyOpts))).
  pipe(gulp.dest('dist'));
});

gulp.task('opal', ['clean'], function () {
  var base = 'app/lib/opal/opal/' + require('./bower').dependencies.opal;

  return gulp.
  src([
    base + '/opal.js',
    base + '/opal-parser.js',
    'app/js/override.js'
  ]).
  pipe(concat('opal.js')).
  pipe(uglify()).
  pipe(gulp.dest('dist/js'));
});

gulp.task('worker', ['opal'], function () {
  return gulp.
  src('app/js/worker.js').
  pipe(replace(/importScripts\([^)]+\);/m, 'importScripts("../js/opal.js");')).
  pipe(uglify()).
  pipe(gulp.dest('dist/js'));
});

gulp.task('copy', ['clean'], function () {
  return gulp.
  src([
    'app/img/**/*',
    'app/manifest.webapp'
  ]).
  pipe(copy('dist', { prefix: 1 }));
});

gulp.task('package', ['minify', 'worker', 'copy'], function () {
  return gulp.
  src('dist/**/*').
  pipe(zip('package.zip')).
  pipe(gulp.dest('.'));
});

gulp.task('default', ['package']);
