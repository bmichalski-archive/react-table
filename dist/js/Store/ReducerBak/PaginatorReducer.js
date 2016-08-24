'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = require('../../Action/Type/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (state, action) {
  switch (action.type) {
    case _ActionType2.default.UPDATE_GO_TO_PAGE_DISABLED:
      return state.merge({
        goToPageDisabled: action.goToPageDisabled
      });
    case _ActionType2.default.UPDATE_TOTAL_RESULT_AND_PAGES_AND_LINKS:
      return state.merge({
        buttons: action.buttons,
        showButtons: action.showButtons,
        firstDisabled: action.firstDisabled,
        lastDisabled: action.lastDisabled,
        previousDisabled: action.previousDisabled,
        nextDisabled: action.nextDisabled,
        totalResult: action.totalResult,
        totalPages: action.totalPages
      });
    case _ActionType2.default.START_DEBOUNCE_Q:
      return state.mergeIn(['debounce'], { timeout: action.timeout });
    case _ActionType2.default.INIT_Q_FIELD_VALUE:
    case _ActionType2.default.UPDATE_Q_FIELD_VALUE:
      return state.merge({ qFieldValue: action.qFieldValue });
    case _ActionType2.default.UPDATE_Q:
      return state.merge({ q: action.q });
    case _ActionType2.default.UPDATE_GO_TO_PAGE_VALUE:
      return state.merge({ goToPageValue: action.goToPageValue });
    case _ActionType2.default.UPDATE_PAGE_SIZE:
      return state.merge({ pageSize: action.pageSize });
    case _ActionType2.default.UPDATE_PAGE:
      return state.merge({ page: action.page });
    default:
      return state;
  }
};