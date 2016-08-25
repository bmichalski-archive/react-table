'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MakeModule = require('../../Common/MakeModule');

var _MakeModule2 = _interopRequireDefault(_MakeModule);

var _Reducer = require('./Store/Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

var _ActionType = require('./Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isPositiveInteger(value) {
  return (/^[0-9]+$/.test(value) && value >= 1
  );
}

var onFieldValueChangedEvent = function onFieldValueChangedEvent(action, dispatch) {
  var value = action.goToPageFieldValue;

  if (!('' === value || isPositiveInteger(value))) {
    return;
  }

  dispatch({
    type: _ActionType2.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE_FIELD_VALUE,
    goToPageFieldValue: value
  });
};

function getPageFromGetState(getState) {
  var goToPageState = getState().get('goToPage').get('state').toJS();
  var goToPageFieldValue = goToPageState.goToPageFieldValue;

  return '' === goToPageFieldValue ? undefined : parseInt(goToPageFieldValue, 10);
}

function dispatchGoToPageUpdateGoToPageFromGetState(dispatch, getState) {
  var page = getPageFromGetState(getState);

  dispatch({
    type: _ActionType2.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE,
    page: page
  });
}

exports.default = (0, _MakeModule2.default)('goToPage', function () {
  return {
    reducer: _Reducer2.default,
    listeners: function listeners() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, _ActionType2.default.GO_TO_PAGE_FIELD_VALUE_CHANGED_EVENT, onFieldValueChangedEvent), _defineProperty(_ref, _ActionType2.default.GO_TO_PAGE_KEY_DOWN_EVENT, function (action, dispatch, getState) {
        if (13 !== action.keyCode) {
          return;
        }

        dispatchGoToPageUpdateGoToPageFromGetState(dispatch, getState);
      }), _defineProperty(_ref, _ActionType2.default.GO_TO_PAGE_GO_BUTTON_CLICKED_EVENT, function (action, dispatch, getState) {
        dispatchGoToPageUpdateGoToPageFromGetState(dispatch, getState);
      }), _ref;
    }
  };
});