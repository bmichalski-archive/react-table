"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (actionListenerCallbacks) {
  return function (store) {
    return function (next) {
      return function (action) {
        var result = next(action);

        var callbacks = actionListenerCallbacks[action.type];

        if (undefined !== callbacks) {
          callbacks.forEach(function (cb) {
            cb(store.dispatch, action);
          });
        }

        return result;
      };
    };
  };
};