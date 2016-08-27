'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableHead = require('../Presentational/TableHead');

var _TableHead2 = _interopRequireDefault(_TableHead);

var _ContainerTableRow = require('./ContainerTableRow');

var _ContainerTableRow2 = _interopRequireDefault(_ContainerTableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var renderRows = function renderRows() {
    return props.rows.map(function (row, i) {
      return _react2.default.createElement(_ContainerTableRow2.default, { key: i, cells: row.cells, props: row.props });
    });
  };

  return _react2.default.createElement(
    _TableHead2.default,
    { props: props.props },
    renderRows()
  );
};