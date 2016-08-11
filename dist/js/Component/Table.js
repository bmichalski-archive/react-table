'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Store = require('../Store/Store');

var _Store2 = _interopRequireDefault(_Store);

var _MainSaga = require('../Saga/MainSaga');

var _MainSaga2 = _interopRequireDefault(_MainSaga);

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

  function Table(props) {
    var _marked = [rootSaga].map(regeneratorRuntime.mark);

    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this, props));

    _this._TableWrapper = (0, _ConnectedFullTable2.default)(props);

    _this._location = props.opts.location;
    var store = (0, _Store2.default)(props.opts);

    function rootSaga() {
      return regeneratorRuntime.wrap(function rootSaga$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _MainSaga2.default)(store.getState, props.opts.browserHistory);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _marked[0], this);
    }

    store.getState().get('saga').run(rootSaga);

    _this._store = store;
    return _this;
  }

  _createClass(Table, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._store.dispatch({ type: _ActionType2.default.INIT_LOCATION, location: this._location });
    }
  }, {
    key: 'render',
    value: function render() {
      var TableWrapper = this._TableWrapper;

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this._store },
        _react2.default.createElement(TableWrapper, null)
      );
    }
  }]);

  return Table;
}(_react.Component);

exports.default = Table;