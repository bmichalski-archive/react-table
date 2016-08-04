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

    _this._paginator = props.paginator;

    _this.state = {
      q: _this._paginator.q,
      goToValue: ''
    };
    return _this;
  }

  _createClass(Paginator, [{
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

      return this._paginator.makeLink(params.page, params.pageSize, params.q);
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(page, event) {
      event.preventDefault();

      this._paginator.page = page;

      this._paginator.goToPage(this._makeLink(this._paginator.page, this._paginator.pageSize));
    }
  }, {
    key: '_getClassName',
    value: function _getClassName(page) {
      return this._paginator.page === page ? 'current' : null;
    }
  }, {
    key: '_previous',
    value: function _previous(event) {
      if (this._previousDisabled()) {
        event.preventDefault();

        return;
      }

      this._handleClick(this._paginator.page - 1, event);
    }
  }, {
    key: '_next',
    value: function _next(event) {
      if (this._nextDisabled()) {
        event.preventDefault();

        return;
      }

      this._handleClick(this._paginator.page + 1, event);
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

      this._handleClick(this._paginator.totalPages, event);
    }
  }, {
    key: '_firstDisabled',
    value: function _firstDisabled() {
      return this._paginator.page <= 1;
    }
  }, {
    key: '_lastDisabled',
    value: function _lastDisabled() {
      return this._paginator.page >= this._paginator.totalPages;
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
      var _this2 = this;

      var pageSize = parseInt(event.target.value, 10);

      this.setState({
        goToValue: ''
      }, function () {
        _this2._paginator.pageSize = pageSize;
        _this2._paginator.page = 1;

        _this2._paginator.goToPage(_this2._makeLink(_this2._paginator.page, _this2._paginator.pageSize));
      });
    }
  }, {
    key: '_handleGoToChanged',
    value: function _handleGoToChanged(event) {
      var goToValue;

      var rawValue = event.target.value;

      if ('' === rawValue) {
        goToValue = '';
      } else if (/^[0-9]+$/.test(rawValue) && rawValue >= 1) {
        goToValue = parseInt(rawValue, 10);
      } else {
        goToValue = this.state.goToValue;
      }

      this.setState({
        goToValue: goToValue
      });
    }
  }, {
    key: '_doGoToPage',
    value: function _doGoToPage() {
      this._paginator.goToPage(this._makeLink(this._paginator.page, this._paginator.pageSize, this._paginator.q));
    }
  }, {
    key: '_goToPage',
    value: function _goToPage() {
      this._paginator.page = this.state.goToValue;

      this._doGoToPage();
    }
  }, {
    key: '_handleKeyDown',
    value: function _handleKeyDown(event, isDisabled) {
      if (13 === event.keyCode) {
        event.preventDefault();

        if (isDisabled()) {
          return;
        }

        this._goToPage();
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
      var _this3 = this;

      clearTimeout(this._debounceQ);

      var rawValue = event.target.value;

      this.setState({
        q: rawValue,
        page: 1,
        goToValue: ''
      }, function () {
        _this3._paginator.q = rawValue;
        _this3._paginator.page = 1;

        _this3._debounceQ = setTimeout(_this3._doGoToPage.bind(_this3), _this3.props.qDebounceTimeout);
      });
    }
  }, {
    key: '_goToPageDisabled',
    value: function _goToPageDisabled() {
      return !(isPositiveInteger(this.state.goToValue) && this.state.goToValue >= 1);
    }
  }, {
    key: '_goToPageGoButtonClicked',
    value: function _goToPageGoButtonClicked(event) {
      event.preventDefault();

      if (this._goToPageDisabled()) {
        return;
      }

      this._goToPage();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var paginationFields = function () {
        if (!(_this4.props.pageSizeSelector || _this4.props.goTo || _this4.props.filtering)) {
          return;
        }

        return React.createElement(
          'div',
          { className: 'row' },
          function () {
            if (_this4.props.filtering) {
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
                    value: _this4.state.q,
                    placeholder: 'Filter:',
                    onChange: _this4._handleQChanged.bind(_this4) })
                )
              );
            }
          }(),
          function () {
            if (_this4.props.goTo) {
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
                        value: _this4.state.goToValue,
                        onChange: _this4._handleGoToChanged.bind(_this4),
                        onKeyDown: _this4._handleGoToKeyDown.bind(_this4) }),
                      React.createElement(
                        'div',
                        { className: 'input-group-btn' },
                        React.createElement(
                          'button',
                          {
                            className: 'btn btn-default ',
                            disabled: _this4._goToPageDisabled(),
                            onClick: _this4._goToPageGoButtonClicked.bind(_this4) },
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
            if (_this4.props.pageSizeSelector) {
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
                        value: _this4._paginator.pageSize,
                        onChange: _this4._handlePageSizeChange.bind(_this4) },
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
                var page = parseInt(_this4._paginator.page, 10);
                var rows = [];
                var firstDisabled = _this4._firstDisabled();
                var lastDisabled = _this4._lastDisabled();
                var previousDisabled = _this4._previousDisabled();
                var nextDisabled = _this4._nextDisabled();

                rows.push(React.createElement(
                  'li',
                  { key: 'first', className: firstDisabled ? 'disabled' : null },
                  React.createElement(
                    'a',
                    {
                      disabled: firstDisabled,
                      href: firstDisabled ? '' : _this4._makeLink(1, _this4._paginator.pageSize),
                      onClick: _this4._first.bind(_this4) },
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
                      href: previousDisabled ? '' : _this4._makeLink(page - 1, _this4._paginator.pageSize),
                      onClick: _this4._previous.bind(_this4) },
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
                    { key: key, className: _this4._getClassName(page) },
                    React.createElement(
                      'a',
                      { href: _this4._makeLink(page, _this4._paginator.pageSize), onClick: _this4._handleClick.bind(_this4, page) },
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
                    var _page = i + 1;

                    addPageLi(_page, i);
                  }
                }

                if (_this4._paginator.totalPages <= _this4.props.maximumPages) {
                  addPages(1, _this4._paginator.totalPages);
                } else {
                  var mid = _this4.props.maximumPages / 2 + 1;

                  if (page <= mid) {
                    addPages(1, _this4.props.maximumPages);
                  } else if (page >= _this4._paginator.totalPages - (mid - 2)) {
                    addPages(_this4._paginator.totalPages - (_this4.props.maximumPages - 1), _this4._paginator.totalPages);
                  } else {
                    var paginatorLastPage = page + (mid - 2);

                    addPages(page - (mid - 1), paginatorLastPage < _this4._paginator.totalPages ? paginatorLastPage : _this4._paginator.totalPages);
                  }
                }

                rows.push(React.createElement(
                  'li',
                  { key: 'next', className: nextDisabled ? 'disabled' : null },
                  React.createElement(
                    'a',
                    {
                      disabled: nextDisabled,
                      href: nextDisabled ? '' : _this4._makeLink(page + 1, _this4._paginator.pageSize),
                      onClick: _this4._next.bind(_this4) },
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
                    {
                      disabled: lastDisabled,
                      href: lastDisabled ? '' : _this4._makeLink(_this4._paginator.totalPages, _this4._paginator.pageSize),
                      onClick: _this4._last.bind(_this4) },
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
  paginator: React.PropTypes.shape({
    totalResult: React.PropTypes.number.isRequired,
    page: React.PropTypes.number.isRequired,
    pageSize: React.PropTypes.number.isRequired,
    q: React.PropTypes.string,
    goToPage: React.PropTypes.func.isRequired,
    makeLink: React.PropTypes.func.isRequired
  }).isRequired,
  pageSizeSelector: React.PropTypes.bool.isRequired,
  goTo: React.PropTypes.bool.isRequired,
  filtering: React.PropTypes.bool.isRequired,
  qDebounceTimeout: React.PropTypes.number.isRequired,
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
  pageSizeSelector: false,
  goTo: false,
  filtering: false,
  qDebounceTimeout: 300,
  maximumPages: 10
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

    _this._paginator = props.paginator;

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
      this._paginator.totalResult = data.info.totalFiltered;

      this.setState({
        data: data,
        loading: false,
        errorLoadingData: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.errorLoadingData) {
        return React.createElement(
          "div",
          null,
          this.props.errorLoadingDataMessage
        );
      }

      if (undefined === this._paginator.totalResult) {
        return React.createElement(
          "div",
          null,
          this.props.loadingMessage
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
              paginator: this._paginator,
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
              paginator: this._paginator })
          )
        )
      );
    }
  }]);

  return Table;
}(React.Component);

Table.propTypes = {
  errorLoadingDataMessage: React.PropTypes.string.isRequired,
  loadingMessage: React.PropTypes.string.isRequired,
  paginator: React.PropTypes.object.isRequired,
  emptyTableMessage: React.PropTypes.string,
  tableClassName: React.PropTypes.string,
  renderCell: React.PropTypes.func,
  onCellClicked: React.PropTypes.func
};

Table.defaultProps = {
  errorLoadingDataMessage: 'Error loading data.',
  loadingMessage: 'Loading data...'
};
return Table;
}));
