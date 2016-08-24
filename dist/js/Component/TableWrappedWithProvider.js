'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ConnectedFullTable = require('./Connected/ConnectedFullTable');

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