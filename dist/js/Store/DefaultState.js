'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (sagaMiddleware, opts) {
  var defaultState = _immutable2.default.fromJS({
    saga: sagaMiddleware,
    location: undefined,
    loading: false,
    initialized: false,
    errorLoadingData: false,
    errorLoadingDataMessage: 'Error loading data.',
    loadingMessage: 'Loading data...',
    table: {
      data: [],
      total: 0,
      totalFiltered: 0,
      onCellClicked: opts.onCellClicked,
      getData: opts.getData,
      renderCell: opts.renderCell,
      sortContext: undefined
    },
    paginator: {
      buttons: [],
      showButtons: false,
      goToPageDisabled: true,
      firstDisabled: true,
      lastDisabled: true,
      previousDisabled: true,
      nextDisabled: true,
      totalPages: 0,
      totalResult: 0,
      page: 0,
      pageSize: 0,
      q: '',
      qFieldValue: '',
      goToPageValue: '',
      debounce: {
        timeout: undefined
      }
    }
  });

  return defaultState;
};