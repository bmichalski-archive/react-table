const gulp = require('gulp')
const babel = require('gulp-babel')
const debug = require('gulp-debug')
const umd = require('gulp-umd')
const concat = require('gulp-concat')
const uglifyJs = require('gulp-uglify')
const rename = require('gulp-rename')
const less = require('gulp-less')
const uglifyCss = require('gulp-uglifycss')
const del = require('del')
const runSequence = require('run-sequence')

gulp.task('babel', [ 'clean:build:babel' ]  , function () {
  return gulp
    .src([ 'src/**/*.jsx', 'src/**/*.js' ])
    .pipe(debug({}))
    .pipe(babel({
      presets: [ 'react', 'es2015' ]
    }))
    .pipe(gulp.dest('build/babel'))
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

gulp.task('umd:TableHead', [ 'babel' ], function() {
  return gulp.src(
      [
        'build/babel/Component/TableHead.js'
      ]
    )
    .pipe(umd({
      dependencies: function() {
        return commonDependencies
      }
    }))
    .pipe(gulp.dest('build/umd'))
})

gulp.task('umd:TableHeadRow', [ 'babel' ], function() {
  return gulp.src(
      [
        'build/babel/Component/TableHeadRow.js'
      ]
    )
    .pipe(umd({
      dependencies: function () {
        return commonDependencies
      }
    }))
    .pipe(gulp.dest('build/umd'))
})

gulp.task('umd:TableHeadTh', [ 'babel' ], function() {
  return gulp.src(
      [
        'build/babel/Component/TableHeadTh.js'
      ]
    )
    .pipe(umd({
      dependencies: function () {
        return commonDependencies
      }
    }))
    .pipe(gulp.dest('build/umd'))
})

gulp.task('umd:Table', [ 'babel' ], function() {
  return gulp.src(
      [
        'build/babel/Common.js',
        'build/babel/Component/Paginator.js',
        'build/babel/Component/TableRow.js',
        'build/babel/Component/MainTable.js',
        'build/babel/Component/Table.js'
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

gulp.task('umd:ReactRouterPaginator', [ 'babel' ], function() {
  return gulp.src(
      [
        'build/babel/ReactRouterPaginator.js'
      ]
    )
    .pipe(umd({
      dependencies: function() {
        return [
          {
            name: 'react-router',
            amd: 'react-router',
            cjs: 'react-router',
            global: 'ReactRouter',
            param: 'ReactRouter'
          }
        ]
      }
    }))
    .pipe(gulp.dest('build/umd'))
})

gulp.task('umd:all', [ 'clean:build:umd' ], function (cb) {
  runSequence(
    [ 'umd:Table', 'umd:TableHead', 'umd:TableHeadRow', 'umd:TableHeadTh', 'umd:ReactRouterPaginator' ],
    cb
  )
})

gulp.task('dist:browser:table:concat', [ 'umd:all', 'clean:dist:browser' ], function () {
  return gulp.src(
      [
        'build/umd/TableHeadTh.js',
        'build/umd/TableHeadRow.js',
        'build/umd/TableHead.js',
        'build/umd/Table.js',
        'build/umd/ReactRouterPaginator.js'
      ]
    )
    .pipe(concat('ReactTable.js'))
    .pipe(gulp.dest('dist/browser'))
})

gulp.task('dist:browser:table:uglify', [ 'dist:browser:table:concat' ], function() {
  return gulp.src(
      [
        'dist/browser/ReactTable.js'
      ]
    )
    .pipe(rename('ReactTable.min.js'))
    .pipe(uglifyJs())
    .pipe(gulp.dest('dist/browser'))
})

gulp.task('dist:umd:copy', [ 'umd:all', 'clean:dist:umd' ], function () {
  return gulp.src('build/umd/*')
  .pipe(gulp.dest('dist/umd'))
})

gulp.task('dist:index:copy', [ 'umd:all' ], function () {
  return gulp.src(
    [
      'build/babel/index.js'
    ]
  )
  .pipe(gulp.dest('dist'))
})

gulp.task('dist:less', [ 'clean:dist:css' ], function () {
  return gulp.src(
    [
      'less/react-table.less'
    ]
  )
  .pipe(less({
    paths: [ __dirname + '/node_modules' ]
  }))
  .pipe(gulp.dest('dist/css'))
})

gulp.task('dist:css:uglify', [ 'dist:less' ], function () {
  return gulp.src(
      [
        'dist/css/react-table.css'
      ]
    )
    .pipe(rename('react-table.min.css'))
    .pipe(uglifyCss())
    .pipe(gulp.dest('dist/css'))
})

gulp.task('clean:build:umd', function () {
  return del([
    'build/umd'
  ])
})

gulp.task('clean:build:babel', function () {
  return del([
    'build/babel'
  ])
})

gulp.task('clean:dist:css', function () {
  return del([
    'dist/css'
  ])
})

gulp.task('clean:dist:umd', function () {
  return del([
    'dist/umd'
  ])
})

gulp.task('clean:dist:browser', function () {
  return del([
    'dist/browser'
  ])
})

gulp.task('default', [ 'dist:browser:table:uglify', 'dist:umd:copy', 'dist:index:copy', 'dist:css:uglify' ])
