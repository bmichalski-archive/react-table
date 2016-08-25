webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _commonExample = __webpack_require__(36);
	
	var _commonExample2 = _interopRequireDefault(_commonExample);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _commonExample2.default)();

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(37);
	
	var _reactRouter = __webpack_require__(177);
	
	var _DemoTableWrapper = __webpack_require__(240);
	
	var _DemoTableWrapper2 = _interopRequireDefault(_DemoTableWrapper);
	
	var _bluebird = __webpack_require__(371);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_bluebird2.default.config({
	  warnings: true,
	  longStackTraces: true,
	  cancellation: true
	});
	
	exports.default = function (sampleResult) {
	  var loadingDelay = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];
	
	  var Component = function Component(props) {
	    return _react2.default.createElement(_DemoTableWrapper2.default, _extends({
	      sampleResult: sampleResult
	    }, props, {
	      loadingDelay: loadingDelay }));
	  };
	
	  (0, _reactDom.render)(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: Component },
	      _react2.default.createElement(_reactRouter.Route, { path: '*', component: Component })
	    )
	  ), document.getElementById('main-container'));
	
	  document.getElementById('row-clicked').innerHTML = 'Row clicked:';
	};

/***/ },
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(241);
	
	var _bluebird = __webpack_require__(371);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _reactRouter = __webpack_require__(177);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DemoTableWrapper = function DemoTableWrapper(props) {
	  var opts = {
	    sort: {
	      sortableColumns: ['id', 'firstColumn']
	    },
	    table: {
	      className: 'table table-bordered',
	      head: {
	        rows: [{
	          cells: [{
	            name: 'id',
	            type: 'HEADING',
	            content: 'Id'
	          }, {
	            name: 'firstColumn',
	            type: 'HEADING',
	            content: 'First column'
	          }, {
	            name: 'secondColumn',
	            type: 'HEADING',
	            content: 'Second column'
	          }]
	        }]
	      }
	    },
	    parseData: {
	      updateBodys: function updateBodys(data) {
	        var rows = [];
	
	        data.result.forEach(function (resultRow) {
	          var row = {
	            cells: []
	          };
	
	          resultRow.forEach(function (resultCell) {
	            row.cells.push({
	              props: {
	                className: 'clickable',
	                onClick: function onClick(event) {
	                  event.preventDefault();
	
	                  var str = JSON.stringify(row);
	
	                  document.getElementById('row-clicked').innerHTML = 'Row clicked: ' + str;
	                }
	              },
	              content: resultCell.content
	            });
	          });
	
	          rows.push(row);
	        });
	
	        return [{
	          rows: rows
	        }];
	      }
	    },
	    asyncData: {
	      fetchData: function fetchData(opts) {
	        var sampleResult = props.sampleResult;
	        var loadingDelay = props.loadingDelay;
	
	        if (opts.page === undefined) {
	          opts.page = 1;
	        }
	
	        if (opts.pageSize === undefined) {
	          opts.pageSize = 10;
	        }
	
	        if (opts.q === undefined) {
	          opts.q = '';
	        }
	
	        var page = opts.page;
	        var pageSize = opts.pageSize;
	        var q = opts.q;
	        var sort = opts.sort;
	
	
	        var from = (page - 1) * pageSize;
	        var end = from + pageSize;
	
	        return new _bluebird2.default(function (resolve, reject, onCancel) {
	          var timeoutHandle = void 0;
	
	          onCancel(function () {
	            clearTimeout(timeoutHandle);
	
	            console.log('getData: canceled');
	          });
	
	          timeoutHandle = setTimeout(function () {
	            console.log('getData: resolving');
	
	            try {
	              var filteredResults = void 0;
	
	              if (undefined === q) {
	                filteredResults = [].concat(sampleResult);
	              } else {
	                filteredResults = [].concat(sampleResult).filter(function (row) {
	
	                  var include = false;
	
	                  row.forEach(function (cell) {
	                    if (0 === ('' + cell.content).toLowerCase().indexOf(q)) {
	                      include = true;
	                    }
	                  });
	
	                  return include;
	                });
	              }
	
	              if (undefined !== sort) {
	                (function () {
	                  var coef = sort.order === 'asc' ? 1 : -1;
	
	                  if ('id' === sort.sort) {
	                    filteredResults.sort(function (a, b) {
	                      return (a[0].content - b[0].content) * coef;
	                    });
	                  } else if ('firstColumn' === sort.sort) {
	                    filteredResults.sort(function (a, b) {
	                      return ('' + a[1].content).localeCompare('' + b[1].content) * coef;
	                    });
	                  } else {
	                    throw new Error('Unexpected sort "' + sort.sort + '"');
	                  }
	                })();
	              }
	
	              var result = filteredResults.slice(from, end);
	
	              var resolveData = {
	                result: result,
	                info: {
	                  total: result.length,
	                  filteredTotal: filteredResults.length
	                }
	              };
	
	              resolve(resolveData);
	            } catch (err) {
	              reject(err);
	            }
	          }, loadingDelay);
	        });
	      }
	    }
	  };
	
	  opts.routing = {
	    location: props.location,
	    router: props.router
	  };
	
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'style',
	      { contentStyleType: 'text/css' },
	      'table > tbody > tr > td.clickable {cursor: pointer;}'
	    ),
	    _react2.default.createElement(_index.Table, {
	      opts: opts })
	  );
	};
	
	DemoTableWrapper.propTypes = {
	  sampleResult: _react2.default.PropTypes.array,
	  loadingDelay: _react2.default.PropTypes.number.isRequired
	};
	
	DemoTableWrapper.defaultProps = {
	  loadingDelay: 200
	};
	
	exports.default = (0, _reactRouter.withRouter)(DemoTableWrapper);

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Table = undefined;
	
	var _TableWithStore = __webpack_require__(242);
	
	var _TableWithStore2 = _interopRequireDefault(_TableWithStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Table = _TableWithStore2.default;

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ModuleLoader = __webpack_require__(243);
	
	var _ModuleLoader2 = _interopRequireDefault(_ModuleLoader);
	
	var _CommonModule = __webpack_require__(275);
	
	var _CommonModule2 = _interopRequireDefault(_CommonModule);
	
	var _TableWrapperModule = __webpack_require__(278);
	
	var _TableWrapperModule2 = _interopRequireDefault(_TableWrapperModule);
	
	var _TableModule = __webpack_require__(292);
	
	var _TableModule2 = _interopRequireDefault(_TableModule);
	
	var _DataModule = __webpack_require__(310);
	
	var _DataModule2 = _interopRequireDefault(_DataModule);
	
	var _AsyncDataModule = __webpack_require__(314);
	
	var _AsyncDataModule2 = _interopRequireDefault(_AsyncDataModule);
	
	var _ParseDataModule = __webpack_require__(317);
	
	var _ParseDataModule2 = _interopRequireDefault(_ParseDataModule);
	
	var _BeforeTableModule = __webpack_require__(318);
	
	var _BeforeTableModule2 = _interopRequireDefault(_BeforeTableModule);
	
	var _SortModule = __webpack_require__(324);
	
	var _SortModule2 = _interopRequireDefault(_SortModule);
	
	var _RoutingModule = __webpack_require__(331);
	
	var _RoutingModule2 = _interopRequireDefault(_RoutingModule);
	
	var _FilterModule = __webpack_require__(334);
	
	var _FilterModule2 = _interopRequireDefault(_FilterModule);
	
	var _FilterBeforeTableModule = __webpack_require__(339);
	
	var _FilterBeforeTableModule2 = _interopRequireDefault(_FilterBeforeTableModule);
	
	var _FilterAsyncDataModule = __webpack_require__(342);
	
	var _FilterAsyncDataModule2 = _interopRequireDefault(_FilterAsyncDataModule);
	
	var _FilterAsyncDataRoutingModule = __webpack_require__(343);
	
	var _FilterAsyncDataRoutingModule2 = _interopRequireDefault(_FilterAsyncDataRoutingModule);
	
	var _GoToPageModule = __webpack_require__(344);
	
	var _GoToPageModule2 = _interopRequireDefault(_GoToPageModule);
	
	var _GoToPageBeforeTableModule = __webpack_require__(348);
	
	var _GoToPageBeforeTableModule2 = _interopRequireDefault(_GoToPageBeforeTableModule);
	
	var _GoToPageAsyncDataModule = __webpack_require__(351);
	
	var _GoToPageAsyncDataModule2 = _interopRequireDefault(_GoToPageAsyncDataModule);
	
	var _GoToPageAsyncDataRoutingModule = __webpack_require__(352);
	
	var _GoToPageAsyncDataRoutingModule2 = _interopRequireDefault(_GoToPageAsyncDataRoutingModule);
	
	var _PageSizeModule = __webpack_require__(353);
	
	var _PageSizeModule2 = _interopRequireDefault(_PageSizeModule);
	
	var _PageSizeBeforeTableModule = __webpack_require__(357);
	
	var _PageSizeBeforeTableModule2 = _interopRequireDefault(_PageSizeBeforeTableModule);
	
	var _PageSizeAsyncDataModule = __webpack_require__(360);
	
	var _PageSizeAsyncDataModule2 = _interopRequireDefault(_PageSizeAsyncDataModule);
	
	var _PageSizeAsyncDataRoutingModule = __webpack_require__(361);
	
	var _PageSizeAsyncDataRoutingModule2 = _interopRequireDefault(_PageSizeAsyncDataRoutingModule);
	
	var _PaginatorModule = __webpack_require__(362);
	
	var _PaginatorModule2 = _interopRequireDefault(_PaginatorModule);
	
	var _PaginatorBeforeTableModule = __webpack_require__(366);
	
	var _PaginatorBeforeTableModule2 = _interopRequireDefault(_PaginatorBeforeTableModule);
	
	var _FilterPageModule = __webpack_require__(369);
	
	var _FilterPageModule2 = _interopRequireDefault(_FilterPageModule);
	
	var _PageSizePageModule = __webpack_require__(370);
	
	var _PageSizePageModule2 = _interopRequireDefault(_PageSizePageModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TableWithStore = function (_Component) {
	  _inherits(TableWithStore, _Component);
	
	  function TableWithStore() {
	    _classCallCheck(this, TableWithStore);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableWithStore).apply(this, arguments));
	  }
	
	  _createClass(TableWithStore, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var props = this.props;
	
	      var store = (0, _ModuleLoader2.default)(props.opts, _CommonModule2.default, _TableWrapperModule2.default, _TableModule2.default, _DataModule2.default, _AsyncDataModule2.default, _ParseDataModule2.default, _BeforeTableModule2.default, _RoutingModule2.default, _SortModule2.default, _FilterModule2.default, _FilterBeforeTableModule2.default, _FilterAsyncDataModule2.default, _FilterAsyncDataRoutingModule2.default, _GoToPageModule2.default, _GoToPageBeforeTableModule2.default, _GoToPageAsyncDataModule2.default, _GoToPageAsyncDataRoutingModule2.default, _PageSizeModule2.default, _PageSizeBeforeTableModule2.default, _PageSizeAsyncDataModule2.default, _PageSizeAsyncDataRoutingModule2.default, _PaginatorModule2.default, _PaginatorBeforeTableModule2.default, _FilterPageModule2.default, _PageSizePageModule2.default);
	
	      this._store = store;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var store = this._store;
	
	      var TableWrapper = store.getState().get('common').get('components').get('tableWrapper').get('TableWrapper');
	
	      return _react2.default.createElement(TableWrapper, { store: store });
	    }
	  }]);
	
	  return TableWithStore;
	}(_react.Component);
	
	exports.default = TableWithStore;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _reduxImmutable = __webpack_require__(244);
	
	var _redux = __webpack_require__(251);
	
	var _reduxThunk = __webpack_require__(265);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _assert = __webpack_require__(266);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _ActionFilter = __webpack_require__(270);
	
	var _ActionFilter2 = _interopRequireDefault(_ActionFilter);
	
	var _ActionListener = __webpack_require__(271);
	
	var _ActionListener2 = _interopRequireDefault(_ActionListener);
	
	var _lodash = __webpack_require__(272);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _ActionType = __webpack_require__(274);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (opts) {
	  for (var _len = arguments.length, modules = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    modules[_key - 1] = arguments[_key];
	  }
	
	  var reducers = {};
	  var components = {};
	  var actionFilterCallbacks = {};
	  var preActionHandlingCallbacks = {};
	  var postActionHandlingCallbacks = {};
	  var bootFunctions = [];
	
	  modules.forEach(function (module) {
	    var moduleDefinition = module(opts[module.moduleName]);
	    var moduleName = module.moduleName;
	
	    _assert2.default.notStrictEqual(undefined, moduleName, 'Missing module name.');
	    _assert2.default.notStrictEqual(null, moduleName, 'Missing module name.');
	    _assert2.default.notStrictEqual('', moduleName, 'Missing module name.');
	
	    if (undefined === moduleDefinition.reducer) {
	      reducers[moduleName] = function () {
	        var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        return state;
	      };
	    } else {
	      reducers[moduleName] = moduleDefinition.reducer;
	    }
	
	    if (undefined !== moduleDefinition.components) {
	      components[moduleName] = moduleDefinition.components;
	    }
	
	    if (undefined !== moduleDefinition.boot) {
	      bootFunctions.push(moduleDefinition.boot);
	    }
	
	    if (undefined !== moduleDefinition.filters) {
	      _lodash2.default.forEach(moduleDefinition.filters(), function (filter, key) {
	        if (undefined === actionFilterCallbacks[key]) {
	          actionFilterCallbacks[key] = [];
	        }
	
	        actionFilterCallbacks[key].push(filter);
	      });
	    }
	
	    if (undefined !== moduleDefinition.preListeners) {
	      _lodash2.default.forEach(moduleDefinition.preListeners(), function (listener, key) {
	        if (undefined === preActionHandlingCallbacks[key]) {
	          preActionHandlingCallbacks[key] = [];
	        }
	
	        preActionHandlingCallbacks[key].push(listener);
	      });
	    }
	
	    if (undefined !== moduleDefinition.listeners) {
	      _lodash2.default.forEach(moduleDefinition.listeners(), function (listener, key) {
	        if (undefined === postActionHandlingCallbacks[key]) {
	          postActionHandlingCallbacks[key] = [];
	        }
	
	        postActionHandlingCallbacks[key].push(listener);
	      });
	    }
	  });
	
	  var actionFilterObj = (0, _ActionFilter2.default)();
	
	  var OPTS_INIT = 'OPTS_INIT';
	
	  var optsReducer = function optsReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? _immutable2.default.fromJS({}) : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	      case OPTS_INIT:
	        return state.merge(action.opts);
	      default:
	        return state;
	    }
	  };
	
	  var store = (0, _redux.createStore)((0, _reduxImmutable.combineReducers)(_extends({}, reducers, {
	    opts: optsReducer
	  })), (0, _redux.compose)((0, _redux.applyMiddleware)(actionFilterObj.actionFilter.call(actionFilterObj, actionFilterCallbacks), (0, _ActionListener2.default)(preActionHandlingCallbacks, postActionHandlingCallbacks), _reduxThunk2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	    return f;
	  }));
	
	  store.dispatch({
	    type: OPTS_INIT,
	    opts: opts
	  });
	
	  store.dispatch({
	    type: _ActionType2.default.COMMON_SET_COMPONENTS,
	    components: components
	  });
	
	  actionFilterObj.store = store;
	
	  bootFunctions.forEach(function (bootFunction) {
	    bootFunction(store.dispatch, store.getState);
	  });
	
	  //Test
	
	  //End tests
	
	  return store;
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.combineReducers = undefined;
	
	var _combineReducers2 = __webpack_require__(245);
	
	var _combineReducers3 = _interopRequireDefault(_combineReducers2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.combineReducers = _combineReducers3.default;

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _utilities = __webpack_require__(247);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (reducers) {
	    function _ref(_id) {
	        if (!(typeof _id === 'function')) {
	            throw new TypeError('Function return value violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(_id));
	        }
	
	        return _id;
	    }
	
	    if (!(reducers instanceof Object)) {
	        throw new TypeError('Value of argument "reducers" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(reducers));
	    }
	
	    var reducerKeys = Object.keys(reducers);
	
	    // eslint-disable-next-line space-infix-ops
	    return _ref(function () {
	        var inputState = arguments.length <= 0 || arguments[0] === undefined ? _immutable2.default.Map() : arguments[0];
	        var action = arguments[1];
	
	        function _ref2(_id2) {
	            if (!(_id2 instanceof _immutable2.default.Map)) {
	                throw new TypeError('Function return value violates contract.\n\nExpected:\nImmutable.Map\n\nGot:\n' + _inspect(_id2));
	            }
	
	            return _id2;
	        }
	
	        if (!(inputState == null || inputState instanceof _immutable2.default.Map)) {
	            throw new TypeError('Value of argument "inputState" violates contract.\n\nExpected:\n?Immutable.Map\n\nGot:\n' + _inspect(inputState));
	        }
	
	        if (!(action instanceof Object)) {
	            throw new TypeError('Value of argument "action" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(action));
	        }
	
	        // eslint-disable-next-line no-process-env
	        if (process.env.NODE_ENV !== 'production') {
	            var warningMessage = (0, _utilities.getUnexpectedInvocationParameterMessage)(inputState, reducers, action);
	
	            if (warningMessage) {
	                // eslint-disable-next-line no-console
	                console.error(warningMessage);
	            }
	        }
	
	        return _ref2(inputState.withMutations(function (temporaryState) {
	            reducerKeys.forEach(function (reducerName) {
	                var reducer = reducers[reducerName];
	                var currentDomainState = temporaryState.get(reducerName);
	                var nextDomainState = reducer(currentDomainState, action);
	
	                (0, _utilities.validateNextState)(nextDomainState, reducerName, action);
	
	                temporaryState.set(reducerName, nextDomainState);
	            });
	        }));
	    });
	};
	
	function _inspect(input, depth) {
	    var maxDepth = 4;
	    var maxKeys = 15;
	
	    if (depth === undefined) {
	        depth = 0;
	    }
	
	    depth += 1;
	
	    if (input === null) {
	        return 'null';
	    } else if (input === undefined) {
	        return 'void';
	    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	    } else if (Array.isArray(input)) {
	        if (input.length > 0) {
	            var _ret = function () {
	                if (depth > maxDepth) return {
	                        v: '[...]'
	                    };
	
	                var first = _inspect(input[0], depth);
	
	                if (input.every(function (item) {
	                    return _inspect(item, depth) === first;
	                })) {
	                    return {
	                        v: first.trim() + '[]'
	                    };
	                } else {
	                    return {
	                        v: '[' + input.slice(0, maxKeys).map(function (item) {
	                            return _inspect(item, depth);
	                        }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	                    };
	                }
	            }();
	
	            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	        } else {
	            return 'Array';
	        }
	    } else {
	        var keys = Object.keys(input);
	
	        if (!keys.length) {
	            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	                return input.constructor.name;
	            } else {
	                return 'Object';
	            }
	        }
	
	        if (depth > maxDepth) return '{...}';
	        var indent = '  '.repeat(depth - 1);
	        var entries = keys.slice(0, maxKeys).map(function (key) {
	            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
	        }).join('\n  ' + indent);
	
	        if (keys.length >= maxKeys) {
	            entries += '\n  ' + indent + '...';
	        }
	
	        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	        } else {
	            return '{\n  ' + indent + entries + '\n' + indent + '}';
	        }
	    }
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 246 */,
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	'create index';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validateNextState = exports.getUnexpectedInvocationParameterMessage = exports.getStateName = undefined;
	
	var _getStateName2 = __webpack_require__(248);
	
	var _getStateName3 = _interopRequireDefault(_getStateName2);
	
	var _getUnexpectedInvocationParameterMessage2 = __webpack_require__(249);
	
	var _getUnexpectedInvocationParameterMessage3 = _interopRequireDefault(_getUnexpectedInvocationParameterMessage2);
	
	var _validateNextState2 = __webpack_require__(250);
	
	var _validateNextState3 = _interopRequireDefault(_validateNextState2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.getStateName = _getStateName3.default;
	exports.getUnexpectedInvocationParameterMessage = _getUnexpectedInvocationParameterMessage3.default;
	exports.validateNextState = _validateNextState3.default;

/***/ },
/* 248 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = function (action) {
	    function _ref(_id) {
	        if (!(typeof _id === 'string')) {
	            throw new TypeError('Function return value violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_id));
	        }
	
	        return _id;
	    }
	
	    if (!(action instanceof Object)) {
	        throw new TypeError('Value of argument "action" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(action));
	    }
	
	    return _ref(action && action.type === '@@redux/INIT' ? 'initialState argument passed to createStore' : 'previous state received by the reducer');
	};
	
	function _inspect(input, depth) {
	    var maxDepth = 4;
	    var maxKeys = 15;
	
	    if (depth === undefined) {
	        depth = 0;
	    }
	
	    depth += 1;
	
	    if (input === null) {
	        return 'null';
	    } else if (input === undefined) {
	        return 'void';
	    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	    } else if (Array.isArray(input)) {
	        if (input.length > 0) {
	            var _ret = function () {
	                if (depth > maxDepth) return {
	                        v: '[...]'
	                    };
	
	                var first = _inspect(input[0], depth);
	
	                if (input.every(function (item) {
	                    return _inspect(item, depth) === first;
	                })) {
	                    return {
	                        v: first.trim() + '[]'
	                    };
	                } else {
	                    return {
	                        v: '[' + input.slice(0, maxKeys).map(function (item) {
	                            return _inspect(item, depth);
	                        }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	                    };
	                }
	            }();
	
	            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	        } else {
	            return 'Array';
	        }
	    } else {
	        var keys = Object.keys(input);
	
	        if (!keys.length) {
	            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	                return input.constructor.name;
	            } else {
	                return 'Object';
	            }
	        }
	
	        if (depth > maxDepth) return '{...}';
	        var indent = '  '.repeat(depth - 1);
	        var entries = keys.slice(0, maxKeys).map(function (key) {
	            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
	        }).join('\n  ' + indent);
	
	        if (keys.length >= maxKeys) {
	            entries += '\n  ' + indent + '...';
	        }
	
	        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	        } else {
	            return '{\n  ' + indent + entries + '\n' + indent + '}';
	        }
	    }
	}
	
	module.exports = exports['default'];

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /* eslint-disable lodash3/prefer-lodash-method */
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _getStateName = __webpack_require__(248);
	
	var _getStateName2 = _interopRequireDefault(_getStateName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (state, reducers, action) {
	    if (!(state instanceof Object)) {
	        throw new TypeError('Value of argument "state" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(state));
	    }
	
	    if (!(reducers instanceof Object)) {
	        throw new TypeError('Value of argument "reducers" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(reducers));
	    }
	
	    if (!(action instanceof Object)) {
	        throw new TypeError('Value of argument "action" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(action));
	    }
	
	    var reducerNames = Object.keys(reducers);
	
	    if (!reducerNames.length) {
	        return 'Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.';
	    }
	
	    var stateName = (0, _getStateName2.default)(action);
	
	    if (!_immutable2.default.Iterable.isIterable(state)) {
	        return 'The ' + stateName + ' is of unexpected type. Expected argument to be an instance of Immutable.Iterable with the following properties: "' + reducerNames.join('", "') + '".';
	    }
	
	    var unexpectedStatePropertyNames = state.keySeq().toArray().filter(function (name) {
	        return !reducers.hasOwnProperty(name);
	    });
	
	    if (unexpectedStatePropertyNames.length > 0) {
	        return 'Unexpected ' + (unexpectedStatePropertyNames.length === 1 ? 'property' : 'properties') + ' "' + unexpectedStatePropertyNames.join('", "') + '" found in ' + stateName + '. Expected to find one of the known reducer property names instead: "' + reducerNames.join('", "') + '". Unexpected properties will be ignored.';
	    }
	
	    return null;
	};
	
	function _inspect(input, depth) {
	    var maxDepth = 4;
	    var maxKeys = 15;
	
	    if (depth === undefined) {
	        depth = 0;
	    }
	
	    depth += 1;
	
	    if (input === null) {
	        return 'null';
	    } else if (input === undefined) {
	        return 'void';
	    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	    } else if (Array.isArray(input)) {
	        if (input.length > 0) {
	            var _ret = function () {
	                if (depth > maxDepth) return {
	                        v: '[...]'
	                    };
	
	                var first = _inspect(input[0], depth);
	
	                if (input.every(function (item) {
	                    return _inspect(item, depth) === first;
	                })) {
	                    return {
	                        v: first.trim() + '[]'
	                    };
	                } else {
	                    return {
	                        v: '[' + input.slice(0, maxKeys).map(function (item) {
	                            return _inspect(item, depth);
	                        }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	                    };
	                }
	            }();
	
	            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	        } else {
	            return 'Array';
	        }
	    } else {
	        var keys = Object.keys(input);
	
	        if (!keys.length) {
	            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	                return input.constructor.name;
	            } else {
	                return 'Object';
	            }
	        }
	
	        if (depth > maxDepth) return '{...}';
	        var indent = '  '.repeat(depth - 1);
	        var entries = keys.slice(0, maxKeys).map(function (key) {
	            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
	        }).join('\n  ' + indent);
	
	        if (keys.length >= maxKeys) {
	            entries += '\n  ' + indent + '...';
	        }
	
	        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	        } else {
	            return '{\n  ' + indent + entries + '\n' + indent + '}';
	        }
	    }
	}
	
	module.exports = exports['default'];

/***/ },
/* 250 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = function (nextState, reducerName, action) {
	    function _ref(_id) {
	        if (!(_id == null)) {
	            throw new TypeError('Function return value violates contract.\n\nExpected:\nnull\n\nGot:\n' + _inspect(_id));
	        }
	
	        return _id;
	    }
	
	    if (!(typeof reducerName === 'string')) {
	        throw new TypeError('Value of argument "reducerName" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(reducerName));
	    }
	
	    if (!(action instanceof Object)) {
	        throw new TypeError('Value of argument "action" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(action));
	    }
	
	    // eslint-disable-next-line no-undefined
	    if (nextState === undefined) {
	        throw new Error('Reducer "' + reducerName + '" returned undefined when handling "' + action.type + '" action. To ignore an action, you must explicitly return the previous state.');
	    }
	
	    return _ref(null);
	};
	
	function _inspect(input, depth) {
	    var maxDepth = 4;
	    var maxKeys = 15;
	
	    if (depth === undefined) {
	        depth = 0;
	    }
	
	    depth += 1;
	
	    if (input === null) {
	        return 'null';
	    } else if (input === undefined) {
	        return 'void';
	    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	    } else if (Array.isArray(input)) {
	        if (input.length > 0) {
	            var _ret = function () {
	                if (depth > maxDepth) return {
	                        v: '[...]'
	                    };
	
	                var first = _inspect(input[0], depth);
	
	                if (input.every(function (item) {
	                    return _inspect(item, depth) === first;
	                })) {
	                    return {
	                        v: first.trim() + '[]'
	                    };
	                } else {
	                    return {
	                        v: '[' + input.slice(0, maxKeys).map(function (item) {
	                            return _inspect(item, depth);
	                        }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	                    };
	                }
	            }();
	
	            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	        } else {
	            return 'Array';
	        }
	    } else {
	        var keys = Object.keys(input);
	
	        if (!keys.length) {
	            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	                return input.constructor.name;
	            } else {
	                return 'Object';
	            }
	        }
	
	        if (depth > maxDepth) return '{...}';
	        var indent = '  '.repeat(depth - 1);
	        var entries = keys.slice(0, maxKeys).map(function (key) {
	            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
	        }).join('\n  ' + indent);
	
	        if (keys.length >= maxKeys) {
	            entries += '\n  ' + indent + '...';
	        }
	
	        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	        } else {
	            return '{\n  ' + indent + entries + '\n' + indent + '}';
	        }
	    }
	}
	
	module.exports = exports['default'];

/***/ },
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
	// original notice:
	
	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	function compare(a, b) {
	  if (a === b) {
	    return 0;
	  }
	
	  var x = a.length;
	  var y = b.length;
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }
	
	  if (x < y) {
	    return -1;
	  }
	  if (y < x) {
	    return 1;
	  }
	  return 0;
	}
	function isBuffer(b) {
	  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
	    return global.Buffer.isBuffer(b);
	  }
	  return !!(b != null && b._isBuffer);
	}
	
	// based on node assert, original notice:
	
	// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
	//
	// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
	//
	// Originally from narwhal.js (http://narwhaljs.org)
	// Copyright (c) 2009 Thomas Robinson <280north.com>
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the 'Software'), to
	// deal in the Software without restriction, including without limitation the
	// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	// sell copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var util = __webpack_require__(267);
	var hasOwn = Object.prototype.hasOwnProperty;
	var pSlice = Array.prototype.slice;
	var functionsHaveNames = (function () {
	  return function foo() {}.name === 'foo';
	}());
	function pToString (obj) {
	  return Object.prototype.toString.call(obj);
	}
	function isView(arrbuf) {
	  if (isBuffer(arrbuf)) {
	    return false;
	  }
	  if (typeof global.ArrayBuffer !== 'function') {
	    return false;
	  }
	  if (typeof ArrayBuffer.isView === 'function') {
	    return ArrayBuffer.isView(arrbuf);
	  }
	  if (!arrbuf) {
	    return false;
	  }
	  if (arrbuf instanceof DataView) {
	    return true;
	  }
	  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
	    return true;
	  }
	  return false;
	}
	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.
	
	var assert = module.exports = ok;
	
	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })
	
	var regex = /\s*function\s+([^\(\s]*)\s*/;
	// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
	function getName(func) {
	  if (!util.isFunction(func)) {
	    return;
	  }
	  if (functionsHaveNames) {
	    return func.name;
	  }
	  var str = func.toString();
	  var match = str.match(regex);
	  return match && match[1];
	}
	assert.AssertionError = function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  if (options.message) {
	    this.message = options.message;
	    this.generatedMessage = false;
	  } else {
	    this.message = getMessage(this);
	    this.generatedMessage = true;
	  }
	  var stackStartFunction = options.stackStartFunction || fail;
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  } else {
	    // non v8 browsers so we can have a stacktrace
	    var err = new Error();
	    if (err.stack) {
	      var out = err.stack;
	
	      // try to strip useless frames
	      var fn_name = getName(stackStartFunction);
	      var idx = out.indexOf('\n' + fn_name);
	      if (idx >= 0) {
	        // once we have located the function frame
	        // we need to strip out everything before it (and its line)
	        var next_line = out.indexOf('\n', idx + 1);
	        out = out.substring(next_line + 1);
	      }
	
	      this.stack = out;
	    }
	  }
	};
	
	// assert.AssertionError instanceof Error
	util.inherits(assert.AssertionError, Error);
	
	function truncate(s, n) {
	  if (typeof s === 'string') {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}
	function inspect(something) {
	  if (functionsHaveNames || !util.isFunction(something)) {
	    return util.inspect(something);
	  }
	  var rawname = getName(something);
	  var name = rawname ? ': ' + rawname : '';
	  return '[Function' +  name + ']';
	}
	function getMessage(self) {
	  return truncate(inspect(self.actual), 128) + ' ' +
	         self.operator + ' ' +
	         truncate(inspect(self.expected), 128);
	}
	
	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.
	
	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.
	
	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new assert.AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}
	
	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;
	
	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.
	
	function ok(value, message) {
	  if (!value) fail(value, true, message, '==', assert.ok);
	}
	assert.ok = ok;
	
	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);
	
	assert.equal = function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
	};
	
	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);
	
	assert.notEqual = function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', assert.notEqual);
	  }
	};
	
	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);
	
	assert.deepEqual = function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
	  }
	};
	
	assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
	  }
	};
	
	function _deepEqual(actual, expected, strict, memos) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	  } else if (isBuffer(actual) && isBuffer(expected)) {
	    return compare(actual, expected) === 0;
	
	  // 7.2. If the expected value is a Date object, the actual value is
	  // equivalent if it is also a Date object that refers to the same time.
	  } else if (util.isDate(actual) && util.isDate(expected)) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3 If the expected value is a RegExp object, the actual value is
	  // equivalent if it is also a RegExp object with the same source and
	  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;
	
	  // 7.4. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if ((actual === null || typeof actual !== 'object') &&
	             (expected === null || typeof expected !== 'object')) {
	    return strict ? actual === expected : actual == expected;
	
	  // If both values are instances of typed arrays, wrap their underlying
	  // ArrayBuffers in a Buffer each to increase performance
	  // This optimization requires the arrays to have the same type as checked by
	  // Object.prototype.toString (aka pToString). Never perform binary
	  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
	  // bit patterns are not identical.
	  } else if (isView(actual) && isView(expected) &&
	             pToString(actual) === pToString(expected) &&
	             !(actual instanceof Float32Array ||
	               actual instanceof Float64Array)) {
	    return compare(new Uint8Array(actual.buffer),
	                   new Uint8Array(expected.buffer)) === 0;
	
	  // 7.5 For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else if (isBuffer(actual) !== isBuffer(expected)) {
	    return false;
	  } else {
	    memos = memos || {actual: [], expected: []};
	
	    var actualIndex = memos.actual.indexOf(actual);
	    if (actualIndex !== -1) {
	      if (actualIndex === memos.expected.indexOf(expected)) {
	        return true;
	      }
	    }
	
	    memos.actual.push(actual);
	    memos.expected.push(expected);
	
	    return objEquiv(actual, expected, strict, memos);
	  }
	}
	
	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}
	
	function objEquiv(a, b, strict, actualVisitedObjects) {
	  if (a === null || a === undefined || b === null || b === undefined)
	    return false;
	  // if one is a primitive, the other must be same
	  if (util.isPrimitive(a) || util.isPrimitive(b))
	    return a === b;
	  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
	    return false;
	  var aIsArgs = isArguments(a);
	  var bIsArgs = isArguments(b);
	  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
	    return false;
	  if (aIsArgs) {
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b, strict);
	  }
	  var ka = objectKeys(a);
	  var kb = objectKeys(b);
	  var key, i;
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length !== kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] !== kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
	      return false;
	  }
	  return true;
	}
	
	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);
	
	assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
	  }
	};
	
	assert.notDeepStrictEqual = notDeepStrictEqual;
	function notDeepStrictEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
	  }
	}
	
	
	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);
	
	assert.strictEqual = function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', assert.strictEqual);
	  }
	};
	
	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
	
	assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', assert.notStrictEqual);
	  }
	};
	
	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }
	
	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  }
	
	  try {
	    if (actual instanceof expected) {
	      return true;
	    }
	  } catch (e) {
	    // Ignore.  The instanceof check doesn't work for arrow functions.
	  }
	
	  if (Error.isPrototypeOf(expected)) {
	    return false;
	  }
	
	  return expected.call({}, actual) === true;
	}
	
	function _tryBlock(block) {
	  var error;
	  try {
	    block();
	  } catch (e) {
	    error = e;
	  }
	  return error;
	}
	
	function _throws(shouldThrow, block, expected, message) {
	  var actual;
	
	  if (typeof block !== 'function') {
	    throw new TypeError('"block" argument must be a function');
	  }
	
	  if (typeof expected === 'string') {
	    message = expected;
	    expected = null;
	  }
	
	  actual = _tryBlock(block);
	
	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');
	
	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }
	
	  var userProvidedMessage = typeof message === 'string';
	  var isUnwantedException = !shouldThrow && util.isError(actual);
	  var isUnexpectedException = !shouldThrow && actual && !expected;
	
	  if ((isUnwantedException &&
	      userProvidedMessage &&
	      expectedException(actual, expected)) ||
	      isUnexpectedException) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }
	
	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}
	
	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);
	
	assert.throws = function(block, /*optional*/error, /*optional*/message) {
	  _throws(true, block, error, message);
	};
	
	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
	  _throws(false, block, error, message);
	};
	
	assert.ifError = function(err) { if (err) throw err; };
	
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(268);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(269);
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4)))

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 269 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assert = __webpack_require__(266);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  return {
	    actionFilter: function actionFilter(actionFiltersCallbacks) {
	      var _this = this;
	
	      return function (store) {
	        return function (next) {
	          return function (action) {
	            if (undefined === action) {
	              return;
	            }
	
	            var callbacks = actionFiltersCallbacks[action.type];
	
	            if (undefined !== callbacks) {
	              callbacks.forEach(function (cb) {
	                action = cb(action, _this.store.dispatch, _this.store.getState, _this.store);
	
	                _assert2.default.notStrictEqual(undefined, action);
	              });
	            }
	
	            return next(action);
	          };
	        };
	      };
	    }
	  };
	};

/***/ },
/* 271 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (preActionHandlingCallbacks, postActionHandlingCallbacks) {
	  return function (store) {
	    return function (next) {
	      return function (action) {
	        var preCb = preActionHandlingCallbacks[action.type];
	        var postCb = postActionHandlingCallbacks[action.type];
	
	        if (undefined !== preCb) {
	          preCb.forEach(function (cb) {
	            cb(action, store.dispatch, store.getState);
	          });
	        }
	
	        var result = next(action);
	
	        if (undefined !== postCb) {
	          postCb.forEach(function (cb) {
	            cb(action, store.dispatch, store.getState);
	          });
	        }
	
	        return result;
	      };
	    };
	  };
	};

/***/ },
/* 272 */,
/* 273 */,
/* 274 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var COMMON_SET_COMPONENTS = 'COMMON_SET_COMPONENTS';
	
	exports.default = {
	  COMMON_SET_COMPONENTS: COMMON_SET_COMPONENTS
	};

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Reducer = __webpack_require__(276);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CommonModule = function CommonModule() {
	  return {
	    reducer: _Reducer2.default
	  };
	};
	
	CommonModule.moduleName = 'common';
	
	exports.default = CommonModule;

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _ActionType = __webpack_require__(274);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _DefaultState = __webpack_require__(277);
	
	var _DefaultState2 = _interopRequireDefault(_DefaultState);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _DefaultState2.default : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActionType2.default.COMMON_SET_COMPONENTS:
	      return state.setIn(['components'], _immutable2.default.fromJS(action.components));
	    default:
	      return state;
	  }
	};

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _immutable2.default.fromJS({
	  components: {}
	});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ConnectedTableWrapper = __webpack_require__(279);
	
	var _ConnectedTableWrapper2 = _interopRequireDefault(_ConnectedTableWrapper);
	
	var _Reducer = __webpack_require__(290);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TableWrapperModule = function TableWrapperModule(opts) {
	  return {
	    reducer: _Reducer2.default,
	    components: {
	      TableWrapper: _ConnectedTableWrapper2.default
	    }
	  };
	};
	
	TableWrapperModule.moduleName = 'tableWrapper';
	
	exports.default = TableWrapperModule;

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(280);
	
	var _TableWrapper = __webpack_require__(289);
	
	var _TableWrapper2 = _interopRequireDefault(_TableWrapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  var common = state.get('common');
	  var tableWrapperState = state.get('tableWrapper').get('state');
	
	  // const beforeTableComponents = state.get('beforeTable').get('components').toJS()
	
	  return {
	    Table: common.get('components').get('table').toJS().Table,
	    BeforeTableLayout: common.get('components').get('beforeTable').toJS().BeforeTableLayout,
	    overrideTable: tableWrapperState.get('overrideTable'),
	    overrideTableWith: tableWrapperState.get('overrideTableWith')
	  };
	})(_TableWrapper2.default);

/***/ },
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  var Table = props.Table;
	  var BeforeTableLayout = props.BeforeTableLayout;
	
	  if (props.overrideTable) {
	    return _react2.default.createElement(
	      "div",
	      { className: "table-wrapper" },
	      props.overrideTableWith
	    );
	  } else {
	    return _react2.default.createElement(
	      "div",
	      { className: "table-wrapper" },
	      _react2.default.createElement(BeforeTableLayout, { store: props.store }),
	      _react2.default.createElement(Table, { store: props.store })
	    );
	  }
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _ActionType = __webpack_require__(291);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultState = _immutable2.default.fromJS({
	  state: {
	    overrideTable: false,
	    overrideTableWith: undefined
	  }
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActionType2.default.TABLE_WRAPPER_SET_OVERRIDE_TABLE_WITH:
	      return state.mergeIn(['state'], {
	        overrideTable: true,
	        overrideTableWith: action.overrideTableWith
	      });
	    case _ActionType2.default.TABLE_WRAPPER_UNSET_OVERRIDE_TABLE_WITH:
	      return state.mergeIn(['state'], {
	        overrideTable: false,
	        overrideTableWith: undefined
	      });
	    case _ActionType2.default.TABLE_WRAPPER_SET_BEFORE_TABLE_COMPONENTS:
	      return state.setIn(['state', 'beforeTableComponents'], _immutable2.default.fromJS(action.beforeTableComponents));
	    default:
	      return state;
	  }
	};

/***/ },
/* 291 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TABLE_WRAPPER_SET_OVERRIDE_TABLE_WITH = 'TABLE_WRAPPER_SET_OVERRIDE_TABLE_WITH';
	var TABLE_WRAPPER_UNSET_OVERRIDE_TABLE_WITH = 'TABLE_WRAPPER_UNSET_OVERRIDE_TABLE_WITH';
	var TABLE_WRAPPER_SET_BEFORE_TABLE_COMPONENTS = 'TABLE_WRAPPER_SET_BEFORE_TABLE_COMPONENTS';
	
	exports.default = {
	  TABLE_WRAPPER_SET_OVERRIDE_TABLE_WITH: TABLE_WRAPPER_SET_OVERRIDE_TABLE_WITH,
	  TABLE_WRAPPER_UNSET_OVERRIDE_TABLE_WITH: TABLE_WRAPPER_UNSET_OVERRIDE_TABLE_WITH,
	  TABLE_WRAPPER_SET_BEFORE_TABLE_COMPONENTS: TABLE_WRAPPER_SET_BEFORE_TABLE_COMPONENTS
	};

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Reducer = __webpack_require__(293);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	var _Components = __webpack_require__(297);
	
	var _Components2 = _interopRequireDefault(_Components);
	
	var _ActionType = __webpack_require__(296);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tableReplaceComputedViewModelHead = function tableReplaceComputedViewModelHead(dispatch, head) {
	  if (undefined !== head) {
	    dispatch({
	      type: _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD,
	      head: head
	    });
	  }
	};
	
	var tableReplaceComputedViewModelProps = function tableReplaceComputedViewModelProps(dispatch, className) {
	  dispatch({
	    type: _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS,
	    props: {
	      className: className
	    }
	  });
	};
	
	var TableModule = function TableModule(opts) {
	  var boot = function boot(dispatch) {
	    if (undefined !== opts) {
	      tableReplaceComputedViewModelHead(dispatch, opts.head);
	      tableReplaceComputedViewModelProps(dispatch, opts.className);
	    }
	  };
	
	  return {
	    reducer: _Reducer2.default,
	    components: _Components2.default,
	    boot: boot
	  };
	};
	
	TableModule.moduleName = 'table';
	
	exports.default = TableModule;

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reduxImmutable = __webpack_require__(244);
	
	var _DefaultState = __webpack_require__(294);
	
	var _DefaultState2 = _interopRequireDefault(_DefaultState);
	
	var _ComputeViewModelReducer = __webpack_require__(295);
	
	var _ComputeViewModelReducer2 = _interopRequireDefault(_ComputeViewModelReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _DefaultState2.default : arguments[0];
	  var action = arguments[1];
	
	  return (0, _reduxImmutable.combineReducers)({
	    computedViewModel: _ComputeViewModelReducer2.default,
	    state: function state(s) {
	      return s;
	    }
	  })(state, action);
	};

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _immutable2.default.fromJS({
	  state: {
	    isDataLoading: false,
	    hasDataBeenInitialized: false,
	    hasBeenErrorLoadingData: false
	  },
	  computedViewModel: {
	    props: {},
	    head: {
	      rows: []
	    },
	    bodys: []
	  }
	});

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(296);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (state, action) {
	  switch (action.type) {
	    case _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS:
	      return state.setIn(['props'], _immutable2.default.fromJS(action.props));
	    case _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD:
	      return state.setIn(['head'], _immutable2.default.fromJS(action.head));
	    case _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS:
	      return state.setIn(['bodys'], _immutable2.default.fromJS(action.bodys));
	    default:
	      return state;
	  }
	};

/***/ },
/* 296 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS = 'TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS';
	var TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD = 'TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD';
	var TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS = 'TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS';
	
	exports.default = {
	  TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS: TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS,
	  TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD: TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD,
	  TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS: TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS
	};

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Table = __webpack_require__(298);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _TableBody = __webpack_require__(299);
	
	var _TableBody2 = _interopRequireDefault(_TableBody);
	
	var _TableRow = __webpack_require__(300);
	
	var _TableRow2 = _interopRequireDefault(_TableRow);
	
	var _ConnectedTable = __webpack_require__(301);
	
	var _ConnectedTable2 = _interopRequireDefault(_ConnectedTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  Presentational: {
	    Table: _Table2.default,
	    TableBody: _TableBody2.default,
	    TableRow: _TableRow2.default
	  },
	  Connected: {
	    Table: _ConnectedTable2.default
	  },
	  Table: _ConnectedTable2.default
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(
	    'table',
	    props.props,
	    props.children
	  );
	};

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(
	    'tbody',
	    props.props,
	    props.children
	  );
	};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(
	    'tr',
	    props.props,
	    props.children
	  );
	};

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(280);
	
	var _ContainerTable = __webpack_require__(302);
	
	var _ContainerTable2 = _interopRequireDefault(_ContainerTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  var viewModel = state.get('table').get('computedViewModel');
	
	  return {
	    props: viewModel.get('props').toJS(),
	    head: viewModel.get('head').toJS(),
	    bodys: viewModel.get('bodys').toJS()
	  };
	})(_ContainerTable2.default);

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(298);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _ContainerTableHead = __webpack_require__(303);
	
	var _ContainerTableHead2 = _interopRequireDefault(_ContainerTableHead);
	
	var _ContainerTableBody = __webpack_require__(309);
	
	var _ContainerTableBody2 = _interopRequireDefault(_ContainerTableBody);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  var renderBodys = function renderBodys() {
	    return props.bodys.map(function (body, i) {
	      return _react2.default.createElement(_ContainerTableBody2.default, { key: i, rows: body.rows });
	    });
	  };
	
	  return _react2.default.createElement(
	    _Table2.default,
	    { props: props.props },
	    _react2.default.createElement(_ContainerTableHead2.default, { rows: props.head.rows }),
	    renderBodys()
	  );
	};

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TableHead = __webpack_require__(304);
	
	var _TableHead2 = _interopRequireDefault(_TableHead);
	
	var _ContainerTableRow = __webpack_require__(305);
	
	var _ContainerTableRow2 = _interopRequireDefault(_ContainerTableRow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  var renderRows = function renderRows() {
	    return props.rows.map(function (row, i) {
	      return _react2.default.createElement(_ContainerTableRow2.default, { key: i, cells: row.cells });
	    });
	  };
	
	  return _react2.default.createElement(
	    _TableHead2.default,
	    null,
	    renderRows()
	  );
	};

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(
	    'thead',
	    null,
	    props.children
	  );
	};

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TableRow = __webpack_require__(300);
	
	var _TableRow2 = _interopRequireDefault(_TableRow);
	
	var _ContainerTableCell = __webpack_require__(306);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  var getCellType = function getCellType(cell) {
	    return cell.type === 'HEADING' ? _ContainerTableCell.TableHeading : _ContainerTableCell.TableData;
	  };
	
	  var renderCells = function renderCells() {
	    return props.cells.map(function (cell, i) {
	      var CellType = getCellType(cell);
	
	      return _react2.default.createElement(CellType, { key: i, content: cell.content, props: cell.props });
	    });
	  };
	
	  return _react2.default.createElement(
	    _TableRow2.default,
	    null,
	    renderCells()
	  );
	};

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TableHeading = exports.TableData = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TableData = __webpack_require__(307);
	
	var _TableData2 = _interopRequireDefault(_TableData);
	
	var _TableHeading = __webpack_require__(308);
	
	var _TableHeading2 = _interopRequireDefault(_TableHeading);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var makeContainerTableCell = function makeContainerTableCell(ThOrTd) {
	  return function (props) {
	    return _react2.default.createElement(
	      ThOrTd,
	      { props: props.props },
	      props.content
	    );
	  };
	};
	
	var TableData = makeContainerTableCell(_TableData2.default);
	var TableHeading = makeContainerTableCell(_TableHeading2.default);
	
	exports.TableData = TableData;
	exports.TableHeading = TableHeading;

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(
	    'td',
	    props.props,
	    props.children
	  );
	};

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(
	    'th',
	    props.props,
	    props.children
	  );
	};

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TableBody = __webpack_require__(299);
	
	var _TableBody2 = _interopRequireDefault(_TableBody);
	
	var _ContainerTableRow = __webpack_require__(305);
	
	var _ContainerTableRow2 = _interopRequireDefault(_ContainerTableRow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  function renderRows() {
	    return props.rows.map(function (row, i) {
	      return _react2.default.createElement(_ContainerTableRow2.default, { key: i, cells: row.cells });
	    });
	  }
	
	  return _react2.default.createElement(
	    _TableBody2.default,
	    null,
	    renderRows()
	  );
	};

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Reducer = __webpack_require__(311);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	var _ActionType = __webpack_require__(312);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DataModule = function DataModule() {
	  var actions = {};
	
	  actions[_ActionType2.default.DATA_REPLACE_DATA] = _ActionType2.default.DATA_REPLACE_DATA;
	
	  return {
	    reducer: _Reducer2.default,
	    actions: actions
	  };
	};
	
	DataModule.moduleName = 'data';
	
	exports.default = DataModule;

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _ActionType = __webpack_require__(312);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _DefaultState = __webpack_require__(313);
	
	var _DefaultState2 = _interopRequireDefault(_DefaultState);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _DefaultState2.default : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActionType2.default.DATA_REPLACE_DATA:
	      return state.setIn(['data'], _immutable2.default.fromJS(action.data));
	    default:
	      return state;
	  }
	};

/***/ },
/* 312 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DATA_REPLACE_DATA = 'DATA_REPLACE_DATA';
	
	exports.default = {
	  DATA_REPLACE_DATA: DATA_REPLACE_DATA
	};

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _immutable2.default.fromJS({});

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(315);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionType3 = __webpack_require__(312);
	
	var _ActionType4 = _interopRequireDefault(_ActionType3);
	
	var _ActionType5 = __webpack_require__(291);
	
	var _ActionType6 = _interopRequireDefault(_ActionType5);
	
	var _Reducer = __webpack_require__(316);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var makeScheduleFetchData = function makeScheduleFetchData() {
	  var promise = undefined;
	  var tableWrapperOverrideUnset = false;
	
	  return function (getFetchDataPromise, dispatch, getState) {
	    if (undefined !== promise) {
	      promise.cancel();
	    }
	
	    var asyncDataState = getState().get('asyncData').get('state').get('options').toJS();
	
	    promise = getFetchDataPromise(asyncDataState);
	
	    promise.then(function (data) {
	      dispatch({
	        type: _ActionType4.default.DATA_REPLACE_DATA,
	        data: data
	      });
	    });
	
	    promise.then(function () {
	      if (tableWrapperOverrideUnset) {
	        return;
	      }
	
	      tableWrapperOverrideUnset = true;
	
	      dispatch({
	        type: _ActionType6.default.TABLE_WRAPPER_UNSET_OVERRIDE_TABLE_WITH
	      });
	    });
	  };
	};
	
	var setTableWrapperContentLoading = function setTableWrapperContentLoading(dispatch) {
	  dispatch({
	    type: _ActionType6.default.TABLE_WRAPPER_SET_OVERRIDE_TABLE_WITH,
	    overrideTableWith: 'Loading...'
	  });
	};
	
	var updateData = function updateData(dispatch) {
	  dispatch({
	    type: _ActionType2.default.ASYNC_DATA_UPDATE_DATA
	  });
	};
	
	var AsyncDataModule = function AsyncDataModule(opts) {
	  var scheduleFetchData = makeScheduleFetchData();
	
	  return {
	    reducer: _Reducer2.default,
	    boot: function boot(dispatch) {
	      setTableWrapperContentLoading(dispatch);
	      updateData(dispatch);
	    },
	    listeners: function listeners() {
	      return _defineProperty({}, _ActionType2.default.ASYNC_DATA_UPDATE_DATA, function (action, dispatch, getState) {
	        scheduleFetchData(opts.fetchData, dispatch, getState);
	      });
	    }
	  };
	};
	
	AsyncDataModule.moduleName = 'asyncData';
	
	exports.default = AsyncDataModule;

/***/ },
/* 315 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ASYNC_DATA_UPDATE_DATA = 'ASYNC_DATA_UPDATE_DATA';
	var ASYNC_UPDATE_OPTIONS = 'ASYNC_UPDATE_OPTIONS';
	
	exports.default = {
	  ASYNC_DATA_UPDATE_DATA: ASYNC_DATA_UPDATE_DATA,
	  ASYNC_UPDATE_OPTIONS: ASYNC_UPDATE_OPTIONS
	};

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _ActionType = __webpack_require__(315);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultState = _immutable2.default.fromJS({
	  state: {
	    options: {}
	  }
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActionType2.default.ASYNC_UPDATE_OPTIONS:
	      return state.mergeIn(['state', 'options'], action.options);
	    default:
	      return state;
	  }
	};

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(312);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionType3 = __webpack_require__(296);
	
	var _ActionType4 = _interopRequireDefault(_ActionType3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function tableReplaceComputedViewModelBodys(dispatch, bodys) {
	  dispatch({
	    type: _ActionType4.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS,
	    bodys: bodys
	  });
	}
	
	var ParseDataModule = function ParseDataModule(opts) {
	  return {
	    listeners: function listeners() {
	      return _defineProperty({}, _ActionType2.default.DATA_REPLACE_DATA, function (action, dispatch) {
	        tableReplaceComputedViewModelBodys(dispatch, opts.updateBodys(action.data));
	      });
	    }
	  };
	};
	
	ParseDataModule.moduleName = 'parseData';
	
	exports.default = ParseDataModule;

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Reducer = __webpack_require__(319);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	var _ConnectedBeforeTableLayout = __webpack_require__(322);
	
	var _ConnectedBeforeTableLayout2 = _interopRequireDefault(_ConnectedBeforeTableLayout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BeforeTableModule = function BeforeTableModule() {
	  return {
	    reducer: _Reducer2.default,
	    components: {
	      BeforeTableLayout: _ConnectedBeforeTableLayout2.default
	    }
	  };
	};
	
	BeforeTableModule.moduleName = 'beforeTable';
	
	exports.default = BeforeTableModule;

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DefaultState = __webpack_require__(320);
	
	var _DefaultState2 = _interopRequireDefault(_DefaultState);
	
	var _ActionType = __webpack_require__(321);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _DefaultState2.default : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActionType2.default.BEFORE_TABLE_REGISTER_COMPONENT:
	      var temp = state.setIn(['state', 'rows', action.row, 'slots', action.slot], action.component);
	
	      return temp;
	    default:
	      return state;
	  }
	};

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _immutable2.default.fromJS({
	  state: {
	    rows: [{
	      slots: []
	    }, {
	      slots: []
	    }]
	  }
	});

/***/ },
/* 321 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BEFORE_TABLE_REGISTER_COMPONENT = 'BEFORE_TABLE_REGISTER_COMPONENT';
	
	exports.default = {
	  BEFORE_TABLE_REGISTER_COMPONENT: BEFORE_TABLE_REGISTER_COMPONENT
	};

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(280);
	
	var _BeforeTableLayout = __webpack_require__(323);
	
	var _BeforeTableLayout2 = _interopRequireDefault(_BeforeTableLayout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  var rows = state.get('beforeTable').get('state').get('rows').toJS();
	
	  return {
	    rows: rows
	  };
	})(_BeforeTableLayout2.default);

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  var renderComponent = function renderComponent(Component) {
	    return _react2.default.createElement(Component, { store: props.store });
	  };
	
	  return _react2.default.createElement(
	    "div",
	    { className: "row before-table" },
	    _react2.default.createElement(
	      "div",
	      { className: "col-md-12" },
	      _react2.default.createElement(
	        "div",
	        { className: "row" },
	        _react2.default.createElement(
	          "div",
	          { className: "col-md-3" },
	          renderComponent(props.rows[0].slots[0])
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "col-md-2" },
	          renderComponent(props.rows[0].slots[1])
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "row" },
	        _react2.default.createElement(
	          "div",
	          { className: "col-md-2" },
	          renderComponent(props.rows[1].slots[0])
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "col-md-10" },
	          _react2.default.createElement(
	            "div",
	            { className: "pull-right" },
	            renderComponent(props.rows[1].slots[1])
	          )
	        )
	      )
	    )
	  );
	};

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Reducer = __webpack_require__(325);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	var _ActionType = __webpack_require__(327);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionType3 = __webpack_require__(296);
	
	var _ActionType4 = _interopRequireDefault(_ActionType3);
	
	var _ActionType5 = __webpack_require__(328);
	
	var _ActionType6 = _interopRequireDefault(_ActionType5);
	
	var _ConnectedSortIcon = __webpack_require__(329);
	
	var _ConnectedSortIcon2 = _interopRequireDefault(_ConnectedSortIcon);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(272);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _DefaultState = __webpack_require__(326);
	
	var _DefaultState2 = _interopRequireDefault(_DefaultState);
	
	var _ActionType7 = __webpack_require__(315);
	
	var _ActionType8 = _interopRequireDefault(_ActionType7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var SortModule = function SortModule(opts) {
	  function getSortableColumns() {
	    return opts.sortableColumns;
	  }
	
	  return {
	    defaultState: _DefaultState2.default,
	    reducer: _Reducer2.default,
	    listeners: function listeners() {
	      var _ref;
	
	      return _ref = {}, _defineProperty(_ref, _ActionType2.default.SORT_TOGGLE_SORT, function (action, dispatch, getState) {
	        var state = getState();
	
	        var previousSortState = state.get('sort').get('state').toJS();
	
	        var order = undefined;
	
	        var defaultOrder = 'asc';
	
	        if (previousSortState.sort !== action.sort) {
	          order = defaultOrder;
	        } else if ('asc' === previousSortState.order) {
	          order = 'desc';
	        } else if ('desc' === previousSortState.order) {
	          order = 'asc';
	        } else {
	          throw new Error('Unsupported sortState.order "' + previousSortState.order + '"');
	        }
	
	        dispatch({
	          type: _ActionType2.default.SORT_UPDATE_SORT_STATE,
	          state: {
	            sort: action.sort,
	            order: order
	          }
	        });
	      }), _defineProperty(_ref, _ActionType2.default.SORT_RESET_SORT_STATE, function (action, dispatch) {
	        dispatch({
	          type: _ActionType2.default.SORT_UPDATE_SORT_STATE,
	          state: {
	            sort: undefined,
	            order: undefined
	          }
	        });
	      }), _defineProperty(_ref, _ActionType2.default.SORT_UPDATE_SORT_STATE, function (action, dispatch, getState) {
	        var state = getState();
	
	        var sortState = action.state;
	
	        var tableComputedViewModel = state.get('table').get('computedViewModel').toJS();
	
	        function getIconClassName(cell) {
	          var base = 'sort glyphicon';
	
	          if (cell.name === sortState.sort) {
	            if ('asc' === sortState.order) {
	              return base + ' glyphicon-arrow-up';
	            } else if ('desc' === sortState.order) {
	              return base + ' glyphicon-arrow-down';
	            } else {
	              throw new Error('Unexpected action.order "' + sortState.order + '".');
	            }
	          }
	
	          return base + ' glyphicon-sort';
	        }
	
	        function getShowRemoveIcon(cell) {
	          var sortState = action.state;
	
	          return cell.name === sortState.sort;
	        }
	
	        var viewModelCells = tableComputedViewModel.head.rows[0].cells.map(function (cell) {
	          return {
	            iconClassName: getIconClassName(cell),
	            showRemoveIcon: getShowRemoveIcon(cell)
	          };
	        });
	
	        dispatch({
	          type: _ActionType2.default.SORT_UPDATE_COMPUTED_VIEW_MODEL_CELLS,
	          cells: viewModelCells
	        });
	
	        dispatch({
	          type: _ActionType6.default.ROUTING_UPDATE_ROUTE,
	          queryParams: action.state
	        });
	
	        if (undefined !== sortState.sort && undefined !== sortState.order) {
	          dispatch({
	            type: _ActionType8.default.ASYNC_UPDATE_OPTIONS,
	            options: {
	              sort: {
	                sort: sortState.sort,
	                order: sortState.order
	              }
	            }
	          });
	        } else {
	          dispatch({
	            type: _ActionType8.default.ASYNC_UPDATE_OPTIONS,
	            options: {
	              sort: undefined
	            }
	          });
	        }
	
	        dispatch({
	          type: _ActionType8.default.ASYNC_DATA_UPDATE_DATA
	        });
	      }), _ref;
	    },
	    filters: function filters() {
	      var sortableColumns = getSortableColumns();
	
	      return _defineProperty({}, _ActionType4.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD, function (action, dispatch, getState, store) {
	        if (action.head.rows.length > 1) {
	          throw new Error('Unsupported multi-rows header.');
	        }
	
	        action.head.rows[0].cells.forEach(function (cell, cellIndex) {
	          if (sortableColumns.indexOf(cell.name) !== -1) {
	            var className = void 0;
	
	            if (undefined !== cell.props && undefined !== cell.props.className) {
	              className = cell.props.className + ' sortable';
	            } else {
	              className = 'sortable';
	            }
	
	            _lodash2.default.merge(cell, {
	              props: {
	                onClick: function onClick(event) {
	                  event.preventDefault();
	
	                  dispatch({
	                    type: _ActionType2.default.SORT_TOGGLE_SORT,
	                    sort: cell.name
	                  });
	                },
	                className: className
	              }
	            });
	
	            cell.content = [cell.content, _react2.default.createElement(_ConnectedSortIcon2.default, {
	              key: 'sortIcon',
	              cellIndex: cellIndex,
	              store: store })];
	          }
	        });
	
	        return action;
	      });
	    },
	    boot: function boot(dispatch, getState) {
	      var sortState = {};
	      var query = getState().get('opts').get('routing').toJS().location.query;
	
	      if (undefined !== query.sort && undefined !== query.order) {
	        sortState.sort = query.sort;
	        sortState.order = query.order;
	      }
	
	      dispatch({
	        type: _ActionType2.default.SORT_UPDATE_SORT_STATE,
	        state: sortState
	      });
	    }
	  };
	};
	
	SortModule.moduleName = 'sort';
	
	exports.default = SortModule;

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DefaultState = __webpack_require__(326);
	
	var _DefaultState2 = _interopRequireDefault(_DefaultState);
	
	var _ActionType = __webpack_require__(327);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _DefaultState2.default : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActionType2.default.SORT_UPDATE_COMPUTED_VIEW_MODEL_CELLS:
	      return state.setIn(['computedViewModel', 'cells'], _immutable2.default.fromJS(action.cells));
	    case _ActionType2.default.SORT_UPDATE_SORT_STATE:
	      return state.setIn(['state'], _immutable2.default.fromJS(action.state));
	    default:
	      return state;
	  }
	};

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _immutable2.default.fromJS({
	  state: {},
	  computedViewModel: {
	    cells: [{}, //TODO Remove
	    {} //TODO Remove
	    ]
	  }
	});

/***/ },
/* 327 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SORT_TOGGLE_SORT = 'SORT_TOGGLE_SORT';
	var SORT_UPDATE_SORT_STATE = 'SORT_UPDATE_SORT_STATE';
	var SORT_RESET_SORT_STATE = 'SORT_RESET_SORT_STATE';
	var SORT_UPDATE_COMPUTED_VIEW_MODEL_CELLS = 'SORT_UPDATE_COMPUTED_VIEW_MODEL_CELLS';
	
	exports.default = {
	  SORT_TOGGLE_SORT: SORT_TOGGLE_SORT,
	  SORT_UPDATE_SORT_STATE: SORT_UPDATE_SORT_STATE,
	  SORT_RESET_SORT_STATE: SORT_RESET_SORT_STATE,
	  SORT_UPDATE_COMPUTED_VIEW_MODEL_CELLS: SORT_UPDATE_COMPUTED_VIEW_MODEL_CELLS
	};

/***/ },
/* 328 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SET_PREVIOUS_LOCATION_QUERY = 'SET_PREVIOUS_LOCATION_QUERY';
	var ROUTING_UPDATE_ROUTE = 'ROUTING_UPDATE_ROUTE';
	var SET_MAKE_LINK = 'SET_MAKE_LINK';
	
	exports.default = {
	  SET_PREVIOUS_LOCATION_QUERY: SET_PREVIOUS_LOCATION_QUERY,
	  ROUTING_UPDATE_ROUTE: ROUTING_UPDATE_ROUTE,
	  SET_MAKE_LINK: SET_MAKE_LINK
	};

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(280);
	
	var _ActionType = __webpack_require__(327);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _SortIcon = __webpack_require__(330);
	
	var _SortIcon2 = _interopRequireDefault(_SortIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var cellIndex = ownProps.cellIndex;
	
	  var computedViewModel = state.get('sort').get('computedViewModel').toJS();
	
	  return {
	    iconClassName: computedViewModel.cells[cellIndex].iconClassName,
	    showRemoveIcon: computedViewModel.cells[cellIndex].showRemoveIcon
	  };
	}, {
	  handleResetSortContextClicked: function handleResetSortContextClicked(event) {
	    event.stopPropagation();
	
	    return {
	      type: _ActionType2.default.SORT_RESET_SORT_STATE
	    };
	  }
	})(_SortIcon2.default);

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SortIcon = function SortIcon(props) {
	  var handleResetSortContextClicked = props.handleResetSortContextClicked;
	  var iconClassName = props.iconClassName;
	  var showRemoveIcon = props.showRemoveIcon;
	
	  function renderRemoveIcon() {
	    if (showRemoveIcon) {
	      return _react2.default.createElement("i", {
	        className: "glyphicon glyphicon-remove reset-sort",
	        onClick: handleResetSortContextClicked });
	    }
	  }
	
	  return _react2.default.createElement(
	    "div",
	    { className: "sort pull-right" },
	    renderRemoveIcon(),
	    " ",
	    _react2.default.createElement("i", { className: iconClassName })
	  );
	};
	
	SortIcon.displayName = 'SortIcon';
	
	exports.default = SortIcon;

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(328);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _Reducer = __webpack_require__(332);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var goToPage = function goToPage(router, pathname, query) {
	  router.push(router.createPath({ pathname: pathname, query: query }));
	};
	
	var RoutingModule = function RoutingModule(opts) {
	  return {
	    reducer: _Reducer2.default,
	    listeners: function listeners() {
	      return _defineProperty({}, _ActionType2.default.ROUTING_UPDATE_ROUTE, function (action, dispatch, getState) {
	        //Override any page and pageSize query parameters
	        var query = Object.assign({}, getState().get('routing').get('state').get('previousLocationQuery').toJS(), action.queryParams);
	
	        goToPage(opts.router, opts.location.pathname, query);
	
	        dispatch({
	          type: _ActionType2.default.SET_PREVIOUS_LOCATION_QUERY,
	          previousLocationQuery: query
	        });
	      });
	    },
	    boot: function boot(dispatch) {
	      dispatch({
	        type: _ActionType2.default.SET_PREVIOUS_LOCATION_QUERY,
	        previousLocationQuery: opts.location.query
	      });
	
	      dispatch({
	        type: _ActionType2.default.SET_MAKE_LINK,
	        makeLink: function makeLink(getState, paramQuery) {
	          //Override any page and pageSize query parameters
	          var query = Object.assign({}, getState().get('routing').get('state').get('previousLocationQuery').toJS(), paramQuery);
	
	          return opts.router.createPath({
	            pathname: opts.location.pathname,
	            query: query
	          });
	        }
	      });
	    }
	  };
	};
	
	RoutingModule.moduleName = 'routing';
	
	exports.default = RoutingModule;

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DefaultState = __webpack_require__(333);
	
	var _DefaultState2 = _interopRequireDefault(_DefaultState);
	
	var _ActionType = __webpack_require__(328);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _DefaultState2.default : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActionType2.default.SET_MAKE_LINK:
	      return state.set('makeLink', action.makeLink);
	    case _ActionType2.default.SET_PREVIOUS_LOCATION_QUERY:
	      return state.mergeIn(['state'], { previousLocationQuery: action.previousLocationQuery });
	    default:
	      return state;
	  }
	};

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _immutable2.default.fromJS({
	  state: {}
	});

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _Reducer = __webpack_require__(336);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _MakeModule2.default)('filter', function () {
	  return {
	    reducer: _Reducer2.default
	  };
	});

/***/ },
/* 335 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (moduleName, makeModuleDefinition) {
	  var Module = makeModuleDefinition;
	
	  Module.moduleName = moduleName;
	
	  return Module;
	};

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DefaultState = __webpack_require__(337);
	
	var _DefaultState2 = _interopRequireDefault(_DefaultState);
	
	var _ActionType = __webpack_require__(338);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _DefaultState2.default : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActionType2.default.FILTER_UPDATE_Q_FIELD_VALUE:
	      return state.mergeIn(['state'], { qFieldValue: action.qFieldValue });
	    case _ActionType2.default.FILTER_RESET_Q_FIELD_VALUE:
	      return state.mergeIn(['state'], { qFieldValue: '' });
	    default:
	      return state;
	  }
	};

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _immutable2.default.fromJS({
	  state: {
	    qFieldValue: ''
	  }
	});

/***/ },
/* 338 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FILTER_UPDATE_Q_FIELD_VALUE = 'FILTER_UPDATE_Q_FIELD_VALUE';
	var FILTER_RESET_Q_FIELD_VALUE = 'FILTER_RESET_Q_FIELD_VALUE';
	
	exports.default = {
	  FILTER_UPDATE_Q_FIELD_VALUE: FILTER_UPDATE_Q_FIELD_VALUE,
	  FILTER_RESET_Q_FIELD_VALUE: FILTER_RESET_Q_FIELD_VALUE
	};

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _ActionType = __webpack_require__(321);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ConnectedFilter = __webpack_require__(340);
	
	var _ConnectedFilter2 = _interopRequireDefault(_ConnectedFilter);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _MakeModule2.default)('filterBeforeTable', function () {
	  return {
	    boot: function boot(dispatch) {
	      dispatch({
	        type: _ActionType2.default.BEFORE_TABLE_REGISTER_COMPONENT,
	        row: 0,
	        slot: 0,
	        component: function component(props) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'filter' },
	            _react2.default.createElement(_ConnectedFilter2.default, { store: props.store })
	          );
	        }
	      });
	    }
	  };
	});

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(280);
	
	var _ActionType = __webpack_require__(338);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _Filter = __webpack_require__(341);
	
	var _Filter2 = _interopRequireDefault(_Filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  var filterState = state.get('filter').get('state').toJS();
	
	  return {
	    qFieldValue: filterState.qFieldValue
	  };
	}, {
	  handleQChanged: function handleQChanged(event) {
	    return {
	      type: _ActionType2.default.FILTER_UPDATE_Q_FIELD_VALUE,
	      qFieldValue: event.target.value
	    };
	  },
	  resetButtonClicked: function resetButtonClicked() {
	    return {
	      type: _ActionType2.default.FILTER_RESET_Q_FIELD_VALUE
	    };
	  }
	})(_Filter2.default);

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(
	    "div",
	    null,
	    _react2.default.createElement(
	      "label",
	      null,
	      "Filter",
	      _react2.default.createElement("input", {
	        type: "text",
	        className: "form-control",
	        value: props.qFieldValue,
	        placeholder: "Filter:",
	        onChange: props.handleQChanged })
	    ),
	    _react2.default.createElement("i", {
	      className: "reset-button glyphicon glyphicon-remove-circle",
	      onClick: props.resetButtonClicked })
	  );
	};

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _ActionType = __webpack_require__(338);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionType3 = __webpack_require__(315);
	
	var _ActionType4 = _interopRequireDefault(_ActionType3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var makeOnFilterUpdateQFieldValue = function makeOnFilterUpdateQFieldValue() {
	  var updateQFieldValueTimeout = undefined;
	
	  return function (overrideDelay, action, dispatch) {
	    if (undefined !== updateQFieldValueTimeout) {
	      clearTimeout(updateQFieldValueTimeout);
	    }
	
	    /**
	     * Taking snapshot of value,
	     * important to get action.qFieldValue as it was when invoking function,
	     * not as it will be 300 ms later
	     */
	    var rawQValue = action.qFieldValue;
	    var q = '' === rawQValue ? undefined : rawQValue;
	
	    var delay = undefined;
	
	    if (undefined === overrideDelay) {
	      if (undefined === action.delay) {
	        delay = 300;
	      } else {
	        delay = action.delay;
	      }
	    } else {
	      delay = overrideDelay;
	    }
	
	    var doUpdate = function doUpdate() {
	      dispatch({
	        type: _ActionType4.default.ASYNC_UPDATE_OPTIONS,
	        options: {
	          q: q
	        }
	      });
	
	      dispatch({
	        type: _ActionType4.default.ASYNC_DATA_UPDATE_DATA
	      });
	    };
	
	    if (0 === delay) {
	      updateQFieldValueTimeout = undefined;
	
	      doUpdate();
	    } else {
	      updateQFieldValueTimeout = setTimeout(doUpdate, delay);
	    }
	  };
	};
	
	exports.default = (0, _MakeModule2.default)('filterAsyncData', function () {
	  var onFilterUpdateQFieldValue = makeOnFilterUpdateQFieldValue();
	
	  return {
	    listeners: function listeners() {
	      var _ref;
	
	      return _ref = {}, _defineProperty(_ref, _ActionType2.default.FILTER_UPDATE_Q_FIELD_VALUE, onFilterUpdateQFieldValue.bind(undefined, undefined)), _defineProperty(_ref, _ActionType2.default.FILTER_RESET_Q_FIELD_VALUE, onFilterUpdateQFieldValue.bind(undefined, 0)), _ref;
	    }
	  };
	});

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _ActionType = __webpack_require__(315);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionType3 = __webpack_require__(328);
	
	var _ActionType4 = _interopRequireDefault(_ActionType3);
	
	var _ActionType5 = __webpack_require__(338);
	
	var _ActionType6 = _interopRequireDefault(_ActionType5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = (0, _MakeModule2.default)('filterRouting', function () {
	  return {
	    listeners: function listeners() {
	      return _defineProperty({}, _ActionType2.default.ASYNC_UPDATE_OPTIONS, function (action, dispatch) {
	        if ('q' in action.options) {
	          dispatch({
	            type: _ActionType4.default.ROUTING_UPDATE_ROUTE,
	            queryParams: {
	              q: action.options.q
	            }
	          });
	        }
	      });
	    },
	    boot: function boot(dispatch, getState) {
	      var query = getState().get('opts').get('routing').toJS().location.query;
	      var qFieldValue = undefined === query.q ? '' : query.q;
	
	      dispatch({
	        type: _ActionType6.default.FILTER_UPDATE_Q_FIELD_VALUE,
	        qFieldValue: qFieldValue,
	        delay: 0,
	        boot: true
	      });
	    }
	  };
	});

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _Reducer = __webpack_require__(345);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	var _ActionType = __webpack_require__(347);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function isPositiveInteger(value) {
	  return (/^[0-9]+$/.test(value) && value >= 1
	  );
	}
	
	var onFieldValueChangedEvent = function onFieldValueChangedEvent(action, dispatch) {
	  var value = action.goToPageFieldValue;
	
	  if (!('' === value || isPositiveInteger(value))) {
	    return;
	  }
	
	  dispatch({
	    type: _ActionType2.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE_FIELD_VALUE,
	    goToPageFieldValue: value
	  });
	};
	
	function getPageFromGetState(getState) {
	  var goToPageState = getState().get('goToPage').get('state').toJS();
	  var goToPageFieldValue = goToPageState.goToPageFieldValue;
	
	  return '' === goToPageFieldValue ? undefined : parseInt(goToPageFieldValue, 10);
	}
	
	function dispatchGoToPageUpdateGoToPageFromGetState(dispatch, getState) {
	  var page = getPageFromGetState(getState);
	
	  dispatch({
	    type: _ActionType2.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE,
	    page: page
	  });
	}
	
	exports.default = (0, _MakeModule2.default)('goToPage', function () {
	  return {
	    reducer: _Reducer2.default,
	    listeners: function listeners() {
	      var _ref;
	
	      return _ref = {}, _defineProperty(_ref, _ActionType2.default.GO_TO_PAGE_FIELD_VALUE_CHANGED_EVENT, onFieldValueChangedEvent), _defineProperty(_ref, _ActionType2.default.GO_TO_PAGE_KEY_DOWN_EVENT, function (action, dispatch, getState) {
	        if (13 !== action.keyCode) {
	          return;
	        }
	
	        dispatchGoToPageUpdateGoToPageFromGetState(dispatch, getState);
	      }), _defineProperty(_ref, _ActionType2.default.GO_TO_PAGE_GO_BUTTON_CLICKED_EVENT, function (action, dispatch, getState) {
	        dispatchGoToPageUpdateGoToPageFromGetState(dispatch, getState);
	      }), _ref;
	    }
	  };
	});

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DefaultState = __webpack_require__(346);
	
	var _DefaultState2 = _interopRequireDefault(_DefaultState);
	
	var _ActionType = __webpack_require__(347);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _DefaultState2.default : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActionType2.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE_FIELD_VALUE:
	      return state.mergeIn(['state'], { goToPageFieldValue: action.goToPageFieldValue });
	    case _ActionType2.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE:
	      return state.mergeIn(['state'], { goToPage: action.goToPage });
	    default:
	      return state;
	  }
	};

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _immutable2.default.fromJS({
	  state: {
	    goToPageFieldValue: ''
	  }
	});

/***/ },
/* 347 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//Updata data
	var GO_TO_PAGE_UPDATE_GO_TO_PAGE_FIELD_VALUE = 'GO_TO_PAGE_UPDATE_GO_TO_PAGE_FIELD_VALUE';
	var GO_TO_PAGE_UPDATE_GO_TO_PAGE = 'GO_TO_PAGE_UPDATE_GO_TO_PAGE';
	
	//Other actions
	var GO_TO_PAGE_FIELD_VALUE_CHANGED_EVENT = 'GO_TO_PAGE_FIELD_VALUE_CHANGED_EVENT';
	var GO_TO_PAGE_KEY_DOWN_EVENT = 'GO_TO_PAGE_KEY_DOWN_EVENT';
	var GO_TO_PAGE_GO_BUTTON_CLICKED_EVENT = 'GO_TO_PAGE_GO_BUTTON_CLICKED_EVENT';
	
	exports.default = {
	  GO_TO_PAGE_UPDATE_GO_TO_PAGE_FIELD_VALUE: GO_TO_PAGE_UPDATE_GO_TO_PAGE_FIELD_VALUE,
	  GO_TO_PAGE_UPDATE_GO_TO_PAGE: GO_TO_PAGE_UPDATE_GO_TO_PAGE,
	  GO_TO_PAGE_FIELD_VALUE_CHANGED_EVENT: GO_TO_PAGE_FIELD_VALUE_CHANGED_EVENT,
	  GO_TO_PAGE_KEY_DOWN_EVENT: GO_TO_PAGE_KEY_DOWN_EVENT,
	  GO_TO_PAGE_GO_BUTTON_CLICKED_EVENT: GO_TO_PAGE_GO_BUTTON_CLICKED_EVENT
	};

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _ActionType = __webpack_require__(321);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ConnectedGoToPage = __webpack_require__(349);
	
	var _ConnectedGoToPage2 = _interopRequireDefault(_ConnectedGoToPage);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _MakeModule2.default)('goToPageBeforeTable', function () {
	  return {
	    boot: function boot(dispatch) {
	      dispatch({
	        type: _ActionType2.default.BEFORE_TABLE_REGISTER_COMPONENT,
	        row: 0,
	        slot: 1,
	        component: function component(props) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'go-to-page' },
	            _react2.default.createElement(_ConnectedGoToPage2.default, { store: props.store })
	          );
	        }
	      });
	    }
	  };
	});

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(280);
	
	var _ActionType = __webpack_require__(347);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _GoToPage = __webpack_require__(350);
	
	var _GoToPage2 = _interopRequireDefault(_GoToPage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  var goToPageState = state.get('goToPage').get('state').toJS();
	
	  return {
	    goToPageFieldValue: goToPageState.goToPageFieldValue
	  };
	}, {
	  handleGoToPageChanged: function handleGoToPageChanged(event) {
	    var value = event.target.value;
	
	    return {
	      type: _ActionType2.default.GO_TO_PAGE_FIELD_VALUE_CHANGED_EVENT,
	      goToPageFieldValue: value
	    };
	  },
	  handleGoToPageKeyDown: function handleGoToPageKeyDown(event) {
	    return {
	      type: _ActionType2.default.GO_TO_PAGE_KEY_DOWN_EVENT,
	      keyCode: event.keyCode
	    };
	  },
	  handleGoToPageGoButtonClicked: function handleGoToPageGoButtonClicked(event) {
	    event.preventDefault();
	
	    return {
	      type: _ActionType2.default.GO_TO_PAGE_GO_BUTTON_CLICKED_EVENT
	    };
	  }
	})(_GoToPage2.default);

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(
	    "label",
	    null,
	    "Go to page",
	    _react2.default.createElement(
	      "div",
	      { className: "input-group" },
	      _react2.default.createElement("input", {
	        type: "text",
	        className: "form-control",
	        placeholder: 'Page:',
	        value: props.goToPageFieldValue,
	        onChange: props.handleGoToPageChanged,
	        onKeyDown: props.handleGoToPageKeyDown }),
	      _react2.default.createElement(
	        "div",
	        { className: "input-group-btn" },
	        _react2.default.createElement(
	          "button",
	          {
	            className: "btn btn-default",
	            onClick: props.handleGoToPageGoButtonClicked },
	          "Go"
	        )
	      )
	    )
	  );
	};

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _ActionType = __webpack_require__(347);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionType3 = __webpack_require__(315);
	
	var _ActionType4 = _interopRequireDefault(_ActionType3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = (0, _MakeModule2.default)('goToPageAsyncDataModule', function () {
	  return {
	    listeners: function listeners() {
	      return _defineProperty({}, _ActionType2.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE, function (action, dispatch) {
	        if (true === action.noAsyncDataUpdate) {
	          return;
	        }
	
	        dispatch({
	          type: _ActionType4.default.ASYNC_UPDATE_OPTIONS,
	          options: {
	            page: action.page
	          }
	        });
	
	        dispatch({
	          type: _ActionType4.default.ASYNC_DATA_UPDATE_DATA
	        });
	      });
	    }
	  };
	});

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _ActionType = __webpack_require__(315);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionType3 = __webpack_require__(328);
	
	var _ActionType4 = _interopRequireDefault(_ActionType3);
	
	var _ActionType5 = __webpack_require__(347);
	
	var _ActionType6 = _interopRequireDefault(_ActionType5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = (0, _MakeModule2.default)('goToPageAsyncDataRouting', function () {
	  return {
	    listeners: function listeners() {
	      return _defineProperty({}, _ActionType2.default.ASYNC_UPDATE_OPTIONS, function (action, dispatch) {
	        if ('page' in action.options) {
	          var page = 1 === action.options.page ? undefined : action.options.page;
	
	          dispatch({
	            type: _ActionType4.default.ROUTING_UPDATE_ROUTE,
	            queryParams: {
	              page: page
	            }
	          });
	        }
	      });
	    },
	    boot: function boot(dispatch, getState) {
	      var query = getState().get('opts').get('routing').toJS().location.query;
	      var page = undefined === query.page ? undefined : parseInt(query.page, 10);
	
	      dispatch({
	        type: _ActionType6.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE,
	        page: page
	      });
	    }
	  };
	});

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _Reducer = __webpack_require__(354);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _MakeModule2.default)('pageSize', function () {
	  return {
	    reducer: _Reducer2.default
	  };
	});

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DefaultState = __webpack_require__(355);
	
	var _DefaultState2 = _interopRequireDefault(_DefaultState);
	
	var _ActionType = __webpack_require__(356);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _DefaultState2.default : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActionType2.default.PAGE_SIZE_UPDATE_PAGE_SIZE:
	      return state.mergeIn(['state'], { pageSize: action.pageSize });
	    default:
	      return state;
	  }
	};

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _immutable2.default.fromJS({
	  state: {
	    pageSize: 10
	  }
	});

/***/ },
/* 356 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PAGE_SIZE_UPDATE_PAGE_SIZE = 'PAGE_SIZE_UPDATE_PAGE_SIZE';
	
	exports.default = {
	  PAGE_SIZE_UPDATE_PAGE_SIZE: PAGE_SIZE_UPDATE_PAGE_SIZE
	};

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _ActionType = __webpack_require__(321);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ConnectedPageSize = __webpack_require__(358);
	
	var _ConnectedPageSize2 = _interopRequireDefault(_ConnectedPageSize);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _MakeModule2.default)('pageSizeBeforeTable', function () {
	  return {
	    boot: function boot(dispatch) {
	      dispatch({
	        type: _ActionType2.default.BEFORE_TABLE_REGISTER_COMPONENT,
	        row: 1,
	        slot: 0,
	        component: function component(props) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'page-size' },
	            _react2.default.createElement(_ConnectedPageSize2.default, { store: props.store })
	          );
	        }
	      });
	    }
	  };
	});

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(280);
	
	var _ActionType = __webpack_require__(356);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _PageSize = __webpack_require__(359);
	
	var _PageSize2 = _interopRequireDefault(_PageSize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  var pageSizeState = state.get('pageSize').get('state').toJS();
	
	  return {
	    pageSize: pageSizeState.pageSize
	  };
	}, {
	  handlePageSizeChange: function handlePageSizeChange(event) {
	    return {
	      type: _ActionType2.default.PAGE_SIZE_UPDATE_PAGE_SIZE,
	      pageSize: parseInt(event.target.value, 10)
	    };
	  }
	})(_PageSize2.default);

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(
	    "label",
	    null,
	    "Page size ",
	    _react2.default.createElement(
	      "select",
	      {
	        className: "form-control",
	        value: props.pageSize,
	        onChange: props.handlePageSizeChange },
	      _react2.default.createElement(
	        "option",
	        { value: 10 },
	        "10"
	      ),
	      _react2.default.createElement(
	        "option",
	        { value: 25 },
	        "25"
	      ),
	      _react2.default.createElement(
	        "option",
	        { value: 50 },
	        "50"
	      ),
	      _react2.default.createElement(
	        "option",
	        { value: 100 },
	        "100"
	      )
	    )
	  );
	};

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _ActionType = __webpack_require__(356);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionType3 = __webpack_require__(315);
	
	var _ActionType4 = _interopRequireDefault(_ActionType3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function getPageSizeFromRawPageSize(rawPageSize) {
	  return parseInt(rawPageSize, 10);
	}
	
	exports.default = (0, _MakeModule2.default)('pageSizeAsyncData', function () {
	  return {
	    listeners: function listeners() {
	      return _defineProperty({}, _ActionType2.default.PAGE_SIZE_UPDATE_PAGE_SIZE, function (action, dispatch) {
	        dispatch({
	          type: _ActionType4.default.ASYNC_UPDATE_OPTIONS,
	          options: {
	            pageSize: getPageSizeFromRawPageSize(action.pageSize)
	          }
	        });
	
	        dispatch({
	          type: _ActionType4.default.ASYNC_DATA_UPDATE_DATA
	        });
	      });
	    }
	  };
	});

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _ActionType = __webpack_require__(315);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionType3 = __webpack_require__(328);
	
	var _ActionType4 = _interopRequireDefault(_ActionType3);
	
	var _ActionType5 = __webpack_require__(356);
	
	var _ActionType6 = _interopRequireDefault(_ActionType5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = (0, _MakeModule2.default)('pageSizeAsyncDataRouting', function () {
	  return {
	    listeners: function listeners() {
	      return _defineProperty({}, _ActionType2.default.ASYNC_UPDATE_OPTIONS, function (action, dispatch) {
	        if ('pageSize' in action.options) {
	          var pageSize = 10 === action.options.pageSize ? undefined : action.options.pageSize;
	
	          dispatch({
	            type: _ActionType4.default.ROUTING_UPDATE_ROUTE,
	            queryParams: {
	              pageSize: pageSize
	            }
	          });
	        }
	      });
	    },
	    boot: function boot(dispatch, getState) {
	      var query = getState().get('opts').get('routing').toJS().location.query;
	
	      var pageSize = undefined === query.pageSize ? 10 : parseInt(query.pageSize, 10);
	
	      dispatch({
	        type: _ActionType6.default.PAGE_SIZE_UPDATE_PAGE_SIZE,
	        pageSize: pageSize,
	        boot: true
	      });
	    }
	  };
	});

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _Reducer = __webpack_require__(363);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	var _ActionType = __webpack_require__(312);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionType3 = __webpack_require__(365);
	
	var _ActionType4 = _interopRequireDefault(_ActionType3);
	
	var _ActionType5 = __webpack_require__(347);
	
	var _ActionType6 = _interopRequireDefault(_ActionType5);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var getClassName = function getClassName(page, buttonPage) {
	  return page === buttonPage ? 'current' : null;
	};
	
	exports.default = (0, _MakeModule2.default)('paginator', function () {
	  return {
	    reducer: _Reducer2.default,
	    listeners: function listeners() {
	      return _defineProperty({}, _ActionType2.default.DATA_REPLACE_DATA, function (action, dispatch, getState) {
	        var options = getState().get('asyncData').get('state').get('options').toJS();
	
	        var makeLinkFromState = function makeLinkFromState(page) {
	          return getState().get('routing').get('makeLink')(getState, { page: page });
	        };
	
	        var filteredTotal = action.data.info.filteredTotal;
	        var page = undefined === options.page ? 1 : options.page;
	        var pageSize = undefined === options.pageSize ? 10 : options.pageSize;
	
	        var totalPages = Math.ceil(filteredTotal / pageSize);
	
	        var firstDisabled = page <= 1;
	        var lastDisabled = page >= totalPages;
	        var previousDisabled = firstDisabled;
	        var nextDisabled = lastDisabled;
	
	        var maximumPages = 10;
	
	        var buttons = [];
	
	        var showButtons = void 0;
	
	        function addButtons(from, to) {
	          var previousPage = page - 1;
	          var nextPage = page + 1;
	          var lastPage = totalPages;
	
	          showButtons = to > 1;
	
	          buttons.push({
	            key: 'first',
	            page: 1,
	            content: _react2.default.createElement(
	              'span',
	              null,
	              '«'
	            ),
	            link: firstDisabled ? '' : makeLinkFromState(1),
	            disabled: firstDisabled,
	            className: firstDisabled ? 'disabled' : undefined
	          });
	
	          buttons.push({
	            key: 'previous',
	            page: previousPage,
	            content: _react2.default.createElement(
	              'span',
	              null,
	              '‹'
	            ),
	            link: previousDisabled ? '' : makeLinkFromState(previousPage),
	            disabled: previousDisabled,
	            className: previousDisabled ? 'disabled' : undefined
	          });
	
	          for (var i = from - 1; i < to; i += 1) {
	            var buttonPage = i + 1;
	
	            buttons.push({
	              page: buttonPage,
	              key: buttonPage,
	              content: buttonPage,
	              link: makeLinkFromState(buttonPage),
	              disabled: false,
	              className: getClassName(page, buttonPage)
	            });
	          }
	
	          buttons.push({
	            key: 'next',
	            page: nextPage,
	            content: _react2.default.createElement(
	              'span',
	              null,
	              '›'
	            ),
	            link: nextDisabled ? '' : makeLinkFromState(nextPage),
	            disabled: nextDisabled,
	            className: nextDisabled ? 'disabled' : undefined
	          });
	
	          buttons.push({
	            key: 'last',
	            page: lastPage,
	            content: _react2.default.createElement(
	              'span',
	              null,
	              '»'
	            ),
	            link: lastDisabled ? '' : makeLinkFromState(lastPage),
	            disabled: lastDisabled,
	            className: lastDisabled ? 'disabled' : undefined
	          });
	        }
	
	        if (totalPages <= maximumPages) {
	          addButtons(1, totalPages);
	        } else {
	          var mid = maximumPages / 2 + 1;
	
	          if (page <= mid) {
	            addButtons(1, maximumPages);
	          } else if (page >= totalPages - (mid - 2)) {
	            addButtons(totalPages - (maximumPages - 1), totalPages);
	          } else {
	            var paginatorLastPage = page + (mid - 2);
	
	            addButtons(page - (mid - 1), paginatorLastPage < totalPages ? paginatorLastPage : totalPages);
	          }
	        }
	
	        buttons.forEach(function (button) {
	          button.handleClick = function (page, event) {
	            event.preventDefault();
	
	            if (!button.disabled) {
	              dispatch({
	                type: _ActionType6.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE,
	                page: page
	              });
	            }
	          };
	        });
	
	        dispatch({
	          type: _ActionType4.default.PAGINATOR_REPLACE_COMPUTED_VIEW_MODEL_BUTTONS,
	          buttons: buttons
	        });
	      });
	    }
	  };
	});

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DefaultState = __webpack_require__(364);
	
	var _DefaultState2 = _interopRequireDefault(_DefaultState);
	
	var _ActionType = __webpack_require__(365);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _DefaultState2.default : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActionType2.default.PAGINATOR_REPLACE_COMPUTED_VIEW_MODEL_BUTTONS:
	      return state.mergeIn(['computedViewModel'], {
	        buttons: action.buttons
	      });
	    default:
	      return state;
	  }
	};

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(246);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _immutable2.default.fromJS({
	  state: {},
	  computedViewModel: {
	    buttons: []
	  }
	});

/***/ },
/* 365 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PAGINATOR_REPLACE_COMPUTED_VIEW_MODEL_BUTTONS = 'PAGINATOR_REPLACE_COMPUTED_VIEW_MODEL_BUTTONS';
	
	exports.default = {
	  PAGINATOR_REPLACE_COMPUTED_VIEW_MODEL_BUTTONS: PAGINATOR_REPLACE_COMPUTED_VIEW_MODEL_BUTTONS
	};

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _ActionType = __webpack_require__(321);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ConnectedPagination = __webpack_require__(367);
	
	var _ConnectedPagination2 = _interopRequireDefault(_ConnectedPagination);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _MakeModule2.default)('paginatorBeforeTable', function () {
	  return {
	    boot: function boot(dispatch) {
	      dispatch({
	        type: _ActionType2.default.BEFORE_TABLE_REGISTER_COMPONENT,
	        row: 1,
	        slot: 1,
	        component: function component(props) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'paginator' },
	            _react2.default.createElement(_ConnectedPagination2.default, { store: props.store })
	          );
	        }
	      });
	    }
	  };
	});

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(280);
	
	var _Pagination = __webpack_require__(368);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  var buttons = state.get('paginator').get('computedViewModel').get('buttons').toJS();
	
	  return {
	    buttons: buttons
	  };
	})(_Pagination2.default);

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var addPageButton = function addPageButton(page, key, content, link, className, disabled, handleClick) {
	  return _react2.default.createElement(
	    "li",
	    {
	      key: key,
	      className: className },
	    _react2.default.createElement(
	      "a",
	      {
	        disabled: disabled,
	        href: link,
	        onClick: handleClick.bind(undefined, page) },
	      _react2.default.createElement(
	        "span",
	        null,
	        content
	      )
	    )
	  );
	};
	
	exports.default = function (props) {
	  var buttons = props.buttons;
	
	  return _react2.default.createElement(
	    "ul",
	    { className: "pagination" },
	    function () {
	      return buttons.map(function (button) {
	        return addPageButton(button.page, button.key, button.content, button.link, button.className, button.disabled, button.handleClick);
	      });
	    }()
	  );
	};

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _ActionType = __webpack_require__(338);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionType3 = __webpack_require__(347);
	
	var _ActionType4 = _interopRequireDefault(_ActionType3);
	
	var _ActionType5 = __webpack_require__(315);
	
	var _ActionType6 = _interopRequireDefault(_ActionType5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = (0, _MakeModule2.default)('filterPage', function () {
	  return {
	    preListeners: function preListeners() {
	      return _defineProperty({}, _ActionType2.default.FILTER_UPDATE_Q_FIELD_VALUE, function (action, dispatch) {
	        if (true !== action.boot) {
	          dispatch({
	            type: _ActionType4.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE_FIELD_VALUE,
	            goToPageFieldValue: ''
	          });
	
	          dispatch({
	            type: _ActionType6.default.ASYNC_UPDATE_OPTIONS,
	            options: {
	              page: undefined
	            }
	          });
	
	          dispatch({
	            type: _ActionType4.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE,
	            page: 1,
	            noAsyncDataUpdate: true
	          });
	        }
	      });
	    }
	  };
	});

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MakeModule = __webpack_require__(335);
	
	var _MakeModule2 = _interopRequireDefault(_MakeModule);
	
	var _ActionType = __webpack_require__(356);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionType3 = __webpack_require__(347);
	
	var _ActionType4 = _interopRequireDefault(_ActionType3);
	
	var _ActionType5 = __webpack_require__(315);
	
	var _ActionType6 = _interopRequireDefault(_ActionType5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = (0, _MakeModule2.default)('pageSizePage', function () {
	  return {
	    preListeners: function preListeners() {
	      return _defineProperty({}, _ActionType2.default.PAGE_SIZE_UPDATE_PAGE_SIZE, function (action, dispatch) {
	        if (true !== action.boot) {
	          dispatch({
	            type: _ActionType4.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE_FIELD_VALUE,
	            goToPageFieldValue: ''
	          });
	
	          dispatch({
	            type: _ActionType6.default.ASYNC_UPDATE_OPTIONS,
	            options: {
	              page: undefined
	            }
	          });
	
	          dispatch({
	            type: _ActionType4.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE,
	            page: 1,
	            noAsyncDataUpdate: true
	          });
	        }
	      });
	    }
	  };
	});

/***/ }
]);
//# sourceMappingURL=example-error-retrieving-data.js.map