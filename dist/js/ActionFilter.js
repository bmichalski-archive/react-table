'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return {
    actionFilter: function actionFilter(actionFiltersCallbacks) {
      var _this = this;

      return function (store) {
        return function (next) {
          return function (action) {
            if (undefined === action) {
              return;
            }

            var callbacks = actionFiltersCallbacks[action.type];

            if (undefined !== callbacks) {
              callbacks.forEach(function (cb) {
                action = cb(action, _this.store.dispatch, _this.store.getState, _this.store);

                _assert2.default.notStrictEqual(undefined, action);
              });
            }

            return next(action);
          };
        };
      };
    }
  };
};