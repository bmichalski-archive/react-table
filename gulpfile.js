const gulp = require('gulp')
const plumber = require('gulp-plumber')
const babel = require('gulp-babel')
const debug = require('gulp-debug')
const umd = require('gulp-umd')
const concat = require('gulp-concat')
const uglifyJs = require('gulp-uglify')
const rename = require('gulp-rename')
const less = require('gulp-less')
const uglifyCss = require('gulp-uglifycss')

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

gulp.task('umd:TableHead', [ 'babel' ], function() {
  return gulp.src(
      [
        'build/Component/TableHead.js'
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
        'build/Component/TableHeadRow.js'
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
        'build/Component/TableHeadTh.js'
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
        'build/Common.js',
        'build/Component/Paginator.js',
        'build/Component/TableRow.js',
        'build/Component/MainTable.js',
        'build/Component/Table.js'
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
        'build/ReactRouterPaginator.js'
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

gulp.task('umd:all', [ 'umd:Table', 'umd:TableHead', 'umd:TableHeadRow', 'umd:TableHeadTh', 'umd:ReactRouterPaginator' ])

gulp.task('dist:browser:table:concat', [ 'umd:all' ], function () {
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

gulp.task('dist:umd:copy', [ 'umd:all' ], function () {
  return gulp.src(
    [
      'build/umd/TableHeadTh.js',
      'build/umd/TableHeadRow.js',
      'build/umd/TableHead.js',
      'build/umd/Table.js',
      'build/umd/ReactRouterPaginator.js'
    ]
  )
  .pipe(gulp.dest('dist/umd'))
})

gulp.task('dist:index:copy', [ 'umd:all' ], function () {
  return gulp.src(
    [
      'build/index.js'
    ]
  )
  .pipe(gulp.dest('dist'))
})

gulp.task('dist:less', function () {
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

gulp.task('default', [ 'dist:browser:table:uglify', 'dist:umd:copy', 'dist:index:copy', 'dist:css:uglify' ])
