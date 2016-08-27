'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableBody = require('../Presentational/TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _ContainerTableRow = require('../Container/ContainerTableRow');

var _ContainerTableRow2 = _interopRequireDefault(_ContainerTableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  function renderRows() {
    return props.rows.map(function (row, i) {
      return _react2.default.createElement(_ContainerTableRow2.default, { key: i, cells: row.cells, props: row.props });
    });
  }

  return _react2.default.createElement(
    _TableBody2.default,
    { props: props.props },
    renderRows()
  );
};