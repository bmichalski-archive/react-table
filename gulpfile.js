const gulp = require('gulp')
const babel = require('gulp-babel')
const debug = require('gulp-debug')
const concat = require('gulp-concat')
const plumber = require('gulp-plumber')
const rename = require('gulp-rename')
const less = require('gulp-less')
const uglifyCss = require('gulp-uglifycss')
const del = require('del')
const webpack = require('webpack-stream')
const webpackOptimize = require('webpack').optimize
const WebpackDefinePlugin = require('webpack').DefinePlugin
const expect = require('gulp-expect-file')

const babelPresets = [ 'react', 'es2015', 'stage-0' ]
const babelQuery = {
  presets: babelPresets
}

const webpackVendors = [
  'babel-polyfill',
  'bluebird',
  'immutable',
  'lodash',
  'qs',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'redux',
  'redux-saga',
  'redux-thunk'
]

function gulpInit(files) {
  return gulp
    .src(files)
    .pipe(debug({}))
    .pipe(expect(files))
}

//JS
gulp.task('dist:js:clean', function () {
  return del([
    'dist/js'
  ])
})

gulp.task('dist:js:babel', [ 'dist:js:clean' ]  , function () {
  return gulpInit('src/**/*.js')
    .pipe(debug({}))
    .pipe(babel(babelQuery))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('dist:js', [ 'dist:js:babel' ])
//End JS

//CSS

gulp.task('dist:less:clean:css', function () {
  return del([
    'dist/css'
  ])
})

gulp.task('dist:css:less', function () {
  return gulpInit('less/react-table.less')
  .pipe(less({
    paths: [ __dirname + '/node_modules' ]
  }))
  .pipe(gulp.dest('dist/css'))
})

gulp.task('dist:css:uglify', [ 'dist:css:less' ], function () {
  return gulpInit('dist/css/react-table.css')
    .pipe(rename('react-table.min.css'))
    .pipe(uglifyCss())
    .pipe(gulp.dest('dist/css'))
})

gulp.task('dist:css:do', [ 'dist:css:uglify', 'dist:css:less', 'dist:less:clean:css' ])

gulp.task('dist:css', [ 'dist:css:do', 'dist:less:clean:css' ])

//End CSS

//Example

function exampleBuildWebpack(opts) {
  if (undefined === opts) {
    opts = {}
  }

  const defaultPlugins = [
    new webpackOptimize.CommonsChunkPlugin(
      {
        name: 'vendor',
        filename: 'vendor.js',
        minChunks: Infinity
      }
    )
  ]

  const optsPlugins = opts.plugins

  delete opts.plugins

  const webpackOpts = Object.assign(
    {},
    {
      entry: {
        vendor: webpackVendors,
        example: './example/src/example.js',
        'example-error-retrieving-data': './example/src/example-error-retrieving-data.js',
        'example-slow-loading': './example/src/example-slow-loading.js'
      },
      module: {
        loaders: [
          {
            test: /\.js|jsx$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: babelQuery
          }
        ]
      },
      output: { filename: '[name].js' }
    },
    opts
  )

  if (undefined !== optsPlugins) {
    webpackOpts.plugins = defaultPlugins.concat(optsPlugins)
  } else {
    webpackOpts.plugins = defaultPlugins
  }

  return gulpInit([])
    .pipe(plumber())
    .pipe(webpack(webpackOpts))
    .pipe(gulp.dest('example'))
}

const devtool = 'source-map'

gulp.task('example:build:webpack', function () {
  return exampleBuildWebpack({ devtool: devtool })
})

gulp.task('example:build:webpack:prod', function () {
  return exampleBuildWebpack({
    plugins: [
      new WebpackDefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpackOptimize.UglifyJsPlugin()
    ]
  })
})

gulp.task('example:build:webpack:watch', function () {
  return exampleBuildWebpack({ watch: true, devtool: devtool })
})

//End example

gulp.task('default', [ 'dist:js', 'dist:css', 'example:build:webpack:prod' ])
