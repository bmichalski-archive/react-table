webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _commonExample = __webpack_require__(36);
	
	var _commonExample2 = _interopRequireDefault(_commonExample);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _commonExample2.default)();

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(37);
	
	var _bluebird = __webpack_require__(107);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(109);
	
	var _makeTableWrapper = __webpack_require__(173);
	
	var _makeTableWrapper2 = _interopRequireDefault(_makeTableWrapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (sampleResult) {
	  var getData = function getData(page, pageSize, q) {
	    var from = (page - 1) * pageSize;
	    var end = from + pageSize;
	
	    return new _bluebird2.default(function (resolve, reject, onCancel) {
	      var canceled = false;
	
	      onCancel(function () {
	        canceled = true;
	
	        console.log('getData: canceled');
	      });
	
	      setTimeout(function () {
	        if (canceled) {
	          return;
	        }
	
	        console.log('getData: resolving');
	
	        try {
	          var filteredResults = void 0;
	
	          if (undefined === q) {
	            filteredResults = sampleResult;
	          } else {
	            filteredResults = sampleResult.filter(function (row) {
	
	              var include = false;
	
	              row.forEach(function (cell) {
	                if (0 === ('' + cell.content).toLowerCase().indexOf(q)) {
	                  include = true;
	                }
	              });
	
	              return include;
	            });
	          }
	
	          resolve({
	            result: filteredResults.slice(from, end),
	            info: {
	              total: sampleResult.length * 2,
	              totalFiltered: filteredResults.length
	            }
	          });
	        } catch (err) {
	          reject(err);
	        }
	      }, 200);
	    });
	  };
	
	  var onCellClicked = function onCellClicked(data, cellIndex, rowIndex) {
	    var str = JSON.stringify({ cellIndex: cellIndex, rowIndex: rowIndex, data: data });
	
	    document.getElementById('row-clicked').innerHTML = 'Row clicked: ' + str;
	  };
	
	  (0, _makeTableWrapper2.default)(function (browserHistory, render) {
	    var opts = {
	      onCellClicked: onCellClicked,
	      getData: getData,
	      renderCell: function renderCell(data) {
	        return data.content;
	      },
	      browserHistory: browserHistory
	    };
	
	    var TableWrapper = function TableWrapper(props) {
	      return _react2.default.createElement(
	        _index.Table,
	        {
	          opts: Object.assign({}, opts, { location: props.location }) },
	        _react2.default.createElement(
	          _index.TableHead,
	          null,
	          _react2.default.createElement(
	            _index.TableHeadRow,
	            null,
	            _react2.default.createElement(
	              _index.TableHeadTh,
	              { sortable: true, name: 'id' },
	              'Id'
	            ),
	            _react2.default.createElement(
	              _index.TableHeadTh,
	              { sortable: { defaultOrder: 'asc' }, name: 'firstColumn' },
	              'First column'
	            ),
	            _react2.default.createElement(
	              _index.TableHeadTh,
	              null,
	              'Second column'
	            )
	          )
	        )
	      );
	    };
	
	    render(_react2.default.createElement(
	      _reactRouter.Router,
	      { history: browserHistory },
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: TableWrapper },
	        _react2.default.createElement(_reactRouter.Route, { path: '*', component: TableWrapper })
	      )
	    ), document.getElementById('main-container'));
	
	    document.getElementById('row-clicked').innerHTML = 'Row clicked:';
	  });
	};

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TableHeadTh = exports.TableHeadRow = exports.TableHead = exports.Table = undefined;
	
	var _ReactTable = __webpack_require__(38);
	
	var _ReactTable2 = _interopRequireDefault(_ReactTable);
	
	var _TableHead = __webpack_require__(105);
	
	var _TableHead2 = _interopRequireDefault(_TableHead);
	
	var _TableHeadRow = __webpack_require__(106);
	
	var _TableHeadRow2 = _interopRequireDefault(_TableHeadRow);
	
	var _TableHeadTh = __webpack_require__(103);
	
	var _TableHeadTh2 = _interopRequireDefault(_TableHeadTh);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Table = _ReactTable2.default;
	exports.TableHead = _TableHead2.default;
	exports.TableHeadRow = _TableHeadRow2.default;
	exports.TableHeadTh = _TableHeadTh2.default;

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(39);
	
	var _Store = __webpack_require__(67);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _MainSaga = __webpack_require__(87);
	
	var _MainSaga2 = _interopRequireDefault(_MainSaga);
	
	var _ActionType = __webpack_require__(84);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _TableWrapper = __webpack_require__(94);
	
	var _TableWrapper2 = _interopRequireDefault(_TableWrapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ReactTable = function (_Component) {
	  _inherits(ReactTable, _Component);
	
	  function ReactTable(props) {
	    var _marked = [rootSaga].map(regeneratorRuntime.mark);
	
	    _classCallCheck(this, ReactTable);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactTable).call(this, props));
	
	    _this._TableWrapper = (0, _TableWrapper2.default)(props);
	
	    _this._location = props.opts.location;
	    var store = (0, _Store2.default)(props.opts);
	
	    function rootSaga() {
	      return regeneratorRuntime.wrap(function rootSaga$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _context.next = 2;
	              return (0, _MainSaga2.default)(store.getState, props.opts.browserHistory);
	
	            case 2:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _marked[0], this);
	    }
	
	    store.getState().get('saga').run(rootSaga);
	
	    _this._store = store;
	    return _this;
	  }
	
	  _createClass(ReactTable, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._store.dispatch({ type: _ActionType2.default.INIT_LOCATION, location: this._location });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var TableWrapper = this._TableWrapper;
	
	      return _react2.default.createElement(
	        _reactRedux.Provider,
	        { store: this._store },
	        _react2.default.createElement(TableWrapper, null)
	      );
	    }
	  }]);
	
	  return ReactTable;
	}(_react.Component);
	
	exports.default = ReactTable;

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(46);
	
	var _reduxThunk = __webpack_require__(68);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _DefaultState = __webpack_require__(69);
	
	var _DefaultState2 = _interopRequireDefault(_DefaultState);
	
	var _reduxSaga = __webpack_require__(71);
	
	var _reduxSaga2 = _interopRequireDefault(_reduxSaga);
	
	var _paginatorReducer = __webpack_require__(83);
	
	var _paginatorReducer2 = _interopRequireDefault(_paginatorReducer);
	
	var _tableReducer = __webpack_require__(85);
	
	var _tableReducer2 = _interopRequireDefault(_tableReducer);
	
	var _rootReducer = __webpack_require__(86);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (opts) {
	  var sagaMiddleware = (0, _reduxSaga2.default)();
	  var defaultState = (0, _DefaultState2.default)(sagaMiddleware, opts);
	
	  var reducer = function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
	    var action = arguments[1];
	
	    return (0, _rootReducer2.default)(state, action).merge({
	      table: (0, _tableReducer2.default)(state.get('table'), action),
	      paginator: (0, _paginatorReducer2.default)(state.get('paginator'), action)
	    });
	  };
	
	  var store = (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default, sagaMiddleware));
	
	  return store;
	};

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(70);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getDefaultState = function getDefaultState(sagaMiddleware, opts) {
	  var defaultState = _immutable2.default.fromJS({
	    saga: sagaMiddleware,
	    location: undefined,
	    loading: false,
	    initialized: false,
	    errorLoadingData: false,
	    errorLoadingDataMessage: 'Error loading data.',
	    loadingMessage: 'Loading data...',
	    table: {
	      data: [],
	      total: 0,
	      totalFiltered: 0,
	      onCellClicked: opts.onCellClicked,
	      getData: opts.getData,
	      renderCell: opts.renderCell,
	      sortContext: undefined
	    },
	    paginator: {
	      buttons: [],
	      showButtons: false,
	      goToPageDisabled: true,
	      firstDisabled: true,
	      lastDisabled: true,
	      previousDisabled: true,
	      nextDisabled: true,
	      totalPages: 0,
	      totalResult: 0,
	      page: 0,
	      pageSize: 0,
	      q: '',
	      qFieldValue: '',
	      goToPageValue: '',
	      debounce: {
	        timeout: undefined
	      }
	    }
	  });
	
	  return defaultState;
	};
	
	exports.default = getDefaultState;

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(84);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (state, action) {
	  switch (action.type) {
	    case _ActionType2.default.UPDATE_GO_TO_PAGE_DISABLED:
	      return state.merge({
	        goToPageDisabled: action.goToPageDisabled
	      });
	    case _ActionType2.default.UPDATE_TOTAL_RESULT_AND_PAGES_AND_LINKS:
	      return state.merge({
	        buttons: action.buttons,
	        showButtons: action.showButtons,
	        firstDisabled: action.firstDisabled,
	        lastDisabled: action.lastDisabled,
	        previousDisabled: action.previousDisabled,
	        nextDisabled: action.nextDisabled,
	        totalResult: action.totalResult,
	        totalPages: action.totalPages
	      });
	    case _ActionType2.default.START_DEBOUNCE_Q:
	      return state.mergeIn(['debounce'], { timeout: action.timeout });
	    case _ActionType2.default.INIT_Q_FIELD_VALUE:
	    case _ActionType2.default.UPDATE_Q_FIELD_VALUE:
	      return state.merge({ qFieldValue: action.qFieldValue });
	    case _ActionType2.default.UPDATE_Q:
	      return state.merge({ q: action.q });
	    case _ActionType2.default.UPDATE_GO_TO_PAGE_VALUE:
	      return state.merge({ goToPageValue: action.goToPageValue });
	    case _ActionType2.default.UPDATE_PAGE_SIZE:
	      return state.merge({ pageSize: action.pageSize });
	    case _ActionType2.default.UPDATE_PAGE:
	      return state.merge({ page: action.page });
	    default:
	      return state;
	  }
	};

/***/ },

/***/ 84:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var INITIALIZE = 'INITIALIZE';
	var SET_SORT = 'SET_SORT';
	var SET_ORDER = 'SET_ORDER';
	var LOADING = 'LOADING';
	var UPDATE_DATA = 'UPDATE_DATA';
	var ERROR_LOADING_DATA = 'ERROR_LOADING_DATA';
	var TOGGLE_SORT = 'TOGGLE_SORT';
	var INIT_LOCATION = 'INIT_LOCATION';
	var UPDATE_LOCATION = 'UPDATE_LOCATION';
	var UPDATE_Q = 'UPDATE_Q';
	var INIT_Q_FIELD_VALUE = 'INIT_Q_FIELD_VALUE';
	var UPDATE_Q_FIELD_VALUE = 'UPDATE_Q_FIELD_VALUE';
	var UPDATE_GO_TO_PAGE_VALUE = 'UPDATE_GO_TO_PAGE_VALUE';
	var UPDATE_PAGE_SIZE = 'UPDATE_PAGE_SIZE';
	var UPDATE_PAGE = 'UPDATE_PAGE';
	var START_DEBOUNCE_Q = 'START_DEBOUNCE_Q';
	var NAVIGATE_TO_PAGE = 'NAVIGATE_TO_PAGE';
	var UPDATE_TOTAL_RESULT_AND_PAGES_AND_LINKS = 'UPDATE_TOTAL_RESULT_AND_PAGES_AND_LINKS';
	var UPDATE_GO_TO_PAGE_DISABLED = 'UPDATE_GO_TO_PAGE_DISABLED';
	var UPDATE_SORT_CONTEXT = 'UPDATE_SORT_CONTEXT';
	var RESET_SORT_CONTEXT = 'RESET_SORT_CONTEXT';
	
	exports.default = {
	  INITIALIZE: INITIALIZE,
	  SET_SORT: SET_SORT,
	  SET_ORDER: SET_ORDER,
	  LOADING: LOADING,
	  UPDATE_DATA: UPDATE_DATA,
	  ERROR_LOADING_DATA: ERROR_LOADING_DATA,
	  TOGGLE_SORT: TOGGLE_SORT,
	  INIT_LOCATION: INIT_LOCATION,
	  UPDATE_LOCATION: UPDATE_LOCATION,
	  UPDATE_Q: UPDATE_Q,
	  INIT_Q_FIELD_VALUE: INIT_Q_FIELD_VALUE,
	  UPDATE_Q_FIELD_VALUE: UPDATE_Q_FIELD_VALUE,
	  UPDATE_GO_TO_PAGE_VALUE: UPDATE_GO_TO_PAGE_VALUE,
	  UPDATE_PAGE_SIZE: UPDATE_PAGE_SIZE,
	  UPDATE_PAGE: UPDATE_PAGE,
	  START_DEBOUNCE_Q: START_DEBOUNCE_Q,
	  NAVIGATE_TO_PAGE: NAVIGATE_TO_PAGE,
	  UPDATE_TOTAL_RESULT_AND_PAGES_AND_LINKS: UPDATE_TOTAL_RESULT_AND_PAGES_AND_LINKS,
	  UPDATE_GO_TO_PAGE_DISABLED: UPDATE_GO_TO_PAGE_DISABLED,
	  UPDATE_SORT_CONTEXT: UPDATE_SORT_CONTEXT,
	  RESET_SORT_CONTEXT: RESET_SORT_CONTEXT
	};

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(84);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (state, action) {
	  switch (action.type) {
	    case _ActionType2.default.UPDATE_SORT_CONTEXT:
	      return state.merge({
	        sortContext: action.sortContext
	      });
	    case _ActionType2.default.UPDATE_DATA:
	      return state.merge({
	        data: action.data,
	        total: action.total,
	        totalFiltered: action.totalFiltered
	      });
	    default:
	      return state;
	  }
	};

/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(84);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (state, action) {
	  switch (action.type) {
	    case _ActionType2.default.INIT_LOCATION:
	    case _ActionType2.default.UPDATE_LOCATION:
	      return state.merge({ location: action.location });
	    case _ActionType2.default.INITIALIZE:
	      return state.merge({ initialized: true });
	    case _ActionType2.default.LOADING:
	      return state.merge({ loading: action.loading });
	    case _ActionType2.default.ERROR_LOADING_DATA:
	      return state.merge({ errorLoadingData: true });
	    default:
	      return state;
	  }
	};

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(84);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _reduxSaga = __webpack_require__(71);
	
	var _effects = __webpack_require__(88);
	
	var _Routing = __webpack_require__(89);
	
	var _Routing2 = _interopRequireDefault(_Routing);
	
	var _StateAwareRouting = __webpack_require__(90);
	
	var _StateAwareRouting2 = _interopRequireDefault(_StateAwareRouting);
	
	var _SortSaga = __webpack_require__(91);
	
	var _SortSaga2 = _interopRequireDefault(_SortSaga);
	
	var _PaginatorSaga = __webpack_require__(92);
	
	var _PaginatorSaga2 = _interopRequireDefault(_PaginatorSaga);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [updateDataAsync, initLocation, initLocationSaga, navigateToPageSaga].map(regeneratorRuntime.mark);
	
	var startLoading = function startLoading() {
	  return {
	    type: _ActionType2.default.LOADING,
	    loading: true
	  };
	};
	
	var stopLoading = function stopLoading() {
	  return {
	    type: _ActionType2.default.LOADING,
	    loading: false
	  };
	};
	
	var initialize = function initialize() {
	  return {
	    type: _ActionType2.default.INITIALIZE
	  };
	};
	
	var errorLoadingData = function errorLoadingData() {
	  return {
	    type: _ActionType2.default.ERROR_LOADING_DATA
	  };
	};
	
	var updateData = function updateData(data) {
	  return {
	    type: _ActionType2.default.UPDATE_DATA,
	    data: data.result,
	    total: data.info.total,
	    totalFiltered: data.info.totalFiltered
	  };
	};
	
	function updateDataAsync(getState) {
	  var _this = this;
	
	  var state, _state$get$toJS, page, pageSize, q;
	
	  return regeneratorRuntime.wrap(function updateDataAsync$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          _context2.next = 2;
	          return (0, _effects.put)(startLoading());
	
	        case 2:
	          state = getState();
	          _state$get$toJS = state.get('paginator').toJS();
	          page = _state$get$toJS.page;
	          pageSize = _state$get$toJS.pageSize;
	          q = _state$get$toJS.q;
	          _context2.prev = 7;
	          return _context2.delegateYield(regeneratorRuntime.mark(function _callee() {
	            var doGetData, newPromise, data;
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	              while (1) {
	                switch (_context.prev = _context.next) {
	                  case 0:
	                    doGetData = state.get('table').get('getData');
	                    newPromise = doGetData(page, pageSize, q);
	
	
	                    newPromise[_reduxSaga.CANCEL] = function () {
	                      newPromise.cancel();
	                    };
	
	                    _context.next = 5;
	                    return (0, _effects.call)(function () {
	                      return newPromise;
	                    });
	
	                  case 5:
	                    data = _context.sent;
	                    _context.next = 8;
	                    return [(0, _effects.put)(initialize()), (0, _effects.put)(updateData(data))];
	
	                  case 8:
	                  case 'end':
	                    return _context.stop();
	                }
	              }
	            }, _callee, _this);
	          })(), 't0', 9);
	
	        case 9:
	          _context2.next = 16;
	          break;
	
	        case 11:
	          _context2.prev = 11;
	          _context2.t1 = _context2['catch'](7);
	          _context2.next = 15;
	          return (0, _effects.put)(errorLoadingData());
	
	        case 15:
	          throw _context2.t1;
	
	        case 16:
	          _context2.prev = 16;
	          _context2.next = 19;
	          return (0, _effects.put)(stopLoading());
	
	        case 19:
	          return _context2.finish(16);
	
	        case 20:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[0], this, [[7, 11, 16, 20]]);
	}
	
	function initLocation(action) {
	  var location, query, page, pageSize, q;
	  return regeneratorRuntime.wrap(function initLocation$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          location = action.location;
	          query = location.query;
	          page = void 0, pageSize = void 0, q = void 0;
	
	
	          page = query.page === undefined ? 1 : parseInt(query.page, 10);
	          pageSize = query.pageSize === undefined ? 10 : parseInt(query.pageSize, 10);
	
	          if (undefined === query.q || '' === query.q) {
	            q = '';
	          } else {
	            q = query.q;
	          }
	
	          _context3.next = 8;
	          return [(0, _effects.put)({ type: _ActionType2.default.UPDATE_Q, q: q }), (0, _effects.put)({ type: _ActionType2.default.UPDATE_PAGE, page: page }), (0, _effects.put)({ type: _ActionType2.default.UPDATE_PAGE_SIZE, pageSize: pageSize }), (0, _effects.put)({ type: _ActionType2.default.INIT_Q_FIELD_VALUE, qFieldValue: q }), (0, _effects.put)({ type: _ActionType2.default.UPDATE_SORT_CONTEXT, sortContext: query.sort })];
	
	        case 8:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _marked[1], this);
	}
	
	function initLocationSaga() {
	  return regeneratorRuntime.wrap(function initLocationSaga$(_context4) {
	    while (1) {
	      switch (_context4.prev = _context4.next) {
	        case 0:
	          return _context4.delegateYield((0, _reduxSaga.takeEvery)(_ActionType2.default.INIT_LOCATION, initLocation), 't0', 1);
	
	        case 1:
	        case 'end':
	          return _context4.stop();
	      }
	    }
	  }, _marked[2], this);
	}
	
	function navigateToPageSaga(getState) {
	  return regeneratorRuntime.wrap(function navigateToPageSaga$(_context5) {
	    while (1) {
	      switch (_context5.prev = _context5.next) {
	        case 0:
	          return _context5.delegateYield((0, _reduxSaga.takeLatest)(_ActionType2.default.NAVIGATE_TO_PAGE, updateDataAsync.bind(undefined, getState)), 't0', 1);
	
	        case 1:
	        case 'end':
	          return _context5.stop();
	      }
	    }
	  }, _marked[3], this);
	}
	
	var getMainSaga = function getMainSaga(getState, history) {
	  var stateAwareRouting = (0, _StateAwareRouting2.default)(getState, (0, _Routing2.default)(history));
	
	  return [initLocationSaga(getState), navigateToPageSaga(getState), (0, _SortSaga2.default)(getState, stateAwareRouting), (0, _PaginatorSaga2.default)(getState, stateAwareRouting)];
	};
	
	exports.default = getMainSaga;

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(81)

/***/ },

/***/ 89:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var goToPage = function goToPage(history, link) {
	  history.push(link);
	};
	
	var makeLink = function makeLink(history, location, page, pageSize, q, sortContext) {
	  var params = {};
	
	  if ('' === q) {
	    params.q = undefined;
	  } else {
	    params.q = q;
	  }
	
	  if (page > 1) {
	    params.page = page;
	  } else {
	    params.page = undefined;
	  }
	
	  if (pageSize > 10) {
	    params.pageSize = pageSize;
	  } else {
	    params.pageSize = undefined;
	  }
	
	  if (undefined === sortContext) {
	    params.sort = undefined;
	  } else {
	    params.sort = sortContext;
	  }
	
	  //Override any page and pageSize query parameters
	  var query = Object.assign({}, params, location.query, params);
	
	  return history.createPath({ pathname: location.pathname, query: query });
	};
	
	var makeRouting = function makeRouting(history) {
	  return {
	    goToPage: goToPage.bind(undefined, history),
	    makeLink: makeLink.bind(undefined, history)
	  };
	};
	
	exports.default = makeRouting;

/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(84);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _effects = __webpack_require__(88);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [navigateToPage].map(regeneratorRuntime.mark);
	
	function makeLinkFromState(makeLink, getState, pageOverride) {
	  var state = getState();
	
	  var location = state.get('location').toJS();
	
	  var _state$get$toJS = state.get('paginator').toJS();
	
	  var paginatorPage = _state$get$toJS.page;
	  var pageSize = _state$get$toJS.pageSize;
	  var q = _state$get$toJS.q;
	
	  var immutableSortContext = state.get('table').get('sortContext');
	
	  var sortContext = void 0;
	
	  if (undefined === immutableSortContext) {
	    sortContext = undefined;
	  } else {
	    sortContext = immutableSortContext.toJS();
	  }
	
	  var page = void 0;
	
	  if (undefined === pageOverride) {
	    page = paginatorPage;
	  } else {
	    page = pageOverride;
	  }
	
	  return makeLink(location, page, pageSize, q, sortContext);
	}
	
	function navigateToPage(makeLink, goToPage, getState) {
	  return regeneratorRuntime.wrap(function navigateToPage$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          goToPage(makeLinkFromState(makeLink, getState));
	
	          _context.next = 3;
	          return (0, _effects.put)({ type: _ActionType2.default.NAVIGATE_TO_PAGE });
	
	        case 3:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}
	
	var makeStateAwareRouting = function makeStateAwareRouting(getState, routing) {
	  return {
	    navigateToPage: navigateToPage.bind(undefined, routing.makeLink, routing.goToPage, getState),
	    makeLinkFromState: makeLinkFromState.bind(undefined, routing.makeLink, getState)
	  };
	};
	
	exports.default = makeStateAwareRouting;

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reduxSaga = __webpack_require__(71);
	
	var _ActionType = __webpack_require__(84);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _effects = __webpack_require__(88);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [doToggleSortSaga, updateSortContextSaga, toggleSortSaga].map(regeneratorRuntime.mark);
	
	function doToggleSortSaga(getState, action) {
	  var state, defaultOrder, sortContext, newOrder;
	  return regeneratorRuntime.wrap(function doToggleSortSaga$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          state = getState();
	
	          // const defaultOrder = undefined === defaultOrder ? 'desc' : defaultOrder
	
	          defaultOrder = 'desc';
	          sortContext = state.get('table').get('sortContext');
	          newOrder = void 0;
	
	
	          if (undefined !== sortContext && action.name === sortContext.get('sort')) {
	            if (sortContext.get('order') === 'asc') {
	              newOrder = 'desc';
	            } else {
	              newOrder = 'asc';
	            }
	          } else {
	            newOrder = defaultOrder;
	          }
	
	          _context.next = 7;
	          return (0, _effects.put)({
	            type: _ActionType2.default.UPDATE_SORT_CONTEXT,
	            sortContext: {
	              order: newOrder,
	              sort: action.name
	            }
	          });
	
	        case 7:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}
	
	function updateSortContextSaga(stateAwareRouting) {
	  return regeneratorRuntime.wrap(function updateSortContextSaga$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          return _context2.delegateYield((0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_SORT_CONTEXT, stateAwareRouting.navigateToPage), 't0', 1);
	
	        case 1:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[1], this);
	}
	
	function toggleSortSaga(getState) {
	  return regeneratorRuntime.wrap(function toggleSortSaga$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          return _context3.delegateYield((0, _reduxSaga.takeEvery)(_ActionType2.default.TOGGLE_SORT, doToggleSortSaga.bind(undefined, getState)), 't0', 1);
	
	        case 1:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _marked[2], this);
	}
	
	var getSortSaga = function getSortSaga(getState, stateAwareRouting) {
	  return [updateSortContextSaga(stateAwareRouting), toggleSortSaga(getState)];
	};
	
	exports.default = getSortSaga;

/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reduxSaga = __webpack_require__(71);
	
	var _ActionType = __webpack_require__(84);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _Common = __webpack_require__(93);
	
	var _effects = __webpack_require__(88);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [updateGoToPageDisabled, updatePaginator, updateQSaga, updatePageSaga, updatePageSizeSaga, updateGoToPageValueSaga, updateSortContextSaga, updateDataSaga].map(regeneratorRuntime.mark);
	
	function updateGoToPageDisabled(getState) {
	  var goToPageValue, goToPageDisabled;
	  return regeneratorRuntime.wrap(function updateGoToPageDisabled$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          goToPageValue = getState().get('paginator').get('goToPageValue');
	          goToPageDisabled = !((0, _Common.isPositiveInteger)(goToPageValue) && goToPageValue >= 1);
	          _context.next = 4;
	          return (0, _effects.put)({
	            type: _ActionType2.default.UPDATE_GO_TO_PAGE_DISABLED,
	            goToPageDisabled: goToPageDisabled
	          });
	
	        case 4:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}
	
	function getClassName(page, buttonPage) {
	  return page === buttonPage ? 'current' : null;
	}
	
	function updatePaginator(getState, makeLinkFromState) {
	  var state, paginator, totalFiltered, page, pageSize, totalPages, firstDisabled, lastDisabled, previousDisabled, nextDisabled, maximumPages, location, q, buttons, showButtons, addButtons, mid, paginatorLastPage;
	  return regeneratorRuntime.wrap(function updatePaginator$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          addButtons = function addButtons(from, to) {
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
	          };
	
	          state = getState();
	          paginator = state.get('paginator');
	          totalFiltered = state.get('table').get('totalFiltered');
	          page = paginator.get('page');
	          pageSize = paginator.get('pageSize');
	          totalPages = Math.ceil(totalFiltered / pageSize);
	          firstDisabled = page <= 1;
	          lastDisabled = page >= totalPages;
	          previousDisabled = firstDisabled;
	          nextDisabled = lastDisabled;
	          maximumPages = 10;
	          location = state.get('location').toJS();
	          q = paginator.get('q');
	          buttons = [];
	          showButtons = void 0;
	
	
	          if (totalPages <= maximumPages) {
	            addButtons(1, totalPages);
	          } else {
	            mid = maximumPages / 2 + 1;
	
	
	            if (page <= mid) {
	              addButtons(1, maximumPages);
	            } else if (page >= totalPages - (mid - 2)) {
	              addButtons(totalPages - (maximumPages - 1), totalPages);
	            } else {
	              paginatorLastPage = page + (mid - 2);
	
	
	              addButtons(page - (mid - 1), paginatorLastPage < totalPages ? paginatorLastPage : totalPages);
	            }
	          }
	
	          _context2.next = 19;
	          return (0, _effects.put)({
	            type: _ActionType2.default.UPDATE_TOTAL_RESULT_AND_PAGES_AND_LINKS,
	            buttons: buttons,
	            showButtons: showButtons,
	            firstDisabled: firstDisabled,
	            lastDisabled: lastDisabled,
	            nextDisabled: nextDisabled,
	            previousDisabled: previousDisabled,
	            totalPages: totalPages,
	            totalResult: totalFiltered
	          });
	
	        case 19:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[1], this);
	}
	
	function updateQSaga(stateAwareRouting) {
	  return regeneratorRuntime.wrap(function updateQSaga$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          return _context3.delegateYield((0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_Q, stateAwareRouting.navigateToPage), 't0', 1);
	
	        case 1:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _marked[2], this);
	}
	
	function updatePageSaga(getState, stateAwareRouting) {
	  return regeneratorRuntime.wrap(function updatePageSaga$(_context4) {
	    while (1) {
	      switch (_context4.prev = _context4.next) {
	        case 0:
	          _context4.next = 2;
	          return [(0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_PAGE, stateAwareRouting.navigateToPage), (0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_PAGE, updatePaginator.bind(undefined, getState, stateAwareRouting.makeLinkFromState))];
	
	        case 2:
	        case 'end':
	          return _context4.stop();
	      }
	    }
	  }, _marked[3], this);
	}
	
	function updatePageSizeSaga(getState, stateAwareRouting) {
	  return regeneratorRuntime.wrap(function updatePageSizeSaga$(_context5) {
	    while (1) {
	      switch (_context5.prev = _context5.next) {
	        case 0:
	          _context5.next = 2;
	          return [(0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_PAGE_SIZE, stateAwareRouting.navigateToPage), (0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_PAGE_SIZE, updatePaginator.bind(undefined, getState, stateAwareRouting.makeLinkFromState))];
	
	        case 2:
	        case 'end':
	          return _context5.stop();
	      }
	    }
	  }, _marked[4], this);
	}
	
	function updateGoToPageValueSaga(getState) {
	  return regeneratorRuntime.wrap(function updateGoToPageValueSaga$(_context6) {
	    while (1) {
	      switch (_context6.prev = _context6.next) {
	        case 0:
	          return _context6.delegateYield((0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_GO_TO_PAGE_VALUE, updateGoToPageDisabled.bind(undefined, getState)), 't0', 1);
	
	        case 1:
	        case 'end':
	          return _context6.stop();
	      }
	    }
	  }, _marked[5], this);
	}
	
	function updateSortContextSaga(getState, stateAwareRouting) {
	  return regeneratorRuntime.wrap(function updateSortContextSaga$(_context7) {
	    while (1) {
	      switch (_context7.prev = _context7.next) {
	        case 0:
	          return _context7.delegateYield((0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_SORT_CONTEXT, updatePaginator.bind(undefined, getState, stateAwareRouting.makeLinkFromState)), 't0', 1);
	
	        case 1:
	        case 'end':
	          return _context7.stop();
	      }
	    }
	  }, _marked[6], this);
	}
	
	function updateDataSaga(getState, stateRouting) {
	  return regeneratorRuntime.wrap(function updateDataSaga$(_context8) {
	    while (1) {
	      switch (_context8.prev = _context8.next) {
	        case 0:
	          return _context8.delegateYield((0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_DATA, updatePaginator.bind(undefined, getState, stateRouting.makeLinkFromState)), 't0', 1);
	
	        case 1:
	        case 'end':
	          return _context8.stop();
	      }
	    }
	  }, _marked[7], this);
	}
	
	var getPaginatorSaga = function getPaginatorSaga(getState, stateAwareRouting) {
	  return [updateQSaga(stateAwareRouting), updatePageSaga(getState, stateAwareRouting), updatePageSizeSaga(getState, stateAwareRouting), updateGoToPageValueSaga(getState), updateSortContextSaga(getState, stateAwareRouting), updateDataSaga(getState, stateAwareRouting)];
	};
	
	exports.default = getPaginatorSaga;

/***/ },

/***/ 93:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isInteger = function isInteger(nb) {
	  return nb === parseInt(nb, 10);
	};
	
	var isPositiveInteger = function isPositiveInteger(nb) {
	  return isInteger(nb) && nb > 0;
	};
	
	exports.isInteger = isInteger;
	exports.isPositiveInteger = isPositiveInteger;

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FullTable = __webpack_require__(95);
	
	var _FullTable2 = _interopRequireDefault(_FullTable);
	
	var _ActionCreator = __webpack_require__(101);
	
	var _ActionCreator2 = _interopRequireDefault(_ActionCreator);
	
	var _reactRedux = __webpack_require__(39);
	
	var _TableHeadThWrapper = __webpack_require__(102);
	
	var _TableHeadThWrapper2 = _interopRequireDefault(_TableHeadThWrapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getChildren = function getChildren(props) {
	  var reactTableHead = _react2.default.Children.only(props.children);
	  var reactTableHeadTr = _react2.default.Children.only(reactTableHead.props.children);
	
	  //TODO Check children classes
	
	  return _react2.default.cloneElement(reactTableHead, {
	    children: _react2.default.cloneElement(reactTableHeadTr, {
	      children: _react2.default.Children.map(reactTableHeadTr.props.children, function (reactTableHeadTh) {
	        return _react2.default.createElement(_TableHeadThWrapper2.default, reactTableHeadTh.props);
	      })
	    })
	  });
	};
	
	exports.default = function (props) {
	  return (0, _reactRedux.connect)(function (state) {
	    return {
	      loading: state.get('loading'),
	      initialized: state.get('initialized'),
	      errorLoadingData: state.get('errorLoadingData'),
	      errorLoadingDataMessage: state.get('errorLoadingDataMessage'),
	      loadingMessage: state.get('loadingMessage'),
	      table: state.get('table').toJS(),
	      children: getChildren(props)
	    };
	  }, _ActionCreator2.default)(_FullTable2.default);
	};

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(96);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _ConnectedPaginator = __webpack_require__(98);
	
	var _ConnectedPaginator2 = _interopRequireDefault(_ConnectedPaginator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FullTable = function FullTable(props) {
	  if (props.errorLoadingData) {
	    return _react2.default.createElement(
	      'div',
	      null,
	      props.errorLoadingDataMessage
	    );
	  }
	
	  if (!props.initialized && props.loading) {
	    return _react2.default.createElement(
	      'div',
	      null,
	      props.loadingMessage
	    );
	  }
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'table-wrapper' },
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      _react2.default.createElement(
	        'div',
	        { className: 'col-md-12' },
	        _react2.default.createElement(_ConnectedPaginator2.default, {
	          paginator: props.paginator,
	          pageSizeSelector: true,
	          goTo: true,
	          filtering: true })
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      _react2.default.createElement(
	        'div',
	        { className: 'col-md-12' },
	        function () {
	          if (props.loading) {
	            return _react2.default.createElement(
	              'div',
	              null,
	              props.loadingMessage
	            );
	          }
	
	          return _react2.default.createElement(
	            _Table2.default,
	            {
	              data: props.table.data,
	              renderCell: props.table.renderCell,
	              onCellClicked: props.table.onCellClicked,
	              emptyTableMessage: props.table.emptyTableMessage,
	              tableClassName: props.table.tableClassName,
	              isCellClickable: props.table.isCellClickable },
	            props.children
	          );
	        }()
	      )
	    ),
	    function () {
	      if (!props.loading) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-12' },
	            _react2.default.createElement(_ConnectedPaginator2.default, {
	              paginator: props.paginator })
	          )
	        );
	      }
	    }()
	  );
	};
	
	FullTable.propTypes = {
	  table: _react.PropTypes.object.isRequired,
	  initialized: _react.PropTypes.bool.isRequired,
	  loading: _react.PropTypes.bool.isRequired,
	  errorLoadingData: _react.PropTypes.bool.isRequired,
	  errorLoadingDataMessage: _react.PropTypes.string.isRequired,
	  loadingMessage: _react.PropTypes.string.isRequired
	};
	
	exports.default = FullTable;

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TableRow = __webpack_require__(97);
	
	var _TableRow2 = _interopRequireDefault(_TableRow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Table = function Table(props) {
	  if (0 === props.data.length) {
	    return _react2.default.createElement(
	      'div',
	      null,
	      props.emptyTableMessage
	    );
	  }
	
	  var rows = [];
	
	  props.data.forEach(function (data, rowIndex) {
	    rows.push(_react2.default.createElement(_TableRow2.default, {
	      key: rowIndex,
	      data: data,
	      rowIndex: rowIndex,
	      onCellClicked: props.onCellClicked,
	      renderCell: props.renderCell,
	      isCellClickable: props.isCellClickable }));
	  });
	
	  return _react2.default.createElement(
	    'table',
	    { className: props.tableClassName },
	    props.children,
	    _react2.default.createElement(
	      'tbody',
	      null,
	      rows
	    )
	  );
	};
	
	Table.propTypes = {
	  data: _react.PropTypes.array.isRequired,
	  emptyTableMessage: _react.PropTypes.string.isRequired,
	  tableClassName: _react.PropTypes.string.isRequired,
	  renderCell: _react.PropTypes.func,
	  onCellClicked: _react.PropTypes.func
	};
	
	Table.defaultProps = {
	  emptyTableMessage: 'No data to display with given parameters.',
	  tableClassName: 'table table-bordered'
	};
	
	exports.default = Table;

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Common = __webpack_require__(93);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TableRow = function TableRow(props) {
	  var getClassName = function getClassName(rowData, cellIndex, rowIndex) {
	    return props.isCellClickable(rowData, cellIndex, rowIndex) ? 'clickable' : '';
	  };
	
	  var rowData = props.data;
	
	  return _react2.default.createElement(
	    'tr',
	    null,
	    function () {
	      var tds = [];
	
	      rowData.forEach(function (cellData, cellIndex) {
	        tds.push(_react2.default.createElement(
	          'td',
	          {
	            key: cellIndex,
	            className: getClassName(rowData, cellIndex, props.rowIndex),
	            onClick: props.onCellClicked.bind(undefined, rowData, cellIndex, props.rowIndex) },
	          props.renderCell(cellData, cellIndex, props.rowIndex)
	        ));
	      });
	
	      return tds;
	    }()
	  );
	};
	
	TableRow.propTypes = {
	  rowIndex: function rowIndex(props, propName) {
	    var prop = props[propName];
	
	    if (!(0, _Common.isInteger)(prop)) {
	      throw new Error('Invalid rowIndex, expecting number, got ' + prop);
	    }
	  },
	  renderCell: _react.PropTypes.func.isRequired,
	  onCellClicked: _react.PropTypes.func.isRequired,
	  data: _react.PropTypes.array.isRequired
	};
	
	TableRow.defaultProps = {
	  renderCell: function renderCell(data) {
	    return data;
	  },
	  onCellClicked: function onCellClicked() {
	    return;
	  },
	  isCellClickable: function isCellClickable() {
	    return true;
	  }
	};
	
	exports.default = TableRow;

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(39);
	
	var _Paginator = __webpack_require__(99);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);
	
	var _PaginatorActionCreator = __webpack_require__(100);
	
	var _PaginatorActionCreator2 = _interopRequireDefault(_PaginatorActionCreator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  var paginator = state.get('paginator');
	
	  return {
	    buttons: paginator.get('buttons').toJS(),
	    showButtons: paginator.get('showButtons'),
	    goToPageDisabled: paginator.get('goToPageDisabled'),
	    totalPages: paginator.get('totalPages'),
	    page: paginator.get('page'),
	    pageSize: paginator.get('pageSize'),
	    qFieldValue: paginator.get('qFieldValue'),
	    goToPageValue: paginator.get('goToPageValue')
	  };
	}, _PaginatorActionCreator2.default)(_Paginator2.default);

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Paginator = function Paginator(props) {
	  var handleClick = function handleClick(page, disabled, event) {
	    event.preventDefault();
	
	    if (disabled) {
	      return;
	    }
	
	    props.updatePage(page);
	  };
	
	  var handlePageSizeChange = function handlePageSizeChange(event) {
	    props.updatePageSize(parseInt(event.target.value, 10));
	  };
	
	  var handleGoToPageChanged = function handleGoToPageChanged(event) {
	    var rawValue = event.target.value;
	
	    if ('' === rawValue) {
	      props.updateGoToPageValue('');
	    } else if (/^[0-9]+$/.test(rawValue) && rawValue >= 1) {
	      props.updateGoToPageValue(parseInt(rawValue, 10));
	    }
	  };
	
	  var handleGoToPageKeyDown = function handleGoToPageKeyDown(event) {
	    if (13 === event.keyCode) {
	      event.preventDefault();
	
	      if (props.goToPageDisabled) {
	        return;
	      }
	
	      props.updatePage(props.goToPageValue);
	    }
	  };
	
	  var handleQChanged = function handleQChanged(event) {
	    props.updateQFieldValue(event.target.value);
	  };
	
	  var handleGoToPageGoButtonClicked = function handleGoToPageGoButtonClicked(event) {
	    event.preventDefault();
	
	    if (props.goToPageDisabled) {
	      return;
	    }
	
	    props.updatePage(props.goToPageValue);
	  };
	
	  var hasFilteringFeature = props.filtering;
	  var hasGoToFeature = props.goTo;
	  var hasPageSizeSelectorFeature = props.pageSizeSelector;
	
	  var paginationFields = function () {
	    if (!(hasPageSizeSelectorFeature || hasGoToFeature || hasFilteringFeature)) {
	      return;
	    }
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      function () {
	        if (hasFilteringFeature) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'col-md-5' },
	            _react2.default.createElement(
	              'label',
	              null,
	              'Filter',
	              _react2.default.createElement('input', {
	                type: 'text',
	                className: 'form-control',
	                value: props.qFieldValue,
	                placeholder: 'Filter:',
	                onChange: handleQChanged })
	            )
	          );
	        }
	      }(),
	      function () {
	        if (hasGoToFeature) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'col-md-4' },
	            _react2.default.createElement(
	              'div',
	              { className: 'page-selector form-group' },
	              _react2.default.createElement(
	                'label',
	                null,
	                'Go to page',
	                _react2.default.createElement(
	                  'div',
	                  { className: 'input-group' },
	                  _react2.default.createElement('input', {
	                    type: 'text',
	                    className: 'form-control',
	                    placeholder: 'Page:',
	                    value: props.goToPageValue,
	                    onChange: handleGoToPageChanged,
	                    onKeyDown: handleGoToPageKeyDown }),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'input-group-btn' },
	                    _react2.default.createElement(
	                      'button',
	                      {
	                        className: 'btn btn-default ',
	                        disabled: props.goToPageDisabled,
	                        onClick: handleGoToPageGoButtonClicked },
	                      'Go'
	                    )
	                  )
	                )
	              )
	            )
	          );
	        }
	      }(),
	      function () {
	        if (hasPageSizeSelectorFeature) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'col-md-3' },
	            _react2.default.createElement(
	              'div',
	              { className: 'page-size-selector form-group' },
	              _react2.default.createElement(
	                'label',
	                null,
	                'Page size ',
	                _react2.default.createElement(
	                  'select',
	                  {
	                    className: 'form-control',
	                    value: props.pageSize,
	                    onChange: handlePageSizeChange },
	                  _react2.default.createElement(
	                    'option',
	                    { value: 10 },
	                    '10'
	                  ),
	                  _react2.default.createElement(
	                    'option',
	                    { value: 25 },
	                    '25'
	                  ),
	                  _react2.default.createElement(
	                    'option',
	                    { value: 50 },
	                    '50'
	                  ),
	                  _react2.default.createElement(
	                    'option',
	                    { value: 100 },
	                    '100'
	                  )
	                )
	              )
	            )
	          );
	        }
	      }()
	    );
	  }();
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'paginator-wrapper' },
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      _react2.default.createElement(
	        'div',
	        { className: 'col-md-4' },
	        paginationFields
	      ),
	      function () {
	        if (props.showButtons) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'col-md-8' },
	            _react2.default.createElement(
	              'ul',
	              { className: 'pagination pull-right' },
	              function () {
	                var rows = [];
	
	                var addPageButton = function addPageButton(page, key, content, link, className, disabled) {
	                  rows.push(_react2.default.createElement(
	                    'li',
	                    {
	                      key: key,
	                      className: className },
	                    _react2.default.createElement(
	                      'a',
	                      {
	                        disabled: disabled,
	                        href: link,
	                        onClick: handleClick.bind(undefined, page, disabled) },
	                      _react2.default.createElement(
	                        'span',
	                        null,
	                        content
	                      )
	                    )
	                  ));
	                };
	
	                props.buttons.forEach(function (button) {
	                  addPageButton(button.page, button.key, button.content, button.link, button.className, button.disabled);
	                });
	
	                return rows;
	              }()
	            )
	          );
	        }
	      }()
	    )
	  );
	};
	
	Paginator.propTypes = {
	  buttons: _react.PropTypes.array.isRequired,
	  showButtons: _react.PropTypes.bool.isRequired,
	  goToPageDisabled: _react.PropTypes.bool.isRequired,
	  page: _react.PropTypes.number.isRequired,
	  pageSize: _react.PropTypes.number.isRequired,
	  qFieldValue: _react.PropTypes.string.isRequired,
	  goToPageValue: _react.PropTypes.any.isRequired,
	  updateQFieldValue: _react.PropTypes.func.isRequired,
	  updateGoToPageValue: _react.PropTypes.func.isRequired,
	  updatePageSize: _react.PropTypes.func.isRequired,
	  updatePage: _react.PropTypes.func.isRequired,
	  pageSizeSelector: _react.PropTypes.bool.isRequired,
	  goTo: _react.PropTypes.bool.isRequired,
	  filtering: _react.PropTypes.bool.isRequired
	};
	
	Paginator.defaultProps = {
	  pageSizeSelector: false,
	  goTo: false,
	  filtering: false
	};
	
	exports.default = Paginator;

/***/ },

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(84);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function startDebounceQ(timeout) {
	  return {
	    type: _ActionType2.default.START_DEBOUNCE_Q,
	    timeout: timeout
	  };
	}
	
	function updateGoToPageValue(goToPageValue) {
	  return {
	    type: _ActionType2.default.UPDATE_GO_TO_PAGE_VALUE,
	    goToPageValue: goToPageValue
	  };
	}
	
	function updatePage(page) {
	  return {
	    type: _ActionType2.default.UPDATE_PAGE,
	    page: page
	  };
	}
	
	function updatePageSize(pageSize) {
	  return function (dispatch) {
	    dispatch({
	      type: _ActionType2.default.UPDATE_PAGE_SIZE,
	      pageSize: pageSize
	    });
	
	    dispatch(updatePage(1));
	    dispatch(updateGoToPageValue(''));
	  };
	}
	
	function updateQ(q) {
	  return function (dispatch, getState) {
	    clearTimeout(getState().get('paginator').get('debounce').get('timeout'));
	
	    dispatch(startDebounceQ(setTimeout(function () {
	      dispatch({
	        type: _ActionType2.default.UPDATE_Q,
	        q: q
	      });
	
	      dispatch(updatePage(1));
	      dispatch(updateGoToPageValue(''));
	    }, 300)));
	  };
	}
	
	function doUpdateQFieldValue(qFieldValue) {
	  return {
	    type: _ActionType2.default.UPDATE_Q_FIELD_VALUE,
	    qFieldValue: qFieldValue
	  };
	}
	
	function updateQFieldValue(qFieldValue) {
	  return function (dispatch) {
	    dispatch(doUpdateQFieldValue(qFieldValue));
	
	    dispatch(updateQ(qFieldValue));
	  };
	}
	
	exports.default = {
	  updateQFieldValue: updateQFieldValue,
	  updateGoToPageValue: updateGoToPageValue,
	  updatePageSize: updatePageSize,
	  updatePage: updatePage
	};

/***/ },

/***/ 101:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function onCellClicked() {
	  console.log('clicked');
	}
	
	exports.default = { onCellClicked: onCellClicked };

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _TableHeadTh = __webpack_require__(103);
	
	var _TableHeadTh2 = _interopRequireDefault(_TableHeadTh);
	
	var _TableHeadThActionCreator = __webpack_require__(104);
	
	var _TableHeadThActionCreator2 = _interopRequireDefault(_TableHeadThActionCreator);
	
	var _reactRedux = __webpack_require__(39);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  var immutableSortContext = state.get('table').get('sortContext');
	
	  var sortContext = void 0;
	
	  if (undefined === immutableSortContext) {
	    sortContext = undefined;
	  } else {
	    sortContext = immutableSortContext.toJS();
	  }
	
	  return {
	    sortContext: sortContext
	  };
	}, _TableHeadThActionCreator2.default)(_TableHeadTh2.default);

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TableHeadTh = function TableHeadTh(props) {
	  var isCurrentSort = function isCurrentSort() {
	    return undefined !== props.sortContext && props.sortContext.sort === props.name;
	  };
	
	  var getIcon = function getIcon() {
	    var sortContext = props.sortContext;
	    var className = 'glyphicon glyphicon-';
	
	    if (undefined !== sortContext && sortContext.sort === props.name) {
	      if (sortContext.order === 'asc') {
	        className += 'arrow-up';
	      } else {
	        className += 'arrow-down';
	      }
	    } else {
	      className += 'sort';
	    }
	
	    return _react2.default.createElement('i', { className: className });
	  };
	
	  var getClassName = function getClassName() {
	    return props.sortable ? 'sortable' : '';
	  };
	
	  var handleOnClick = function handleOnClick() {
	    var sortableProp = props.sortable;
	
	    if (sortableProp) {
	      props.toggleSort(props.name);
	    }
	  };
	
	  var handleResetSortContextClicked = function handleResetSortContextClicked(event) {
	    event.stopPropagation();
	
	    props.resetSortContext();
	  };
	
	  return _react2.default.createElement(
	    'th',
	    {
	      className: getClassName(),
	      onClick: handleOnClick },
	    props.children,
	    function () {
	      if (props.sortable) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'pull-right' },
	          function () {
	            if (isCurrentSort()) {
	              return _react2.default.createElement('i', {
	                className: 'glyphicon glyphicon-remove',
	                onClick: handleResetSortContextClicked });
	            }
	          }(),
	          ' ',
	          getIcon()
	        );
	      }
	    }()
	  );
	};
	
	TableHeadTh.propTypes = {
	  sortable: _react.PropTypes.any.isRequired,
	  name: _react.PropTypes.string,
	  toggleSort: _react.PropTypes.func, //.isRequired
	  resetSortContext: _react.PropTypes.func,
	  sortContext: _react.PropTypes.shape({
	    sort: _react.PropTypes.string,
	    order: _react.PropTypes.string
	  }) //.isRequired
	};
	
	TableHeadTh.defaultProps = {
	  sortable: false
	};
	
	exports.default = TableHeadTh;

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(84);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionCreator = __webpack_require__(101);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function resetSortContext() {
	  return {
	    type: _ActionType2.default.UPDATE_SORT_CONTEXT,
	    sortContext: undefined
	  };
	}
	
	function toggleSort(name) {
	  return {
	    type: _ActionType2.default.TOGGLE_SORT,
	    name: name
	  };
	}
	
	exports.default = {
	  toggleSort: toggleSort,
	  resetSortContext: resetSortContext
	};

/***/ },

/***/ 105:
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

/***/ 106:
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
	    null,
	    props.children
	  );
	};

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRouter = __webpack_require__(109);
	
	var _history = __webpack_require__(174);
	
	var _qs = __webpack_require__(178);
	
	var _qs2 = _interopRequireDefault(_qs);
	
	var _bluebird = __webpack_require__(107);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _reactDom = __webpack_require__(182);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_bluebird2.default.config({
	  warnings: true,
	  longStackTraces: true,
	  cancellation: true
	});
	
	exports.default = function (cb) {
	  var browserHistory = (0, _reactRouter.useRouterHistory)(_history.createHistory)({
	    parseQueryString: _qs2.default.parse,
	    stringifyQuery: _qs2.default.stringify
	  });
	
	  cb(browserHistory, _reactDom.render);
	};

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deprecate = __webpack_require__(135);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var _createLocation2 = __webpack_require__(133);
	
	var _createLocation3 = _interopRequireDefault(_createLocation2);
	
	var _createBrowserHistory = __webpack_require__(170);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	exports.createHistory = _createBrowserHistory2['default'];
	
	var _createHashHistory2 = __webpack_require__(119);
	
	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);
	
	exports.createHashHistory = _createHashHistory3['default'];
	
	var _createMemoryHistory2 = __webpack_require__(166);
	
	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);
	
	exports.createMemoryHistory = _createMemoryHistory3['default'];
	
	var _useBasename2 = __webpack_require__(165);
	
	var _useBasename3 = _interopRequireDefault(_useBasename2);
	
	exports.useBasename = _useBasename3['default'];
	
	var _useBeforeUnload2 = __webpack_require__(175);
	
	var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);
	
	exports.useBeforeUnload = _useBeforeUnload3['default'];
	
	var _useQueries2 = __webpack_require__(136);
	
	var _useQueries3 = _interopRequireDefault(_useQueries2);
	
	exports.useQueries = _useQueries3['default'];
	
	var _Actions2 = __webpack_require__(122);
	
	var _Actions3 = _interopRequireDefault(_Actions2);
	
	exports.Actions = _Actions3['default'];
	
	// deprecated
	
	var _enableBeforeUnload2 = __webpack_require__(176);
	
	var _enableBeforeUnload3 = _interopRequireDefault(_enableBeforeUnload2);
	
	exports.enableBeforeUnload = _enableBeforeUnload3['default'];
	
	var _enableQueries2 = __webpack_require__(177);
	
	var _enableQueries3 = _interopRequireDefault(_enableQueries2);
	
	exports.enableQueries = _enableQueries3['default'];
	var createLocation = _deprecate2['default'](_createLocation3['default'], 'Using createLocation without a history instance is deprecated; please use history.createLocation instead');
	exports.createLocation = createLocation;

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(120);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _ExecutionEnvironment = __webpack_require__(124);
	
	var _DOMUtils = __webpack_require__(125);
	
	var _deprecate = __webpack_require__(135);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	function startBeforeUnloadListener(getBeforeUnloadPromptMessage) {
	  function listener(event) {
	    var message = getBeforeUnloadPromptMessage();
	
	    if (typeof message === 'string') {
	      (event || window.event).returnValue = message;
	      return message;
	    }
	  }
	
	  _DOMUtils.addEventListener(window, 'beforeunload', listener);
	
	  return function () {
	    _DOMUtils.removeEventListener(window, 'beforeunload', listener);
	  };
	}
	
	/**
	 * Returns a new createHistory function that can be used to create
	 * history objects that know how to use the beforeunload event in web
	 * browsers to cancel navigation.
	 */
	function useBeforeUnload(createHistory) {
	  return function (options) {
	    var history = createHistory(options);
	
	    var stopBeforeUnloadListener = undefined;
	    var beforeUnloadHooks = [];
	
	    function getBeforeUnloadPromptMessage() {
	      var message = undefined;
	
	      for (var i = 0, len = beforeUnloadHooks.length; message == null && i < len; ++i) {
	        message = beforeUnloadHooks[i].call();
	      }return message;
	    }
	
	    function listenBeforeUnload(hook) {
	      beforeUnloadHooks.push(hook);
	
	      if (beforeUnloadHooks.length === 1) {
	        if (_ExecutionEnvironment.canUseDOM) {
	          stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	        } else {
	          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'listenBeforeUnload only works in DOM environments') : undefined;
	        }
	      }
	
	      return function () {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });
	
	        if (beforeUnloadHooks.length === 0 && stopBeforeUnloadListener) {
	          stopBeforeUnloadListener();
	          stopBeforeUnloadListener = null;
	        }
	      };
	    }
	
	    // deprecated
	    function registerBeforeUnloadHook(hook) {
	      if (_ExecutionEnvironment.canUseDOM && beforeUnloadHooks.indexOf(hook) === -1) {
	        beforeUnloadHooks.push(hook);
	
	        if (beforeUnloadHooks.length === 1) stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	      }
	    }
	
	    // deprecated
	    function unregisterBeforeUnloadHook(hook) {
	      if (beforeUnloadHooks.length > 0) {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });
	
	        if (beforeUnloadHooks.length === 0) stopBeforeUnloadListener();
	      }
	    }
	
	    return _extends({}, history, {
	      listenBeforeUnload: listenBeforeUnload,
	
	      registerBeforeUnloadHook: _deprecate2['default'](registerBeforeUnloadHook, 'registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead'),
	      unregisterBeforeUnloadHook: _deprecate2['default'](unregisterBeforeUnloadHook, 'unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead')
	    });
	  };
	}
	
	exports['default'] = useBeforeUnload;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deprecate = __webpack_require__(135);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var _useBeforeUnload = __webpack_require__(175);
	
	var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);
	
	exports['default'] = _deprecate2['default'](_useBeforeUnload2['default'], 'enableBeforeUnload is deprecated, use useBeforeUnload instead');
	module.exports = exports['default'];

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deprecate = __webpack_require__(135);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var _useQueries = __webpack_require__(136);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	exports['default'] = _deprecate2['default'](_useQueries2['default'], 'enableQueries is deprecated, use useQueries instead');
	module.exports = exports['default'];

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stringify = __webpack_require__(179);
	var Parse = __webpack_require__(181);
	
	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(180);
	
	var arrayPrefixGenerators = {
	    brackets: function brackets(prefix) {
	        return prefix + '[]';
	    },
	    indices: function indices(prefix, key) {
	        return prefix + '[' + key + ']';
	    },
	    repeat: function repeat(prefix) {
	        return prefix;
	    }
	};
	
	var defaults = {
	    delimiter: '&',
	    strictNullHandling: false,
	    skipNulls: false,
	    encode: true,
	    encoder: Utils.encode
	};
	
	var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots) {
	    var obj = object;
	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    } else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    } else if (obj === null) {
	        if (strictNullHandling) {
	            return encoder ? encoder(prefix) : prefix;
	        }
	
	        obj = '';
	    }
	
	    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || Utils.isBuffer(obj)) {
	        if (encoder) {
	            return [encoder(prefix) + '=' + encoder(obj)];
	        }
	        return [prefix + '=' + String(obj)];
	    }
	
	    var values = [];
	
	    if (typeof obj === 'undefined') {
	        return values;
	    }
	
	    var objKeys;
	    if (Array.isArray(filter)) {
	        objKeys = filter;
	    } else {
	        var keys = Object.keys(obj);
	        objKeys = sort ? keys.sort(sort) : keys;
	    }
	
	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];
	
	        if (skipNulls && obj[key] === null) {
	            continue;
	        }
	
	        if (Array.isArray(obj)) {
	            values = values.concat(stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots));
	        } else {
	            values = values.concat(stringify(obj[key], prefix + (allowDots ? '.' + key : '[' + key + ']'), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots));
	        }
	    }
	
	    return values;
	};
	
	module.exports = function (object, opts) {
	    var obj = object;
	    var options = opts || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
	    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
	    var encoder = encode ? (typeof options.encoder === 'function' ? options.encoder : defaults.encoder) : null;
	    var sort = typeof options.sort === 'function' ? options.sort : null;
	    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
	    var objKeys;
	    var filter;
	
	    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
	        throw new TypeError('Encoder has to be a function.');
	    }
	
	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    } else if (Array.isArray(options.filter)) {
	        objKeys = filter = options.filter;
	    }
	
	    var keys = [];
	
	    if (typeof obj !== 'object' || obj === null) {
	        return '';
	    }
	
	    var arrayFormat;
	    if (options.arrayFormat in arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    } else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    } else {
	        arrayFormat = 'indices';
	    }
	
	    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
	
	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }
	
	    if (sort) {
	        objKeys.sort(sort);
	    }
	
	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];
	
	        if (skipNulls && obj[key] === null) {
	            continue;
	        }
	
	        keys = keys.concat(stringify(obj[key], key, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots));
	    }
	
	    return keys.join(delimiter);
	};


/***/ },

/***/ 180:
/***/ function(module, exports) {

	'use strict';
	
	var hexTable = (function () {
	    var array = new Array(256);
	    for (var i = 0; i < 256; ++i) {
	        array[i] = '%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase();
	    }
	
	    return array;
	}());
	
	exports.arrayToObject = function (source, options) {
	    var obj = options.plainObjects ? Object.create(null) : {};
	    for (var i = 0; i < source.length; ++i) {
	        if (typeof source[i] !== 'undefined') {
	            obj[i] = source[i];
	        }
	    }
	
	    return obj;
	};
	
	exports.merge = function (target, source, options) {
	    if (!source) {
	        return target;
	    }
	
	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        } else if (typeof target === 'object') {
	            target[source] = true;
	        } else {
	            return [target, source];
	        }
	
	        return target;
	    }
	
	    if (typeof target !== 'object') {
	        return [target].concat(source);
	    }
	
	    var mergeTarget = target;
	    if (Array.isArray(target) && !Array.isArray(source)) {
	        mergeTarget = exports.arrayToObject(target, options);
	    }
	
	    return Object.keys(source).reduce(function (acc, key) {
	        var value = source[key];
	
	        if (Object.prototype.hasOwnProperty.call(acc, key)) {
	            acc[key] = exports.merge(acc[key], value, options);
	        } else {
	            acc[key] = value;
	        }
	        return acc;
	    }, mergeTarget);
	};
	
	exports.decode = function (str) {
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};
	
	exports.encode = function (str) {
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }
	
	    var string = typeof str === 'string' ? str : String(str);
	
	    var out = '';
	    for (var i = 0; i < string.length; ++i) {
	        var c = string.charCodeAt(i);
	
	        if (
	            c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A) // A-Z
	        ) {
	            out += string.charAt(i);
	            continue;
	        }
	
	        if (c < 0x80) {
	            out = out + hexTable[c];
	            continue;
	        }
	
	        if (c < 0x800) {
	            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }
	
	        if (c < 0xD800 || c >= 0xE000) {
	            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }
	
	        i += 1;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
	        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)];
	    }
	
	    return out;
	};
	
	exports.compact = function (obj, references) {
	    if (typeof obj !== 'object' || obj === null) {
	        return obj;
	    }
	
	    var refs = references || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }
	
	    refs.push(obj);
	
	    if (Array.isArray(obj)) {
	        var compacted = [];
	
	        for (var i = 0; i < obj.length; ++i) {
	            if (obj[i] && typeof obj[i] === 'object') {
	                compacted.push(exports.compact(obj[i], refs));
	            } else if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }
	
	        return compacted;
	    }
	
	    var keys = Object.keys(obj);
	    for (var j = 0; j < keys.length; ++j) {
	        var key = keys[j];
	        obj[key] = exports.compact(obj[key], refs);
	    }
	
	    return obj;
	};
	
	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};
	
	exports.isBuffer = function (obj) {
	    if (obj === null || typeof obj === 'undefined') {
	        return false;
	    }
	
	    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
	};


/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(180);
	
	var has = Object.prototype.hasOwnProperty;
	
	var defaults = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000,
	    strictNullHandling: false,
	    plainObjects: false,
	    allowPrototypes: false,
	    allowDots: false,
	    decoder: Utils.decode
	};
	
	var parseValues = function parseValues(str, options) {
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);
	
	    for (var i = 0; i < parts.length; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;
	
	        var key, val;
	        if (pos === -1) {
	            key = options.decoder(part);
	            val = options.strictNullHandling ? null : '';
	        } else {
	            key = options.decoder(part.slice(0, pos));
	            val = options.decoder(part.slice(pos + 1));
	        }
	        if (has.call(obj, key)) {
	            obj[key] = [].concat(obj[key]).concat(val);
	        } else {
	            obj[key] = val;
	        }
	    }
	
	    return obj;
	};
	
	var parseObject = function parseObject(chain, val, options) {
	    if (!chain.length) {
	        return val;
	    }
	
	    var root = chain.shift();
	
	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(parseObject(chain, val, options));
	    } else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        if (
	            !isNaN(index) &&
	            root !== cleanRoot &&
	            String(index) === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays && index <= options.arrayLimit)
	        ) {
	            obj = [];
	            obj[index] = parseObject(chain, val, options);
	        } else {
	            obj[cleanRoot] = parseObject(chain, val, options);
	        }
	    }
	
	    return obj;
	};
	
	var parseKeys = function parseKeys(givenKey, val, options) {
	    if (!givenKey) {
	        return;
	    }
	
	    // Transform dot notation to bracket notation
	    var key = options.allowDots ? givenKey.replace(/\.([^\.\[]+)/g, '[$1]') : givenKey;
	
	    // The regex chunks
	
	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;
	
	    // Get the parent
	
	    var segment = parent.exec(key);
	
	    // Stash the parent if it exists
	
	    var keys = [];
	    if (segment[1]) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects && has.call(Object.prototype, segment[1])) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }
	
	        keys.push(segment[1]);
	    }
	
	    // Loop through children appending to the array until we hit depth
	
	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	        i += 1;
	        if (!options.plainObjects && has.call(Object.prototype, segment[1].replace(/\[|\]/g, ''))) {
	            if (!options.allowPrototypes) {
	                continue;
	            }
	        }
	        keys.push(segment[1]);
	    }
	
	    // If there's a remainder, just add whatever is left
	
	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }
	
	    return parseObject(keys, val, options);
	};
	
	module.exports = function (str, opts) {
	    var options = opts || {};
	
	    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
	        throw new TypeError('Decoder has to be a function.');
	    }
	
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
	    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	
	    if (str === '' || str === null || typeof str === 'undefined') {
	        return options.plainObjects ? Object.create(null) : {};
	    }
	
	    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
	    var obj = options.plainObjects ? Object.create(null) : {};
	
	    // Iterate over the keys and setup the new object
	
	    var keys = Object.keys(tempObj);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var newObj = parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj, options);
	    }
	
	    return Utils.compact(obj);
	};


/***/ }

});
//# sourceMappingURL=exampleErrorRetrievingData.js.map