'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _TableHeadRow = require('../Presentational/TableHeadRow');

var _TableHeadRow2 = _interopRequireDefault(_TableHeadRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state, props) {
  var children = [];

  _react2.default.Children.forEach(props.children, function (child, i) {
    children.push(_react2.default.cloneElement(child, { key: i, rowIndex: props.rowIndex, cellIndex: i }));
  });

  return {
    children: children
  };
})(_TableHeadRow2.default);