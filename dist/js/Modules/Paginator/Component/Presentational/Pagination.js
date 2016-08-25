"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addPageButton = function addPageButton(page, key, content, link, className, disabled, handleClick) {
  return _react2.default.createElement(
    "li",
    {
      key: key,
      className: className },
    _react2.default.createElement(
      "a",
      {
        disabled: disabled,
        href: link,
        onClick: handleClick.bind(undefined, page) },
      _react2.default.createElement(
        "span",
        null,
        content
      )
    )
  );
};

exports.default = function (props) {
  var showButtons = props.showButtons;

  if (!showButtons) {
    return null;
  }

  var buttons = props.buttons;

  return _react2.default.createElement(
    "ul",
    { className: "pagination" },
    function () {
      return buttons.map(function (button) {
        return addPageButton(button.page, button.key, button.content, button.link, button.className, button.disabled, button.handleClick);
      });
    }()
  );
};