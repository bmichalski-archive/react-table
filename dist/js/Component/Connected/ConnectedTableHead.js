'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _TableHead = require('../Presentational/TableHead');

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableHeadActionCreator = require('../../Action/Creator/TableHeadActionCreator');

var _TableHeadActionCreator2 = _interopRequireDefault(_TableHeadActionCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state, props) {
  var children = [];

  _react2.default.Children.forEach(props.children, function (child, i) {
    children.push(_react2.default.cloneElement(child, { key: i, rowIndex: i }));
  });

  return {
    children: children
  };
}, _TableHeadActionCreator2.default)(_TableHead2.default);