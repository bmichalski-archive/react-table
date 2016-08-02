const gulp = require('gulp')
const plumber = require('gulp-plumber')
const babel = require('gulp-babel')
const debug = require('gulp-debug')
const umd = require('gulp-umd')
const source = require('vinyl-source-stream')

gulp.task('umdTable', [ 'babel' ], function() {
  return gulp.src('build/Table.js')
    .pipe(umd({
      dependencies: function() {
        return [
          {
            name: 'Table',
            amd: [ 'react', 'underscore' ],
            cjs: [ 'react', 'underscore' ],
            global: [ 'React', '_' ],
            param: 'React, _'
          }
        ];
      }
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('babel', function () {
  return gulp
    .src([ 'src/**/*.jsx', 'src/**/*.js' ])
    .pipe(plumber())
    .pipe(debug({}))
    .pipe(babel({
      presets: [ 'react', 'es2015' ]
    }))
    .pipe(gulp.dest('build'))
})

gulp.task('default', [ 'umdTable' ])