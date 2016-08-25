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
    "Go to page",
    _react2.default.createElement(
      "div",
      { className: "input-group" },
      _react2.default.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: 'Page:',
        value: props.goToPageFieldValue,
        onChange: props.handleGoToPageChanged,
        onKeyDown: props.handleGoToPageKeyDown }),
      _react2.default.createElement(
        "div",
        { className: "input-group-btn" },
        _react2.default.createElement(
          "button",
          {
            className: "btn btn-default",
            onClick: props.handleGoToPageGoButtonClicked },
          "Go"
        )
      )
    )
  );
};