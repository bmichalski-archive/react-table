'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ActionType = require('../Action/Type/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _ConnectedFullTable = require('./Connected/ConnectedFullTable');

var _ConnectedFullTable2 = _interopRequireDefault(_ConnectedFullTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Table).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var props = this.props;
      var store = props.store;

      store.dispatch({
        type: _ActionType2.default.TABLE_HEAD_INIT_CHILDREN,
        children: props.children
      });

      store.dispatch({
        type: _ActionType2.default.INIT_LOCATION,
        location: props.location
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: props.store },
        _react2.default.createElement(
          _ConnectedFullTable2.default,
          null,
          props.children
        )
      );
    }
  }]);

  return Table;
}(_react.Component);

exports.default = Table;