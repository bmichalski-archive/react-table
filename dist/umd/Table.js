;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('react'));
  } else {
    root.Table = factory(root.React);
  }
}(this, function(React) {
"use strict";

function isInteger(nb) {
  return nb === parseInt(nb, 10);
}

function isPositiveInteger(nb) {
  return isInteger(nb) && nb > 0;
}
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paginator = function (_React$Component) {
  _inherits(Paginator, _React$Component);

  function Paginator(props) {
    _classCallCheck(this, Paginator);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Paginator).call(this, props));

    _this.state = {
      pageSize: props.pageSize,
      currentPage: props.currentPage,
      q: props.q,
      totalPages: Math.ceil(props.totalResult / props.pageSize)
    };
    return _this;
  }

  _createClass(Paginator, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        pageSize: newProps.pageSize,
        currentPage: newProps.currentPage,
        q: newProps.q,
        totalPages: Math.ceil(newProps.totalResult / newProps.pageSize)
      });
    }
  }, {
    key: '_makeLink',
    value: function _makeLink(page, pageSize, q) {
      var params = {};

      if (page > 1) {
        params.page = page;
      }

      if (pageSize > 10) {
        params.pageSize = pageSize;
      }

      if ('' === q) {
        params.q = undefined;
      } else {
        params.q = q;
      }

      return this.props.makeLink(params.page, params.pageSize, params.q);
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(page, event) {
      event.preventDefault();

      this.props.goToPage(this._makeLink(page, this.state.pageSize));
    }
  }, {
    key: '_getClassName',
    value: function _getClassName(page) {
      return this.state.currentPage === page ? 'current' : null;
    }
  }, {
    key: '_previous',
    value: function _previous(event) {
      if (this._previousDisabled()) {
        event.preventDefault();

        return;
      }

      this._handleClick(this.state.currentPage - 1, event);
    }
  }, {
    key: '_next',
    value: function _next(event) {
      if (this._nextDisabled()) {
        event.preventDefault();

        return;
      }

      this._handleClick(this.state.currentPage + 1, event);
    }
  }, {
    key: '_first',
    value: function _first(event) {
      if (this._firstDisabled()) {
        event.preventDefault();

        return;
      }

      this._handleClick(1, event);
    }
  }, {
    key: '_last',
    value: function _last(event) {
      if (this._lastDisabled()) {
        event.preventDefault();

        return;
      }

      this._handleClick(this.state.totalPages, event);
    }
  }, {
    key: '_firstDisabled',
    value: function _firstDisabled() {
      return this.state.currentPage <= 1;
    }
  }, {
    key: '_lastDisabled',
    value: function _lastDisabled() {
      return this.state.currentPage >= this.state.totalPages;
    }
  }, {
    key: '_previousDisabled',
    value: function _previousDisabled() {
      return this._firstDisabled();
    }
  }, {
    key: '_nextDisabled',
    value: function _nextDisabled() {
      return this._lastDisabled();
    }
  }, {
    key: '_handlePageSizeChange',
    value: function _handlePageSizeChange(event) {
      var pageSize = parseInt(event.target.value, 10);

      this.props.goToPage(this._makeLink(1, pageSize));
    }
  }, {
    key: '_handleGoToChanged',
    value: function _handleGoToChanged(event) {
      this.setState({
        goTo: parseInt(event.target.value, 10)
      });
    }
  }, {
    key: '_doGoToPage',
    value: function _doGoToPage() {
      this.props.goToPage(this._makeLink(this.state.goTo, this.state.pageSize, this.state.q));
    }
  }, {
    key: '_handleKeyDown',
    value: function _handleKeyDown(event, isDisabled) {
      if (13 === event.keyCode) {
        event.preventDefault();

        if (isDisabled()) {
          return;
        }

        this._doGoToPage();
      }
    }
  }, {
    key: '_handleGoToKeyDown',
    value: function _handleGoToKeyDown(event) {
      this._handleKeyDown(event, this._goToPageDisabled.bind(this));
    }
  }, {
    key: '_handleQChanged',
    value: function _handleQChanged(event) {
      var _this2 = this;

      clearTimeout(this._debounceQ);

      this.setState({ q: event.target.value, page: 1 }, function () {
        _this2._debounceQ = setTimeout(_this2._doGoToPage.bind(_this2), 200);
      });
    }
  }, {
    key: '_goToPageDisabled',
    value: function _goToPageDisabled() {
      return !isPositiveInteger(this.state.goTo) || this.state.goTo < 1;
    }
  }, {
    key: '_goToPage',
    value: function _goToPage(event) {
      event.preventDefault();

      if (this._goToPageDisabled()) {
        return;
      }

      this._doGoToPage();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var paginationFields = function () {
        if (!(_this3.props.pageSizeSelector || _this3.props.goTo || _this3.props.filtering)) {
          return;
        }

        return React.createElement(
          'div',
          { className: 'row' },
          function () {
            if (_this3.props.filtering) {
              return React.createElement(
                'div',
                { className: 'col-md-5' },
                React.createElement(
                  'label',
                  null,
                  'Filter',
                  React.createElement('input', {
                    type: 'text',
                    className: 'form-control',
                    value: _this3.state.q,
                    placeholder: 'Filter:',
                    onChange: _this3._handleQChanged.bind(_this3) })
                )
              );
            }
          }(),
          function () {
            if (_this3.props.goTo) {
              return React.createElement(
                'div',
                { className: 'col-md-4' },
                React.createElement(
                  'div',
                  { className: 'page-selector form-group' },
                  React.createElement(
                    'label',
                    null,
                    'Go to page',
                    React.createElement(
                      'div',
                      { className: 'input-group' },
                      React.createElement('input', {
                        type: 'text',
                        className: 'form-control',
                        placeholder: 'Page:',
                        onChange: _this3._handleGoToChanged.bind(_this3),
                        onKeyDown: _this3._handleGoToKeyDown.bind(_this3) }),
                      React.createElement(
                        'div',
                        { className: 'input-group-btn' },
                        React.createElement(
                          'button',
                          {
                            className: 'btn btn-default ',
                            disabled: _this3._goToPageDisabled(),
                            onClick: _this3._goToPage.bind(_this3) },
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
            if (_this3.props.pageSizeSelector) {
              return React.createElement(
                'div',
                { className: 'col-md-3' },
                React.createElement(
                  'div',
                  { className: 'page-size-selector form-group' },
                  React.createElement(
                    'label',
                    null,
                    'Page size ',
                    React.createElement(
                      'select',
                      {
                        className: 'form-control',
                        value: _this3.state.pageSize,
                        onChange: _this3._handlePageSizeChange.bind(_this3) },
                      React.createElement(
                        'option',
                        { value: 10 },
                        '10'
                      ),
                      React.createElement(
                        'option',
                        { value: 25 },
                        '25'
                      ),
                      React.createElement(
                        'option',
                        { value: 50 },
                        '50'
                      ),
                      React.createElement(
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

      return React.createElement(
        'div',
        { className: 'paginator-wrapper' },
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-md-4' },
            paginationFields
          ),
          React.createElement(
            'div',
            { className: 'col-md-8' },
            React.createElement(
              'ul',
              { className: 'pagination pull-right' },
              function () {
                var currentPage = parseInt(_this3.state.currentPage, 10);
                var rows = [];
                var firstDisabled = _this3._firstDisabled();
                var lastDisabled = _this3._lastDisabled();
                var previousDisabled = _this3._previousDisabled();
                var nextDisabled = _this3._nextDisabled();

                rows.push(React.createElement(
                  'li',
                  { key: 'first', className: firstDisabled ? 'disabled' : null },
                  React.createElement(
                    'a',
                    {
                      disabled: firstDisabled,
                      href: firstDisabled ? '' : _this3._makeLink(1, _this3.state.pageSize),
                      onClick: _this3._first.bind(_this3) },
                    React.createElement(
                      'span',
                      null,
                      '«'
                    )
                  )
                ));

                rows.push(React.createElement(
                  'li',
                  { key: 'previous', className: previousDisabled ? 'disabled' : null },
                  React.createElement(
                    'a',
                    {
                      disabled: previousDisabled,
                      href: previousDisabled ? '' : _this3._makeLink(currentPage - 1, _this3.state.pageSize),
                      onClick: _this3._previous.bind(_this3) },
                    React.createElement(
                      'span',
                      null,
                      '‹'
                    )
                  )
                ));

                var addPageLi = function addPageLi(page, key) {
                  rows.push(React.createElement(
                    'li',
                    { key: key, className: _this3._getClassName(page) },
                    React.createElement(
                      'a',
                      { href: _this3._makeLink(page, _this3.state.pageSize), onClick: _this3._handleClick.bind(_this3, page) },
                      React.createElement(
                        'span',
                        null,
                        page
                      )
                    )
                  ));
                };

                function addPages(from, to) {
                  for (var i = from - 1; i < to; i += 1) {
                    var page = i + 1;

                    addPageLi(page, i);
                  }
                }

                if (_this3.state.totalPages <= _this3.props.maximumPages) {
                  addPages(1, _this3.state.totalPages);
                } else {
                  var mid = _this3.props.maximumPages / 2 + 1;

                  if (_this3.state.currentPage <= mid) {
                    addPages(1, _this3.props.maximumPages);
                  } else if (_this3.state.currentPage >= _this3.state.totalPages - (mid - 2)) {
                    addPages(_this3.state.totalPages - (_this3.props.maximumPages - 1), _this3.state.totalPages);
                  } else {
                    var paginatorLastPage = _this3.state.currentPage + (mid - 2);

                    addPages(_this3.state.currentPage - (mid - 1), paginatorLastPage < _this3.state.totalPages ? paginatorLastPage : _this3.state.totalPages);
                  }
                }

                rows.push(React.createElement(
                  'li',
                  { key: 'next', className: nextDisabled ? 'disabled' : null },
                  React.createElement(
                    'a',
                    { disabled: nextDisabled, href: nextDisabled ? '' : _this3._makeLink(currentPage + 1, _this3.state.pageSize), onClick: _this3._next.bind(_this3) },
                    React.createElement(
                      'span',
                      null,
                      '›'
                    )
                  )
                ));

                rows.push(React.createElement(
                  'li',
                  { key: 'last', className: lastDisabled ? 'disabled' : null },
                  React.createElement(
                    'a',
                    { disabled: lastDisabled, href: lastDisabled ? '' : _this3._makeLink(_this3.state.totalPages, _this3.state.pageSize), onClick: _this3._last.bind(_this3) },
                    React.createElement(
                      'span',
                      null,
                      '»'
                    )
                  )
                ));

                return rows;
              }()
            )
          )
        )
      );
    }
  }]);

  return Paginator;
}(React.Component);

Paginator.propTypes = {
  totalResult: React.PropTypes.number.isRequired,
  currentPage: React.PropTypes.number.isRequired,
  pageSize: React.PropTypes.number.isRequired,
  q: React.PropTypes.string,
  goToPage: React.PropTypes.func.isRequired,
  makeLink: React.PropTypes.func.isRequired,
  pageSizeSelector: React.PropTypes.bool.isRequired,
  goTo: React.PropTypes.bool.isRequired,
  filtering: React.PropTypes.bool.isRequired,
  maximumPages: function maximumPages(props, propName) {
    var prop = props[propName];

    if (!isPositiveInteger(prop)) {
      throw new Error('Invalid maximumPages, expecting positive integer, got ' + prop);
    }

    if (prop % 2 > 0) {
      throw new Error('Expecting even number, got ' + prop);
    }
  }
};

Paginator.defaultProps = {
  q: '',
  maximumPages: 10,
  pageSizeSelector: false,
  goTo: false,
  filtering: false
};
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableRow = function (_React$Component) {
  _inherits(TableRow, _React$Component);

  function TableRow() {
    _classCallCheck(this, TableRow);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableRow).apply(this, arguments));
  }

  _createClass(TableRow, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rowData = this.props.data;

      return React.createElement(
        'tr',
        null,
        function () {
          var tds = [];

          rowData.forEach(function (cellData, cellIndex) {
            tds.push(React.createElement(
              'td',
              {
                key: cellIndex,
                onClick: _this2.props.onCellClicked.bind(undefined, rowData, cellIndex, _this2.props.rowIndex) },
              _this2.props.renderCell(cellData, cellIndex, _this2.props.rowIndex)
            ));
          });

          return tds;
        }()
      );
    }
  }]);

  return TableRow;
}(React.Component);

TableRow.propTypes = {
  rowIndex: function rowIndex(props, propName) {
    var prop = props[propName];

    if (!isInteger(prop)) {
      throw new Error('Invalid rowIndex, expecting number, got ' + prop);
    }
  },
  renderCell: React.PropTypes.func.isRequired,
  onCellClicked: React.PropTypes.func.isRequired,
  data: React.PropTypes.array.isRequired
};

TableRow.defaultProps = {
  renderCell: function renderCell(data) {
    return data;
  },
  onCellClicked: function onCellClicked() {
    return;
  }
};
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainTable = function (_React$Component) {
  _inherits(MainTable, _React$Component);

  function MainTable() {
    _classCallCheck(this, MainTable);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MainTable).apply(this, arguments));
  }

  _createClass(MainTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (0 === this.props.data.length) {
        return React.createElement(
          'div',
          null,
          this.props.emptyTableMessage
        );
      }

      var rows = [];

      this.props.data.forEach(function (data, rowIndex) {
        rows.push(React.createElement(TableRow, {
          key: rowIndex,
          data: data,
          rowIndex: rowIndex,
          onCellClicked: _this2.props.onCellClicked,
          renderCell: _this2.props.renderCell }));
      });

      return React.createElement(
        'table',
        { className: this.props.tableClassName },
        this.props.children,
        React.createElement(
          'tbody',
          null,
          rows
        )
      );
    }
  }]);

  return MainTable;
}(React.Component);

MainTable.propTypes = {
  data: React.PropTypes.array.isRequired,
  emptyTableMessage: React.PropTypes.string.isRequired,
  tableClassName: React.PropTypes.string.isRequired,
  renderCell: React.PropTypes.func,
  onCellClicked: React.PropTypes.func
};

MainTable.defaultProps = {
  emptyTableMessage: 'No data to display with given parameters.',
  tableClassName: 'table table-bordered'
};
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this, props));

    _this.state = {
      loading: true,
      errorLoadingData: false
    };

    _this._updateStateFromRemoteSource(props.getData);
    return _this;
  }

  _createClass(Table, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        loading: true,
        errorLoadingData: false
      });

      this._updateStateFromRemoteSource(newProps.getData);
    }
  }, {
    key: "_updateStateFromRemoteSource",
    value: function _updateStateFromRemoteSource(getData) {
      var _this2 = this;

      if (undefined !== this._promise) {
        this._promise.cancel();
      }

      this._promise = getData();

      this._promise.then(function (data) {
        _this2._updateStateFromFetchedData(data);
      }).catch(function (err) {
        _this2.setState({
          loading: false,
          errorLoadingData: true
        });

        throw err;
      }).done();
    }
  }, {
    key: "_updateStateFromFetchedData",
    value: function _updateStateFromFetchedData(data) {
      this.setState({
        data: data,
        totalResult: data.info.totalFiltered,
        loading: false,
        errorLoadingData: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (undefined === this.state.totalResult) {
        return React.createElement(
          "div",
          null,
          this.props.loadingMessage
        );
      }

      if (this.state.errorLoadingData) {
        return React.createElement(
          "div",
          null,
          this.props.errorLoadingDataMessage
        );
      }

      return React.createElement(
        "div",
        { className: "table-wrapper" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-12" },
            React.createElement(Paginator, {
              totalResult: this.state.totalResult,
              currentPage: this.props.paginator.page,
              pageSize: this.props.paginator.pageSize,
              q: this.props.paginator.q,
              goToPage: this.props.paginator.goToPage.bind(this.props.paginator),
              makeLink: this.props.paginator.makeLink.bind(this.props.paginator),
              pageSizeSelector: true,
              goTo: true,
              filtering: true })
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-12" },
            function () {
              if (_this3.state.loading) {
                return React.createElement(
                  "div",
                  null,
                  _this3.props.loadingMessage
                );
              }

              return React.createElement(
                MainTable,
                {
                  data: _this3.state.data.result,
                  renderCell: _this3.props.renderCell,
                  onCellClicked: _this3.props.onCellClicked,
                  emptyTableMessage: _this3.props.emptyTableMessage,
                  tableClassName: _this3.props.tableClassName },
                _this3.props.children
              );
            }()
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-12" },
            React.createElement(Paginator, {
              totalResult: this.state.totalResult,
              currentPage: this.props.paginator.page,
              pageSize: this.props.paginator.pageSize,
              q: this.props.paginator.q,
              goToPage: this.props.paginator.goToPage.bind(this.props.paginator),
              makeLink: this.props.paginator.makeLink.bind(this.props.paginator) })
          )
        )
      );
    }
  }]);

  return Table;
}(React.Component);

Table.propTypes = {
  emptyTableMessage: React.PropTypes.string.isRequired,
  errorLoadingDataMessage: React.PropTypes.string.isRequired,
  loadingMessage: React.PropTypes.string.isRequired,
  tableClassName: React.PropTypes.string.isRequired,
  paginator: React.PropTypes.shape({
    page: React.PropTypes.number.isRequired,
    pageSize: React.PropTypes.number.isRequired,
    goToPage: React.PropTypes.func.isRequired,
    makeLink: React.PropTypes.func.isRequired
  }).isRequired,
  renderCell: React.PropTypes.func,
  onCellClicked: React.PropTypes.func
};

Table.defaultProps = {
  emptyTableMessage: 'No data to display with given parameters.',
  errorLoadingDataMessage: 'Error loading data.',
  loadingMessage: 'Loading data...',
  tableClassName: 'table table-bordered'
};
return Table;
}));
