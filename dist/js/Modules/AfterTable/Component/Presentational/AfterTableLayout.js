"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var renderComponent = function renderComponent(Component) {
    return _react2.default.createElement(Component, { store: props.store });
  };

  return _react2.default.createElement(
    "div",
    { className: "row after-table" },
    _react2.default.createElement(
      "div",
      { className: "col-md-8 col-md-offset-4" },
      _react2.default.createElement(
        "div",
        { className: "pull-right" },
        renderComponent(props.slot)
      )
    )
  );
};