'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ModuleLoader = require('./ModuleLoader');

var _ModuleLoader2 = _interopRequireDefault(_ModuleLoader);

var _CommonModule = require('./Modules/Common/CommonModule');

var _CommonModule2 = _interopRequireDefault(_CommonModule);

var _TableWrapperModule = require('./Modules/TableWrapper/TableWrapperModule');

var _TableWrapperModule2 = _interopRequireDefault(_TableWrapperModule);

var _TableModule = require('./Modules/Table/TableModule');

var _TableModule2 = _interopRequireDefault(_TableModule);

var _DataModule = require('./Modules/Data/DataModule');

var _DataModule2 = _interopRequireDefault(_DataModule);

var _AsyncDataModule = require('./Modules/AsyncData/AsyncDataModule');

var _AsyncDataModule2 = _interopRequireDefault(_AsyncDataModule);

var _ParseDataModule = require('./Modules/ParseData/ParseDataModule');

var _ParseDataModule2 = _interopRequireDefault(_ParseDataModule);

var _BeforeTableModule = require('./Modules/BeforeTable/BeforeTableModule');

var _BeforeTableModule2 = _interopRequireDefault(_BeforeTableModule);

var _AfterTableModule = require('./Modules/AfterTable/AfterTableModule');

var _AfterTableModule2 = _interopRequireDefault(_AfterTableModule);

var _SortModule = require('./Modules/Sort/SortModule');

var _SortModule2 = _interopRequireDefault(_SortModule);

var _RoutingModule = require('./Modules/Routing/RoutingModule');

var _RoutingModule2 = _interopRequireDefault(_RoutingModule);

var _FilterModule = require('./Modules/Filter/FilterModule');

var _FilterModule2 = _interopRequireDefault(_FilterModule);

var _FilterBeforeTableModule = require('./Modules/FilterBeforeTable/FilterBeforeTableModule');

var _FilterBeforeTableModule2 = _interopRequireDefault(_FilterBeforeTableModule);

var _FilterAsyncDataModule = require('./Modules/FilterAsyncData/FilterAsyncDataModule');

var _FilterAsyncDataModule2 = _interopRequireDefault(_FilterAsyncDataModule);

var _FilterAsyncDataRoutingModule = require('./Modules/FilterAsyncDataRouting/FilterAsyncDataRoutingModule');

var _FilterAsyncDataRoutingModule2 = _interopRequireDefault(_FilterAsyncDataRoutingModule);

var _GoToPageModule = require('./Modules/GoToPage/GoToPageModule');

var _GoToPageModule2 = _interopRequireDefault(_GoToPageModule);

var _GoToPageBeforeTableModule = require('./Modules/GoToPageBeforeTable/GoToPageBeforeTableModule');

var _GoToPageBeforeTableModule2 = _interopRequireDefault(_GoToPageBeforeTableModule);

var _GoToPageAsyncDataModule = require('./Modules/GoToPageAsyncData/GoToPageAsyncDataModule');

var _GoToPageAsyncDataModule2 = _interopRequireDefault(_GoToPageAsyncDataModule);

var _GoToPageAsyncDataRoutingModule = require('./Modules/GoToPageAsyncDataRouting/GoToPageAsyncDataRoutingModule');

var _GoToPageAsyncDataRoutingModule2 = _interopRequireDefault(_GoToPageAsyncDataRoutingModule);

var _PageSizeModule = require('./Modules/PageSize/PageSizeModule');

var _PageSizeModule2 = _interopRequireDefault(_PageSizeModule);

var _PageSizeBeforeTableModule = require('./Modules/PageSizeBeforeTable/PageSizeBeforeTableModule');

var _PageSizeBeforeTableModule2 = _interopRequireDefault(_PageSizeBeforeTableModule);

var _PageSizeAsyncDataModule = require('./Modules/PageSizeAsyncData/PageSizeAsyncDataModule');

var _PageSizeAsyncDataModule2 = _interopRequireDefault(_PageSizeAsyncDataModule);

var _PageSizeAsyncDataRoutingModule = require('./Modules/PageSizeAsyncDataRouting/PageSizeAsyncDataRoutingModule');

var _PageSizeAsyncDataRoutingModule2 = _interopRequireDefault(_PageSizeAsyncDataRoutingModule);

var _PaginatorModule = require('./Modules/Paginator/PaginatorModule');

var _PaginatorModule2 = _interopRequireDefault(_PaginatorModule);

var _PaginatorBeforeTableModule = require('./Modules/PaginatorBeforeTable/PaginatorBeforeTableModule');

var _PaginatorBeforeTableModule2 = _interopRequireDefault(_PaginatorBeforeTableModule);

var _PaginatorAfterTableModule = require('./Modules/PaginatorAfterTable/PaginatorAfterTableModule');

var _PaginatorAfterTableModule2 = _interopRequireDefault(_PaginatorAfterTableModule);

var _FilterPageModule = require('./Modules/FilterPage/FilterPageModule');

var _FilterPageModule2 = _interopRequireDefault(_FilterPageModule);

var _PageSizePageModule = require('./Modules/PageSizePage/PageSizePageModule');

var _PageSizePageModule2 = _interopRequireDefault(_PageSizePageModule);

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

      var store = (0, _ModuleLoader2.default)(props.opts, _CommonModule2.default, _TableWrapperModule2.default, _TableModule2.default, _DataModule2.default, _AsyncDataModule2.default, _ParseDataModule2.default, _BeforeTableModule2.default, _AfterTableModule2.default, _RoutingModule2.default, _SortModule2.default, _FilterModule2.default, _FilterBeforeTableModule2.default, _FilterAsyncDataModule2.default, _FilterAsyncDataRoutingModule2.default, _GoToPageModule2.default, _GoToPageBeforeTableModule2.default, _GoToPageAsyncDataModule2.default, _GoToPageAsyncDataRoutingModule2.default, _PageSizeModule2.default, _PageSizeBeforeTableModule2.default, _PageSizeAsyncDataModule2.default, _PageSizeAsyncDataRoutingModule2.default, _PaginatorModule2.default, _PaginatorBeforeTableModule2.default, _PaginatorAfterTableModule2.default, _FilterPageModule2.default, _PageSizePageModule2.default);

      this._store = store;
    }
  }, {
    key: 'render',
    value: function render() {
      var store = this._store;

      var TableWrapper = store.getState().get('common').get('components').get('tableWrapper').get('TableWrapper');

      return _react2.default.createElement(TableWrapper, { store: store });
    }
  }]);

  return TableWithStore;
}(_react.Component);

exports.default = TableWithStore;