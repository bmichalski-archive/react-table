;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('react'));
  } else {
    root.TableHeadTh = factory(root.React);
  }
}(this, function(React) {
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableHeadTh = function (_React$Component) {
  _inherits(TableHeadTh, _React$Component);

  function TableHeadTh() {
    _classCallCheck(this, TableHeadTh);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableHeadTh).apply(this, arguments));
  }

  _createClass(TableHeadTh, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "th",
        null,
        this.props.children
      );
    }
  }]);

  return TableHeadTh;
}(React.Component);
return TableHeadTh;
}));

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('react'));
  } else {
    root.TableHeadRow = factory(root.React);
  }
}(this, function(React) {
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableHeadRow = function (_React$Component) {
  _inherits(TableHeadRow, _React$Component);

  function TableHeadRow() {
    _classCallCheck(this, TableHeadRow);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableHeadRow).apply(this, arguments));
  }

  _createClass(TableHeadRow, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "tr",
        null,
        this.props.children
      );
    }
  }]);

  return TableHeadRow;
}(React.Component);
return TableHeadRow;
}));

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('react'));
  } else {
    root.TableHead = factory(root.React);
  }
}(this, function(React) {
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableHead = function (_React$Component) {
  _inherits(TableHead, _React$Component);

  function TableHead() {
    _classCallCheck(this, TableHead);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableHead).apply(this, arguments));
  }

  _createClass(TableHead, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "thead",
        null,
        this.props.children
      );
    }
  }]);

  return TableHead;
}(React.Component);
return TableHead;
}));

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
"use strict";

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
      totalPages: Math.ceil(props.totalResult / props.pageSize)
    };
    return _this;
  }

  _createClass(Paginator, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        pageSize: newProps.pageSize,
        currentPage: newProps.currentPage,
        totalPages: Math.ceil(newProps.totalResult / props.pageSize)
      });
    }
  }, {
    key: "_makeLink",
    value: function _makeLink(page, pageSize) {
      var params = {};

      if (page > 1) {
        params.page = page;
      }

      if (pageSize > 10) {
        params.pageSize = pageSize;
      }

      return this.props.makeLink(params.page, params.pageSize);
    }
  }, {
    key: "_handleClick",
    value: function _handleClick(page, event) {
      event.preventDefault();

      this.props.goToPage(this._makeLink(page, this.state.pageSize));
    }
  }, {
    key: "_getClassName",
    value: function _getClassName(page) {
      return this.state.currentPage === page ? 'current' : null;
    }
  }, {
    key: "_previous",
    value: function _previous(event) {
      if (this._previousDisabled()) {
        event.preventDefault();

        return;
      }

      this._handleClick(this.state.currentPage - 1, event);
    }
  }, {
    key: "_next",
    value: function _next(event) {
      if (this._nextDisabled()) {
        event.preventDefault();

        return;
      }

      this._handleClick(this.state.currentPage + 1, event);
    }
  }, {
    key: "_first",
    value: function _first(event) {
      if (this._firstDisabled()) {
        event.preventDefault();

        return;
      }

      this._handleClick(1, event);
    }
  }, {
    key: "_last",
    value: function _last(event) {
      if (this._lastDisabled()) {
        event.preventDefault();

        return;
      }

      this._handleClick(this.state.totalPages, event);
    }
  }, {
    key: "_firstDisabled",
    value: function _firstDisabled() {
      return this.state.currentPage <= 1;
    }
  }, {
    key: "_lastDisabled",
    value: function _lastDisabled() {
      return this.state.currentPage >= this.state.totalPages;
    }
  }, {
    key: "_previousDisabled",
    value: function _previousDisabled() {
      return this._firstDisabled();
    }
  }, {
    key: "_nextDisabled",
    value: function _nextDisabled() {
      return this._lastDisabled();
    }
  }, {
    key: "_handlePageSizeChange",
    value: function _handlePageSizeChange(event) {
      var pageSize = parseInt(event.target.value, 10);

      this.props.goToPage(this._makeLink(1, pageSize));
    }
  }, {
    key: "_handleGoToChanged",
    value: function _handleGoToChanged(event) {
      this.setState({
        goTo: parseInt(event.target.value, 10)
      });
    }
  }, {
    key: "_doGoToPage",
    value: function _doGoToPage() {
      this.props.goToPage(this._makeLink(this.state.goTo, this.state.pageSize));
    }
  }, {
    key: "_handleGoToKeyDown",
    value: function _handleGoToKeyDown(event) {
      if (13 === event.keyCode) {
        event.preventDefault();

        if (this._goToPageDisabled()) {
          return;
        }

        this._doGoToPage();
      }
    }
  }, {
    key: "_goToPageDisabled",
    value: function _goToPageDisabled() {
      return !isPositiveInteger(this.state.goTo) || this.state.goTo < 1;
    }
  }, {
    key: "_goToPage",
    value: function _goToPage(event) {
      event.preventDefault();

      if (this._goToPageDisabled()) {
        return;
      }

      this._doGoToPage();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "paginator-wrapper" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-1" },
            function () {
              if (!_this2.props.noPageSizeSelector) {
                return React.createElement(
                  "div",
                  { className: "page-size-selector form-group" },
                  React.createElement(
                    "label",
                    null,
                    "Page size ",
                    React.createElement(
                      "select",
                      {
                        className: "form-control",
                        value: _this2.state.pageSize,
                        onChange: _this2._handlePageSizeChange.bind(_this2) },
                      React.createElement(
                        "option",
                        { value: 10 },
                        "10"
                      ),
                      React.createElement(
                        "option",
                        { value: 25 },
                        "25"
                      ),
                      React.createElement(
                        "option",
                        { value: 50 },
                        "50"
                      ),
                      React.createElement(
                        "option",
                        { value: 100 },
                        "100"
                      )
                    )
                  )
                );
              }
            }()
          ),
          React.createElement(
            "div",
            { className: "col-md-2" },
            function () {
              if (!_this2.props.noGoTo) {
                return React.createElement(
                  "div",
                  { className: "page-selector form-group" },
                  React.createElement(
                    "label",
                    null,
                    "Go to page",
                    React.createElement(
                      "div",
                      { className: "input-group" },
                      React.createElement("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: 'Current page: ' + _this2.state.currentPage,
                        onChange: _this2._handleGoToChanged.bind(_this2),
                        onKeyDown: _this2._handleGoToKeyDown.bind(_this2) }),
                      React.createElement(
                        "div",
                        { className: "input-group-btn" },
                        React.createElement(
                          "button",
                          {
                            className: "btn btn-default ",
                            disabled: _this2._goToPageDisabled(),
                            onClick: _this2._goToPage.bind(_this2) },
                          "Go"
                        )
                      )
                    )
                  )
                );
              }
            }()
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-12" },
            React.createElement(
              "ul",
              { className: "pagination" },
              function () {
                var currentPage = parseInt(_this2.state.currentPage, 10);
                var rows = [];
                var firstDisabled = _this2._firstDisabled();
                var lastDisabled = _this2._lastDisabled();
                var previousDisabled = _this2._previousDisabled();
                var nextDisabled = _this2._nextDisabled();

                rows.push(React.createElement(
                  "li",
                  { key: "first", className: firstDisabled ? 'disabled' : null },
                  React.createElement(
                    "a",
                    {
                      disabled: firstDisabled,
                      href: firstDisabled ? '' : _this2._makeLink(1, _this2.state.pageSize),
                      onClick: _this2._first.bind(_this2) },
                    React.createElement(
                      "span",
                      null,
                      "«"
                    )
                  )
                ));

                rows.push(React.createElement(
                  "li",
                  { key: "previous", className: previousDisabled ? 'disabled' : null },
                  React.createElement(
                    "a",
                    {
                      disabled: previousDisabled,
                      href: previousDisabled ? '' : _this2._makeLink(currentPage - 1, _this2.state.pageSize),
                      onClick: _this2._previous.bind(_this2) },
                    React.createElement(
                      "span",
                      null,
                      "‹"
                    )
                  )
                ));

                var addPageLi = function addPageLi(page, key) {
                  rows.push(React.createElement(
                    "li",
                    { key: key, className: _this2._getClassName(page) },
                    React.createElement(
                      "a",
                      { href: _this2._makeLink(page, _this2.state.pageSize), onClick: _this2._handleClick.bind(_this2, page) },
                      React.createElement(
                        "span",
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

                if (_this2.state.totalPages <= _this2.props.maximumPages) {
                  addPages(1, _this2.state.totalPages);
                } else {
                  var mid = _this2.props.maximumPages / 2 + 1;

                  if (_this2.state.currentPage <= mid) {
                    addPages(1, _this2.props.maximumPages);
                  } else if (_this2.state.currentPage >= _this2.state.totalPages - (mid - 2)) {
                    addPages(_this2.state.totalPages - (_this2.props.maximumPages - 1), _this2.state.totalPages);
                  } else {
                    var paginatorLastPage = _this2.state.currentPage + (mid - 2);

                    addPages(_this2.state.currentPage - (mid - 1), paginatorLastPage < _this2.state.totalPages ? paginatorLastPage : _this2.state.totalPages);
                  }
                }

                rows.push(React.createElement(
                  "li",
                  { key: "next", className: nextDisabled ? 'disabled' : null },
                  React.createElement(
                    "a",
                    { disabled: nextDisabled, href: nextDisabled ? '' : _this2._makeLink(currentPage + 1, _this2.state.pageSize), onClick: _this2._next.bind(_this2) },
                    React.createElement(
                      "span",
                      null,
                      "›"
                    )
                  )
                ));

                rows.push(React.createElement(
                  "li",
                  { key: "last", className: lastDisabled ? 'disabled' : null },
                  React.createElement(
                    "a",
                    { disabled: lastDisabled, href: lastDisabled ? '' : _this2._makeLink(_this2.state.totalPages, _this2.state.pageSize), onClick: _this2._last.bind(_this2) },
                    React.createElement(
                      "span",
                      null,
                      "»"
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
  goToPage: React.PropTypes.func.isRequired,
  makeLink: React.PropTypes.func.isRequired,
  noPageSizeSelector: React.PropTypes.bool,
  noGoTo: React.PropTypes.bool,
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
  maximumPages: 10,
  noPageSizeSelector: false,
  noGoTo: false
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
      loading: true
    };

    _this._updateStateFromRemoteSource(props.getData);
    return _this;
  }

  _createClass(Table, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        loading: true
      });

      this._updateStateFromRemoteSource(newProps.getData);
    }
  }, {
    key: "_updateStateFromRemoteSource",
    value: function _updateStateFromRemoteSource(getData) {
      var _this2 = this;

      getData().then(function (data) {
        _this2._updateStateFromFetchedData(data);
      }).done();
    }
  }, {
    key: "_updateStateFromFetchedData",
    value: function _updateStateFromFetchedData(data) {
      this.setState({
        data: data,
        totalResult: data.info.totalFiltered,
        loading: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) {
        return React.createElement(
          "div",
          null,
          this.props.loadingMessage
        );
      }

      //TODO Display error if wrong parameters

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
              goToPage: this.props.paginator.goToPage.bind(this.props.paginator),
              makeLink: this.props.paginator.makeLink.bind(this.props.paginator) })
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-12" },
            React.createElement(
              MainTable,
              {
                data: this.state.data.result,
                renderCell: this.props.renderCell,
                onCellClicked: this.props.onCellClicked,
                emptyTableMessage: this.props.emptyTableMessage,
                tableClassName: this.props.tableClassName },
              this.props.children
            )
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
              goToPage: this.props.paginator.goToPage.bind(this.props.paginator),
              makeLink: this.props.paginator.makeLink.bind(this.props.paginator),
              noPageSizeSelector: true,
              noGoTo: true })
          )
        )
      );
    }
  }]);

  return Table;
}(React.Component);

Table.propTypes = {
  emptyTableMessage: React.PropTypes.string.isRequired,
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
  loadingMessage: 'Loading...',
  tableClassName: 'table table-bordered'
};
return Table;
}));

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react-router'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('react-router'));
  } else {
    root.ReactRouterPaginator = factory(root.ReactRouter);
  }
}(this, function(ReactRouter) {
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactRouterPaginator = function () {
  function ReactRouterPaginator(location) {
    _classCallCheck(this, ReactRouterPaginator);

    this.location = location;
  }

  _createClass(ReactRouterPaginator, [{
    key: "goToPage",
    value: function goToPage(link) {
      ReactRouter.browserHistory.push(link);
    }
  }, {
    key: "makeLink",
    value: function makeLink(page, pageSize) {
      var query = {};

      /**
       * Preserve query parameters that would not have been set by the paginator
       */
      for (var prop in this._location.query) {
        if (this._location.query.hasOwnProperty(prop)) {
          query[prop] = this._location.query[prop];
        }
      }

      //Override any page and pageSize query parameters
      query.page = page;
      query.pageSize = pageSize;

      return ReactRouter.browserHistory.createPath({ pathname: this._location.pathname, query: query });
    }
  }, {
    key: "location",
    set: function set(location) {
      this._location = location;

      return this;
    }
  }, {
    key: "page",
    get: function get() {
      return ReactRouterPaginator.getAsIntegerOrGetDefaultValue(this._location.query.page, 1);
    }
  }, {
    key: "pageSize",
    get: function get() {
      return ReactRouterPaginator.getAsIntegerOrGetDefaultValue(this._location.query.pageSize, 10);
    }
  }], [{
    key: "getAsIntegerOrGetDefaultValue",
    value: function getAsIntegerOrGetDefaultValue(value, defaultValue) {
      return undefined === value ? defaultValue : parseInt(value, 10);
    }
  }]);

  return ReactRouterPaginator;
}();
return ReactRouterPaginator;
}));
