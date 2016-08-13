"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableHeadTh = function (_Component) {
  _inherits(TableHeadTh, _Component);

  function TableHeadTh() {
    _classCallCheck(this, TableHeadTh);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableHeadTh).apply(this, arguments));
  }

  _createClass(TableHeadTh, [{
    key: "render",
    value: function render() {
      var props = this.props;

      var handleOnClick = function handleOnClick() {
        var sortableProp = props.sortable;

        if (sortableProp) {
          props.toggleSort(props.name);
        }
      };

      var handleResetSortContextClicked = function handleResetSortContextClicked(event) {
        event.stopPropagation();

        props.resetSortContext();
      };

      return _react2.default.createElement(
        "th",
        {
          className: props.className,
          onClick: handleOnClick },
        props.children,
        function () {
          if (props.sortable) {
            return _react2.default.createElement(
              "div",
              { className: "pull-right" },
              function () {
                if (props.isCurrentSort) {
                  return _react2.default.createElement("i", {
                    className: "glyphicon glyphicon-remove",
                    onClick: handleResetSortContextClicked });
                }
              }(),
              " ",
              _react2.default.createElement("i", { className: props.iconClassName })
            );
          }
        }()
      );
    }
  }]);

  return TableHeadTh;
}(_react.Component);

TableHeadTh.propTypes = {
  className: _react.PropTypes.string.isRequired,
  sortable: _react.PropTypes.any.isRequired,
  name: _react.PropTypes.string,
  toggleSort: _react.PropTypes.func, //.isRequired
  resetSortContext: _react.PropTypes.func,
  isCurrentSort: _react.PropTypes.bool.isRequired,
  iconClassName: _react.PropTypes.string.isRequired,
  sortContext: _react.PropTypes.shape({
    sort: _react.PropTypes.string,
    order: _react.PropTypes.string
  }) //.isRequired
};

TableHeadTh.defaultProps = {
  sortable: false
};

exports.default = TableHeadTh;