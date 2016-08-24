'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableWrappedWithProvider = require('./TableWrappedWithProvider');

var _TableWrappedWithProvider2 = _interopRequireDefault(_TableWrappedWithProvider);

var _ModuleLoader = require('../ModuleLoader');

var _ModuleLoader2 = _interopRequireDefault(_ModuleLoader);

var _TableModule = require('../Modules/Table/TableModule');

var _TableModule2 = _interopRequireDefault(_TableModule);

var _DataModule = require('../Modules/Data/DataModule');

var _DataModule2 = _interopRequireDefault(_DataModule);

var _AsyncDataModule = require('../Modules/AsyncData/AsyncDataModule');

var _AsyncDataModule2 = _interopRequireDefault(_AsyncDataModule);

var _ParseDataModule = require('../Modules/ParseData/ParseDataModule');

var _ParseDataModule2 = _interopRequireDefault(_ParseDataModule);

var _PaginatorModule = require('../Modules/Paginator/PaginatorModule');

var _PaginatorModule2 = _interopRequireDefault(_PaginatorModule);

var _SortModule = require('../Modules/Sort/SortModule');

var _SortModule2 = _interopRequireDefault(_SortModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableWithStore = function (_Component) {
  _inherits(TableWithStore, _Component);

  function TableWithStore() {
    _classCallCheck(this, TableWithStore);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableWithStore).apply(this, arguments));
  }

  _createClass(TableWithStore, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var props = this.props;

      var _moduleLoader = (0, _ModuleLoader2.default)(props.opts, _TableModule2.default, _DataModule2.default, _AsyncDataModule2.default, _ParseDataModule2.default, _PaginatorModule2.default, _SortModule2.default);

      var store = _moduleLoader.store;
      var components = _moduleLoader.components;
      var beforeTableComponents = _moduleLoader.beforeTableComponents;


      this._store = store;
      this._components = components;
      this._beforeTableComponents = beforeTableComponents;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var store = this._store;
      var Table = this._components.table.Table;

      var renderBeforeTableComponents = function renderBeforeTableComponents() {
        return _this2._beforeTableComponents.map(function (component, i) {
          return _react2.default.createElement(
            'div',
            { key: i },
            component
          );
        });
      };

      return _react2.default.createElement(
        'div',
        { className: 'table-wrapper' },
        renderBeforeTableComponents(),
        _react2.default.createElement(Table, { store: store })
      );
    }
  }]);

  return TableWithStore;
}(_react.Component);

exports.default = TableWithStore;