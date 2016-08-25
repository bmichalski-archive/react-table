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
    { className: "row before-table" },
    _react2.default.createElement(
      "div",
      { className: "col-md-12" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-md-3" },
          renderComponent(props.rows[0].slots[0])
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-2" },
          renderComponent(props.rows[0].slots[1])
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-md-2" },
          renderComponent(props.rows[1].slots[0])
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-8 col-md-offset-2" },
          _react2.default.createElement(
            "div",
            { className: "pull-right" },
            renderComponent(props.rows[1].slots[1])
          )
        )
      )
    )
  );
};