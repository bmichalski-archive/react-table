'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MakeModule = require('../../Common/MakeModule');

var _MakeModule2 = _interopRequireDefault(_MakeModule);

var _ActionType = require('../Filter/Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _ActionType3 = require('../AsyncData/Action/ActionType');

var _ActionType4 = _interopRequireDefault(_ActionType3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var makeOnFilterUpdateQFieldValue = function makeOnFilterUpdateQFieldValue() {
  var updateQFieldValueTimeout = undefined;

  return function (overrideDelay, action, dispatch) {
    if (undefined !== updateQFieldValueTimeout) {
      clearTimeout(updateQFieldValueTimeout);
    }

    /**
     * Taking snapshot of value,
     * important to get action.qFieldValue as it was when invoking function,
     * not as it will be 300 ms later
     */
    var rawQValue = action.qFieldValue;
    var q = '' === rawQValue ? undefined : rawQValue;

    var delay = undefined;

    if (undefined === overrideDelay) {
      if (undefined === action.delay) {
        delay = 300;
      } else {
        delay = action.delay;
      }
    } else {
      delay = overrideDelay;
    }

    var doUpdate = function doUpdate() {
      dispatch({
        type: _ActionType4.default.ASYNC_UPDATE_OPTIONS,
        options: {
          q: q
        }
      });

      dispatch({
        type: _ActionType4.default.ASYNC_DATA_UPDATE_DATA
      });
    };

    if (0 === delay) {
      updateQFieldValueTimeout = undefined;

      doUpdate();
    } else {
      updateQFieldValueTimeout = setTimeout(doUpdate, delay);
    }
  };
};

exports.default = (0, _MakeModule2.default)('filterAsyncData', function () {
  var onFilterUpdateQFieldValue = makeOnFilterUpdateQFieldValue();

  return {
    listeners: function listeners() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, _ActionType2.default.FILTER_UPDATE_Q_FIELD_VALUE, onFilterUpdateQFieldValue.bind(undefined, undefined)), _defineProperty(_ref, _ActionType2.default.FILTER_RESET_Q_FIELD_VALUE, onFilterUpdateQFieldValue.bind(undefined, 0)), _ref;
    }
  };
});