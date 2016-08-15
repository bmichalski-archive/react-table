webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _sampleResult = __webpack_require__(1);
	
	var _sampleResult2 = _interopRequireDefault(_sampleResult);
	
	var _commonExample = __webpack_require__(36);
	
	var _commonExample2 = _interopRequireDefault(_commonExample);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _commonExample2.default)(_sampleResult2.default, 2000);

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var result = [[{
	  content: 0
	}, {
	  content: 'Foo'
	}, {
	  content: 'Bar'
	}], [{
	  content: 1
	}, {
	  content: 'Baz'
	}, {
	  content: 'Qux'
	}], [{
	  content: 2
	}, {
	  content: _react2.default.createElement('i', { className: 'glyphicon glyphicon-ok' })
	}, {
	  content: _react2.default.createElement('i', { className: 'glyphicon glyphicon-star' })
	}]];
	
	for (var i = 3; i < 153; i += 1) {
	  result.push([{
	    content: i
	  }, {
	    content: 'Foo'
	  }, {
	    content: 'Bar'
	  }]);
	}
	
	exports.default = result;

/***/ },

/***/ 36:
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
	
	var _bluebird = __webpack_require__(327);
	
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

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(241);
	
	var _bluebird = __webpack_require__(327);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DemoTableWrapper = function DemoTableWrapper(props) {
	  // <TableHead>
	  //   <TableHeadRow>
	  //     <TableHeadTh sortable name="id">Id</TableHeadTh>
	  //     <TableHeadTh sortable={ { defaultOrder: 'asc' } } name="firstColumn">First column</TableHeadTh>
	  //     <TableHeadTh>Second column</TableHeadTh>
	  //   </TableHeadRow>
	  // </TableHead>
	
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
	      fetchData: function fetchData() {
	        var sampleResult = props.sampleResult;
	        var loadingDelay = props.loadingDelay;
	        var opts = {
	          page: 1,
	          pageSize: 10,
	          q: '',
	          sort: undefined
	        };
	
	        var page = opts.page;
	        var pageSize = opts.pageSize;
	        var q = opts.q;
	        var sort = opts.sort;
	
	
	        var from = (page - 1) * pageSize;
	        var end = from + pageSize;
	
	        return new _bluebird2.default(function (resolve, reject, onCancel) {
	          var canceled = false;
	
	          var timeoutHandle = void 0;
	
	          onCancel(function () {
	            clearTimeout(timeoutHandle);
	
	            console.log('getData: canceled');
	          });
	
	          timeoutHandle = setTimeout(function () {
	            if (canceled) {
	              return;
	            }
	
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
	
	              resolve({
	                result: result,
	                info: {
	                  total: result.length,
	                  filteredTotal: filteredResults.length
	                }
	              });
	            } catch (err) {
	              reject(err);
	            }
	          }, loadingDelay);
	        });
	      }
	    }
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
	      opts: opts,
	      location: props.location })
	  );
	};
	
	DemoTableWrapper.propTypes = {
	  sampleResult: _react2.default.PropTypes.array,
	  loadingDelay: _react2.default.PropTypes.number.isRequired
	};
	
	DemoTableWrapper.defaultProps = {
	  loadingDelay: 200
	};
	
	exports.default = DemoTableWrapper;

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Table = undefined;
	
	var _TableWithStore = __webpack_require__(242);
	
	var _TableWithStore2 = _interopRequireDefault(_TableWithStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import TableHead from './Component/Connected/ConnectedTableHead'
	// import TableHeadRow from './Component/Connected/ConnectedTableHeadRow'
	// import TableHeadTh from './Component/Connected/ConnectedTableHeadTh'
	// import makeTableWrapper from './Component/MakeTableWrapper'
	
	exports.Table = _TableWithStore2.default;

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TableWrappedWithProvider = __webpack_require__(243);
	
	var _TableWrappedWithProvider2 = _interopRequireDefault(_TableWrappedWithProvider);
	
	var _ModuleLoader = __webpack_require__(277);
	
	var _ModuleLoader2 = _interopRequireDefault(_ModuleLoader);
	
	var _TableModule = __webpack_require__(294);
	
	var _TableModule2 = _interopRequireDefault(_TableModule);
	
	var _DataModule = __webpack_require__(314);
	
	var _DataModule2 = _interopRequireDefault(_DataModule);
	
	var _AsyncDataModule = __webpack_require__(317);
	
	var _AsyncDataModule2 = _interopRequireDefault(_AsyncDataModule);
	
	var _ParseDataModule = __webpack_require__(319);
	
	var _ParseDataModule2 = _interopRequireDefault(_ParseDataModule);
	
	var _PaginatorModule = __webpack_require__(320);
	
	var _PaginatorModule2 = _interopRequireDefault(_PaginatorModule);
	
	var _SortModule = __webpack_require__(321);
	
	var _SortModule2 = _interopRequireDefault(_SortModule);
	
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
	
	      var _moduleLoader = (0, _ModuleLoader2.default)(props.opts, _TableModule2.default, _DataModule2.default, _AsyncDataModule2.default, _ParseDataModule2.default, _PaginatorModule2.default, _SortModule2.default);
	
	      var store = _moduleLoader.store;
	      var components = _moduleLoader.components;
	      var beforeTableComponents = _moduleLoader.beforeTableComponents;
	
	
	      this._store = store;
	      this._components = components;
	      this._beforeTableComponents = beforeTableComponents;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var store = this._store;
	      var Table = this._components.table.Table;
	
	      var renderBeforeTableComponents = function renderBeforeTableComponents() {
	        return _this2._beforeTableComponents.map(function (component, i) {
	          return _react2.default.createElement(
	            'div',
	            { key: i },
	            component
	          );
	        });
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'table-wrapper' },
	        renderBeforeTableComponents(),
	        _react2.default.createElement(Table, { store: store })
	      );
	    }
	  }]);
	
	  return TableWithStore;
	}(_react.Component);
	
	exports.default = TableWithStore;

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(244);
	
	var _ConnectedFullTable = __webpack_require__(267);
	
	var _ConnectedFullTable2 = _interopRequireDefault(_ConnectedFullTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: props.store },
	    _react2.default.createElement(
	      _ConnectedFullTable2.default,
	      null,
	      props.children
	    )
	  );
	};

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FullTable = __webpack_require__(268);
	
	var _FullTable2 = _interopRequireDefault(_FullTable);
	
	var _ActionCreator = __webpack_require__(276);
	
	var _ActionCreator2 = _interopRequireDefault(_ActionCreator);
	
	var _reactRedux = __webpack_require__(244);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    loading: state.get('loading'),
	    initialized: state.get('initialized'),
	    errorLoadingData: state.get('errorLoadingData'),
	    errorLoadingDataMessage: state.get('errorLoadingDataMessage'),
	    loadingMessage: state.get('loadingMessage'),
	    table: state.get('table').toJS(),
	    renderCell: state.get('opts').get('table').get('renderCell')
	  };
	}, _ActionCreator2.default)(_FullTable2.default);

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(269);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _ConnectedPaginator = __webpack_require__(272);
	
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
	              body: props.table.body,
	              renderCell: props.renderCell,
	              onTableBodyCellClicked: props.onTableBodyCellClicked,
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
	  renderCell: _react.PropTypes.func,
	  onTableBodyCellClicked: _react.PropTypes.func,
	  initialized: _react.PropTypes.bool.isRequired,
	  loading: _react.PropTypes.bool.isRequired,
	  errorLoadingData: _react.PropTypes.bool.isRequired,
	  errorLoadingDataMessage: _react.PropTypes.string.isRequired,
	  loadingMessage: _react.PropTypes.string.isRequired
	};
	
	exports.default = FullTable;

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TableRow = __webpack_require__(270);
	
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
	    var rowProps = props.body.rows[rowIndex];
	    var className = undefined === rowProps ? undefined : rowProps.className;
	    var cells = undefined === rowProps || undefined === rowProps.cells ? {} : rowProps.cells;
	
	    rows.push(_react2.default.createElement(_TableRow2.default, {
	      key: rowIndex,
	      className: className,
	      data: data,
	      rowIndex: rowIndex,
	      cells: cells,
	      onTableBodyCellClicked: props.onTableBodyCellClicked,
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
	  body: _react.PropTypes.shape({
	    rows: _react.PropTypes.object.isRequired
	  }).isRequired,
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

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Common = __webpack_require__(271);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TableRow = function TableRow(props) {
	  var rowData = props.data;
	
	  return _react2.default.createElement(
	    'tr',
	    { className: props.className },
	    function () {
	      var tds = [];
	
	      rowData.forEach(function (cellData, cellIndex) {
	        var cellProps = props.cells[cellIndex];
	        var className = undefined === cellProps ? undefined : cellProps.className;
	
	        tds.push(_react2.default.createElement(
	          'td',
	          {
	            key: cellIndex,
	            className: className,
	            onClick: props.onTableBodyCellClicked.bind(undefined, rowData, cellIndex, props.rowIndex) },
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
	  onTableBodyCellClicked: _react.PropTypes.func.isRequired,
	  data: _react.PropTypes.array.isRequired,
	  className: _react.PropTypes.string,
	  cells: _react.PropTypes.object.isRequired
	};
	
	TableRow.defaultProps = {
	  renderCell: function renderCell(data) {
	    return data;
	  }
	};
	
	exports.default = TableRow;

/***/ },

/***/ 271:
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

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(244);
	
	var _Paginator = __webpack_require__(273);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);
	
	var _PaginatorActionCreator = __webpack_require__(274);
	
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

/***/ 273:
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

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(275);
	
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

/***/ 275:
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
	var UPDATE_HEAD_ROWS = 'UPDATE_HEAD_ROWS';
	var UPDATE_BODY_ROWS = 'UPDATE_BODY_ROWS';
	var TABLE_BODY_CELL_CLICKED = 'TABLE_BODY_CELL_CLICKED';
	var TABLE_HEAD_INIT_CHILDREN = 'TABLE_HEAD_INIT_CHILDREN';
	var UPDATE_HEAD_CELL = 'UPDATE_HEAD_CELL';
	
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
	  RESET_SORT_CONTEXT: RESET_SORT_CONTEXT,
	  UPDATE_HEAD_ROWS: UPDATE_HEAD_ROWS,
	  UPDATE_BODY_ROWS: UPDATE_BODY_ROWS,
	  TABLE_BODY_CELL_CLICKED: TABLE_BODY_CELL_CLICKED,
	  TABLE_HEAD_INIT_CHILDREN: TABLE_HEAD_INIT_CHILDREN,
	  UPDATE_HEAD_CELL: UPDATE_HEAD_CELL
	};

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(275);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function onTableBodyCellClicked(rowData, cellIndex, rowIndex) {
	  return {
	    type: _ActionType2.default.TABLE_BODY_CELL_CLICKED,
	    rowData: rowData,
	    cellIndex: cellIndex,
	    rowIndex: rowIndex
	  };
	}
	
	exports.default = { onTableBodyCellClicked: onTableBodyCellClicked };

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reduxImmutable = __webpack_require__(278);
	
	var _redux = __webpack_require__(251);
	
	var _reduxThunk = __webpack_require__(285);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _assert = __webpack_require__(286);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _ActionFilter = __webpack_require__(290);
	
	var _ActionFilter2 = _interopRequireDefault(_ActionFilter);
	
	var _ActionListener = __webpack_require__(291);
	
	var _ActionListener2 = _interopRequireDefault(_ActionListener);
	
	var _lodash = __webpack_require__(292);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (opts) {
	  for (var _len = arguments.length, modules = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    modules[_key - 1] = arguments[_key];
	  }
	
	  var reducers = {};
	  var components = {};
	  var actionFilterCallbacks = {};
	  var actionListenerCallbacks = {};
	  var bootFunctions = {};
	  var beforeTableComponents = [];
	
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
	      bootFunctions[moduleName] = moduleDefinition.boot;
	    }
	
	    if (undefined !== moduleDefinition.filters) {
	      _lodash2.default.forEach(moduleDefinition.filters(), function (filter, key) {
	        if (undefined === actionFilterCallbacks[key]) {
	          actionFilterCallbacks[key] = [];
	        }
	
	        actionFilterCallbacks[key].push(filter);
	      });
	    }
	
	    if (undefined !== moduleDefinition.listeners) {
	      _lodash2.default.forEach(moduleDefinition.listeners(), function (listener, key) {
	        if (undefined === actionListenerCallbacks[key]) {
	          actionListenerCallbacks[key] = [];
	        }
	
	        actionListenerCallbacks[key].push(listener);
	      });
	    }
	
	    if (undefined !== moduleDefinition.beforeTableComponents) {
	      beforeTableComponents.push(moduleDefinition.beforeTableComponents());
	    }
	  });
	
	  var actionFilterObj = (0, _ActionFilter2.default)();
	
	  var store = (0, _redux.createStore)((0, _reduxImmutable.combineReducers)(reducers), (0, _redux.compose)((0, _redux.applyMiddleware)(actionFilterObj.actionFilter.call(actionFilterObj, actionFilterCallbacks), (0, _ActionListener2.default)(actionListenerCallbacks), _reduxThunk2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	    return f;
	  }));
	
	  actionFilterObj.store = store;
	
	  _lodash2.default.forEach(bootFunctions, function (bootFunction) {
	    bootFunction(store.dispatch);
	  });
	
	  //Test
	
	  //End tests
	
	  return {
	    store: store,
	    components: components,
	    beforeTableComponents: beforeTableComponents
	  };
	};

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.combineReducers = undefined;
	
	var _combineReducers2 = __webpack_require__(279);
	
	var _combineReducers3 = _interopRequireDefault(_combineReducers2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.combineReducers = _combineReducers3.default;

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _immutable = __webpack_require__(280);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _utilities = __webpack_require__(281);
	
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

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	'create index';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validateNextState = exports.getUnexpectedInvocationParameterMessage = exports.getStateName = undefined;
	
	var _getStateName2 = __webpack_require__(282);
	
	var _getStateName3 = _interopRequireDefault(_getStateName2);
	
	var _getUnexpectedInvocationParameterMessage2 = __webpack_require__(283);
	
	var _getUnexpectedInvocationParameterMessage3 = _interopRequireDefault(_getUnexpectedInvocationParameterMessage2);
	
	var _validateNextState2 = __webpack_require__(284);
	
	var _validateNextState3 = _interopRequireDefault(_validateNextState2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.getStateName = _getStateName3.default;
	exports.getUnexpectedInvocationParameterMessage = _getUnexpectedInvocationParameterMessage3.default;
	exports.validateNextState = _validateNextState3.default;

/***/ },

/***/ 282:
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

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /* eslint-disable lodash3/prefer-lodash-method */
	
	var _immutable = __webpack_require__(280);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _getStateName = __webpack_require__(282);
	
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

/***/ 284:
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

/***/ 286:
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
	
	var util = __webpack_require__(287);
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

/***/ 287:
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
	
	exports.isBuffer = __webpack_require__(288);
	
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
	exports.inherits = __webpack_require__(289);
	
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

/***/ 288:
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },

/***/ 289:
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

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assert = __webpack_require__(286);
	
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
	                action = cb(action, _this.store);
	
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

/***/ 291:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (actionListenerCallbacks) {
	  return function (store) {
	    return function (next) {
	      return function (action) {
	        var result = next(action);
	
	        var callbacks = actionListenerCallbacks[action.type];
	
	        if (undefined !== callbacks) {
	          callbacks.forEach(function (cb) {
	            cb(store.dispatch, action);
	          });
	        }
	
	        return result;
	      };
	    };
	  };
	};

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DefaultOpts = __webpack_require__(295);
	
	var _DefaultOpts2 = _interopRequireDefault(_DefaultOpts);
	
	var _DefaultState = __webpack_require__(297);
	
	var _DefaultState2 = _interopRequireDefault(_DefaultState);
	
	var _Reducer = __webpack_require__(298);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	var _Components = __webpack_require__(301);
	
	var _Components2 = _interopRequireDefault(_Components);
	
	var _ActionType = __webpack_require__(300);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var TableModule = function TableModule(opts) {
	  var _actions;
	
	  var actions = (_actions = {}, _defineProperty(_actions, _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS, _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS), _defineProperty(_actions, _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS, _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS), _actions);
	
	  return {
	    defaultOpts: _DefaultOpts2.default,
	    defaultState: _DefaultState2.default,
	    reducer: _Reducer2.default,
	    components: _Components2.default,
	    actions: actions,
	    boot: function boot(dispatch) {
	      if (undefined !== opts) {
	        if (undefined !== opts.head) {
	          dispatch({
	            type: _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD,
	            head: opts.head
	          });
	        }
	
	        dispatch({
	          type: _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS,
	          props: {
	            className: opts.className
	          }
	        });
	      }
	    }
	  };
	};
	
	TableModule.moduleName = 'table';
	
	exports.default = TableModule;

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _UndefinedFunction = __webpack_require__(296);
	
	var _UndefinedFunction2 = _interopRequireDefault(_UndefinedFunction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  getData: _UndefinedFunction2.default.bind('table.getData'),
	  renderCell: _UndefinedFunction2.default.bind('table.renderCell'),
	  messages: {
	    data: {
	      errorLoading: 'Error loading data.',
	      loadingMessage: 'Loading data...'
	    }
	  }
	};

/***/ },

/***/ 296:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (functionName) {
	  throw new Error('Call to undefined state function "' + functionName + '".');
	};

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(280);
	
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

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reduxImmutable = __webpack_require__(278);
	
	var _DefaultState = __webpack_require__(297);
	
	var _DefaultState2 = _interopRequireDefault(_DefaultState);
	
	var _ComputeViewModelReducer = __webpack_require__(299);
	
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

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(300);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _immutable = __webpack_require__(280);
	
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

/***/ 300:
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

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Table = __webpack_require__(302);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _TableBody = __webpack_require__(303);
	
	var _TableBody2 = _interopRequireDefault(_TableBody);
	
	var _TableRow = __webpack_require__(304);
	
	var _TableRow2 = _interopRequireDefault(_TableRow);
	
	var _ConnectedTable = __webpack_require__(305);
	
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

/***/ 302:
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

/***/ 303:
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

/***/ 304:
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

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(244);
	
	var _ContainerTable = __webpack_require__(306);
	
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

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(302);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _ContainerTableHead = __webpack_require__(307);
	
	var _ContainerTableHead2 = _interopRequireDefault(_ContainerTableHead);
	
	var _ContainerTableBody = __webpack_require__(313);
	
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

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TableHead = __webpack_require__(308);
	
	var _TableHead2 = _interopRequireDefault(_TableHead);
	
	var _ContainerTableRow = __webpack_require__(309);
	
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

/***/ 308:
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

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TableRow = __webpack_require__(304);
	
	var _TableRow2 = _interopRequireDefault(_TableRow);
	
	var _ContainerTableCell = __webpack_require__(310);
	
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

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TableHeading = exports.TableData = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TableData = __webpack_require__(311);
	
	var _TableData2 = _interopRequireDefault(_TableData);
	
	var _TableHeading = __webpack_require__(312);
	
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

/***/ 311:
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

/***/ 312:
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

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TableBody = __webpack_require__(303);
	
	var _TableBody2 = _interopRequireDefault(_TableBody);
	
	var _ContainerTableRow = __webpack_require__(309);
	
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

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Reducer = __webpack_require__(315);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	var _ActionType = __webpack_require__(316);
	
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

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(280);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _ActionType = __webpack_require__(316);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultState = _immutable2.default.fromJS({});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActionType2.default.DATA_REPLACE_DATA:
	      return state.setIn(['data'], _immutable2.default.fromJS(action.data));
	    default:
	      return state;
	  }
	};

/***/ },

/***/ 316:
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

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(318);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionType3 = __webpack_require__(316);
	
	var _ActionType4 = _interopRequireDefault(_ActionType3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var AsyncDataModule = function AsyncDataModule(opts) {
	  var actions = {};
	
	  var promise = undefined;
	
	  var fetchData = function fetchData(dispatch) {
	    if (undefined !== promise) {
	      promise.cancel();
	    }
	
	    promise = opts.fetchData();
	
	    promise.then(function (data) {
	      dispatch({
	        type: _ActionType4.default.DATA_REPLACE_DATA,
	        data: data
	      });
	    });
	  };
	
	  actions[_ActionType2.default.ASYNC_DATA_UPDATE_DATA] = _ActionType2.default.ASYNC_DATA_UPDATE_DATA;
	
	  return {
	    actions: actions,
	    boot: function boot(dispatch) {
	      dispatch({
	        type: _ActionType2.default.ASYNC_DATA_UPDATE_DATA
	      });
	    },
	    listeners: function listeners() {
	      return _defineProperty({}, _ActionType2.default.ASYNC_DATA_UPDATE_DATA, function (dispatch) {
	        fetchData(dispatch);
	      });
	    }
	  };
	};
	
	AsyncDataModule.moduleName = 'asyncData';
	
	exports.default = AsyncDataModule;

/***/ },

/***/ 318:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ASYNC_DATA_UPDATE_DATA = 'ASYNC_DATA_UPDATE_DATA';
	
	exports.default = {
	  ASYNC_DATA_UPDATE_DATA: ASYNC_DATA_UPDATE_DATA
	};

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionType = __webpack_require__(316);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionType3 = __webpack_require__(300);
	
	var _ActionType4 = _interopRequireDefault(_ActionType3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var ParseDataModule = function ParseDataModule(opts) {
	  return {
	    listeners: function listeners() {
	      return _defineProperty({}, _ActionType2.default.DATA_REPLACE_DATA, function (dispatch, action) {
	        var bodys = opts.updateBodys(action.data);
	
	        dispatch({
	          type: _ActionType4.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS,
	          bodys: bodys
	        });
	      });
	    }
	  };
	};
	
	ParseDataModule.moduleName = 'parseData';
	
	exports.default = ParseDataModule;

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PaginatorModule = function PaginatorModule() {
	  return {
	
	    beforeTableComponents: function beforeTableComponents() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'test'
	      );
	    }
	  };
	};
	
	PaginatorModule.moduleName = 'paginator';
	
	exports.default = PaginatorModule;

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Reducer = __webpack_require__(322);
	
	var _Reducer2 = _interopRequireDefault(_Reducer);
	
	var _ActionType = __webpack_require__(324);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _ActionType3 = __webpack_require__(300);
	
	var _ActionType4 = _interopRequireDefault(_ActionType3);
	
	var _ConnectedSortIcon = __webpack_require__(325);
	
	var _ConnectedSortIcon2 = _interopRequireDefault(_ConnectedSortIcon);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var SortModule = function SortModule(opts) {
	  function getSortableColumns() {
	    return opts.sortableColumns;
	  }
	
	  return {
	    reducer: _Reducer2.default,
	    listeners: function listeners() {
	      return _defineProperty({}, _ActionType2.default.SORT_RESET_SORT_STATE, function (dispatch) {});
	    },
	    filters: function filters() {
	      var sortableColumns = getSortableColumns();
	
	      return _defineProperty({}, _ActionType4.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD, function (action, store) {
	        if (action.head.rows.length > 1) {
	          throw new Error('Unsupported multi-rows header.');
	        }
	
	        action.head.rows[0].cells.forEach(function (cell) {
	          if (sortableColumns.indexOf(cell.name) !== -1) {
	            var className = void 0;
	
	            if (undefined !== cell.props && undefined !== cell.props.className) {
	              className = cell.props.className + ' sortable';
	            } else {
	              className = 'sortable';
	            }
	
	            cell.props = {
	              className: className
	            };
	
	            cell.content = [cell.content, _react2.default.createElement(_ConnectedSortIcon2.default, {
	              key: 'sortIcon',
	              store: store,
	              iconClassName: "glyphicon glyphicon-arrow-up",
	              showRemoveIcon: true })];
	          }
	        });
	
	        return action;
	      });
	    }
	  };
	};
	
	SortModule.moduleName = 'sort';
	
	exports.default = SortModule;

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DefaultState = __webpack_require__(323);
	
	var _DefaultState2 = _interopRequireDefault(_DefaultState);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _DefaultState2.default : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    default:
	      return state;
	  }
	};

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(280);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _immutable2.default.fromJS({
	  state: {}
	});

/***/ },

/***/ 324:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SORT_TOGGLE_SORT = 'SORT_TOGGLE_SORT';
	var SORT_RESET_SORT_STATE = 'SORT_RESET_SORT_STATE';
	
	exports.default = {
	  SORT_TOGGLE_SORT: SORT_TOGGLE_SORT,
	  SORT_RESET_SORT_STATE: SORT_RESET_SORT_STATE
	};

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(244);
	
	var _ActionType = __webpack_require__(324);
	
	var _ActionType2 = _interopRequireDefault(_ActionType);
	
	var _SortIcon = __webpack_require__(326);
	
	var _SortIcon2 = _interopRequireDefault(_SortIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(undefined, {
	  handleResetSortContextClicked: function handleResetSortContextClicked(event) {
	    event.preventDefault();
	
	    return {
	      type: _ActionType2.default.SORT_RESET_SORT_STATE
	    };
	  }
	})(_SortIcon2.default);

/***/ },

/***/ 326:
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
	        className: "glyphicon glyphicon-remove",
	        onClick: handleResetSortContextClicked });
	    }
	  }
	
	  return _react2.default.createElement(
	    "div",
	    { className: "pull-right" },
	    renderRemoveIcon(),
	    " ",
	    _react2.default.createElement("i", { className: iconClassName })
	  );
	};
	
	SortIcon.displayName = 'SortIcon';
	
	exports.default = SortIcon;

/***/ }

});
//# sourceMappingURL=example-slow-loading.js.map