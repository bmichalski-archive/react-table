'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = require('../Type/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startDebounceQ(timeout) {
  return {
    type: _ActionType2.default.START_DEBOUNCE_Q,
    timeout: timeout
  };
}

function updateGoToPageValue(goToPageValue) {
  return {
    type: _ActionType2.default.UPDATE_GO_TO_PAGE_VALUE,
    goToPageValue: goToPageValue
  };
}

function updatePage(page) {
  return {
    type: _ActionType2.default.UPDATE_PAGE,
    page: page
  };
}

function updatePageSize(pageSize) {
  return function (dispatch) {
    dispatch({
      type: _ActionType2.default.UPDATE_PAGE_SIZE,
      pageSize: pageSize
    });

    dispatch(updatePage(1));
    dispatch(updateGoToPageValue(''));
  };
}

function updateQ(q) {
  return function (dispatch, getState) {
    clearTimeout(getState().get('paginator').get('debounce').get('timeout'));

    dispatch(startDebounceQ(setTimeout(function () {
      dispatch({
        type: _ActionType2.default.UPDATE_Q,
        q: q
      });

      dispatch(updatePage(1));
      dispatch(updateGoToPageValue(''));
    }, 300)));
  };
}

function doUpdateQFieldValue(qFieldValue) {
  return {
    type: _ActionType2.default.UPDATE_Q_FIELD_VALUE,
    qFieldValue: qFieldValue
  };
}

function updateQFieldValue(qFieldValue) {
  return function (dispatch) {
    dispatch(doUpdateQFieldValue(qFieldValue));

    dispatch(updateQ(qFieldValue));
  };
}

exports.default = {
  updateQFieldValue: updateQFieldValue,
  updateGoToPageValue: updateGoToPageValue,
  updatePageSize: updatePageSize,
  updatePage: updatePage
};