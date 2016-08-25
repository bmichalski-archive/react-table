"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "label",
      null,
      "Filter",
      _react2.default.createElement("input", {
        type: "text",
        className: "form-control",
        value: props.qFieldValue,
        placeholder: "Filter:",
        onChange: props.handleQChanged })
    ),
    _react2.default.createElement("i", {
      className: "reset-button glyphicon glyphicon-remove-circle",
      onClick: props.resetButtonClicked })
  );
};