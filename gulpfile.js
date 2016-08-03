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

gulp.task('umdTableHeadRow', [ 'babel' ], function() {
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

gulp.task('umdTableHeadTh', [ 'babel' ], function() {
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

gulp.task('umdTable', [ 'babel' ], function() {
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

gulp.task('umdReactRouterPaginator', [ 'babel' ], function() {
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

gulp.task('umdAll', [ 'umdTable', 'umdTableHead', 'umdTableHeadRow', 'umdTableHeadTh', 'umdReactRouterPaginator' ])

gulp.task('distBrowserConcatTable', [ 'umdAll' ], function () {
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

gulp.task('distBrowserUglifyTable', [ 'distBrowserConcatTable' ], function() {
  return gulp.src(
      [
        'dist/browser/ReactTable.js'
      ]
    )
    .pipe(rename('ReactTable.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/browser'))
})

gulp.task('distCopyUmd', [ 'umdAll' ], function () {
  return gulp.src(
    [
      'build/umd/TableHeadTh.js',
      'build/umd/TableHeadRow.js',
      'build/umd/TableHead.js',
      'build/umd/Table.js',
      'build/umd/ReactRouterPaginator.js'
    ]
  ).pipe(gulp.dest('dist/umd'))
})

gulp.task('distCopyIndex', [ 'umdAll' ], function () {
  return gulp.src(
    [
      'build/index.js',
    ]
  ).pipe(gulp.dest('dist'))
})

gulp.task('default', [ 'distBrowserUglifyTable', 'distCopyUmd', 'distCopyIndex' ])
