"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortIcon = function SortIcon(props) {
  var handleResetSortContextClicked = props.handleResetSortContextClicked;
  var iconClassName = props.iconClassName;
  var showRemoveIcon = props.showRemoveIcon;

  function renderRemoveIcon() {
    if (showRemoveIcon) {
      return _react2.default.createElement("i", {
        className: "glyphicon glyphicon-remove reset-sort",
        onClick: handleResetSortContextClicked });
    }
  }

  return _react2.default.createElement(
    "div",
    { className: "sort pull-right" },
    renderRemoveIcon(),
    " ",
    _react2.default.createElement("i", { className: iconClassName })
  );
};

SortIcon.displayName = 'SortIcon';

exports.default = SortIcon;