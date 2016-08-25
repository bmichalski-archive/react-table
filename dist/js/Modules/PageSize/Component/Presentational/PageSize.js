"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    "label",
    null,
    "Page size ",
    _react2.default.createElement(
      "select",
      {
        className: "form-control",
        value: props.pageSize,
        onChange: props.handlePageSizeChange },
      _react2.default.createElement(
        "option",
        { value: 10 },
        "10"
      ),
      _react2.default.createElement(
        "option",
        { value: 25 },
        "25"
      ),
      _react2.default.createElement(
        "option",
        { value: 50 },
        "50"
      ),
      _react2.default.createElement(
        "option",
        { value: 100 },
        "100"
      )
    )
  );
};