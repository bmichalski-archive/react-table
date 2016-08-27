'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('../Presentational/Table');

var _Table2 = _interopRequireDefault(_Table);

var _ContainerTableHead = require('../Container/ContainerTableHead');

var _ContainerTableHead2 = _interopRequireDefault(_ContainerTableHead);

var _ContainerTableBody = require('../Container/ContainerTableBody');

var _ContainerTableBody2 = _interopRequireDefault(_ContainerTableBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var head = props.head;

  var renderBodys = function renderBodys() {
    return props.bodys.map(function (body, i) {
      return _react2.default.createElement(_ContainerTableBody2.default, { key: i, rows: body.rows, props: body.props });
    });
  };

  return _react2.default.createElement(
    _Table2.default,
    { props: props.props },
    _react2.default.createElement(_ContainerTableHead2.default, { rows: head.rows, props: head.props }),
    renderBodys()
  );
};