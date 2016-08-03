const gulp = require('gulp')
const plumber = require('gulp-plumber')
const babel = require('gulp-babel')
const debug = require('gulp-debug')
const umd = require('gulp-umd')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

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

const commonDependencies = [
  {
    name: 'react',
    amd: 'react',
    cjs: 'react',
    global: 'React',
    param: 'React'
  }
]

gulp.task('umdTableHead', [ 'babel' ], function() {
  return gulp.src(
    [
      'build/TableHead.js'
    ]
  )
    .pipe(umd({
      dependencies: function() {
        return commonDependencies
      }
    }))
    .pipe(gulp.dest('build/umd'))
})

gulp.task('umdTableHeadRow', [ 'babel' ], function() {
  return gulp.src(
    [
      'build/TableHeadRow.js'
    ]
  )
    .pipe(umd({
      dependencies: function () {
        return commonDependencies
      }
    }))
    .pipe(gulp.dest('build/umd'))
})

gulp.task('umdTableHeadTh', [ 'babel' ], function() {
  return gulp.src(
    [
      'build/TableHeadTh.js'
    ]
  )
    .pipe(umd({
      dependencies: function () {
        return commonDependencies
      }
    }))
    .pipe(gulp.dest('build/umd'))
})

gulp.task('umdTable', [ 'babel' ], function() {
  return gulp.src(
      [
        'build/Common.js',
        'build/Paginator.js',
        'build/TableRow.js',
        'build/Table.js'
      ]
    )
    .pipe(concat('Table.js'))
    .pipe(umd({
      dependencies: function() {
        return commonDependencies
      }
    }))
    .pipe(gulp.dest('build/umd'))
})

gulp.task('concatTable', [ 'umdTable', 'umdTableHead', 'umdTableHeadRow', 'umdTableHeadTh' ], function () {
  return gulp.src(
      [
        'build/umd/TableHeadTh.js',
        'build/umd/TableHeadRow.js',
        'build/umd/TableHead.js',
        'build/umd/Table.js'
      ]
    )
    .pipe(concat('Table.js'))
    .pipe(gulp.dest('dist'))
})

gulp.task('uglifyTable', [ 'concatTable' ], function() {
  return gulp.src(
      [
        'dist/Table.js'
      ]
    )
    .pipe(rename('Table.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})

gulp.task('default', [ 'uglifyTable' ])
