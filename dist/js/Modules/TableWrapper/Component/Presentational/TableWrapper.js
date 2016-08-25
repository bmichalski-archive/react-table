"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var Table = props.Table;
  var BeforeTableLayout = props.BeforeTableLayout;
  var AfterTableLayout = props.AfterTableLayout;

  if (props.overrideTable) {
    return _react2.default.createElement(
      "div",
      { className: "table-wrapper" },
      props.overrideTableWith
    );
  } else if (props.overrideTableInnerAndAfterTableLayout) {
    return _react2.default.createElement(
      "div",
      { className: "table-wrapper" },
      _react2.default.createElement(BeforeTableLayout, { store: props.store }),
      props.overrideTableInnerAndAfterTableLayoutWith
    );
  } else {
    return _react2.default.createElement(
      "div",
      { className: "table-wrapper" },
      _react2.default.createElement(BeforeTableLayout, { store: props.store }),
      _react2.default.createElement(Table, { store: props.store }),
      _react2.default.createElement(AfterTableLayout, { store: props.store })
    );
  }
};