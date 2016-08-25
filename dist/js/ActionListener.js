"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (preActionHandlingCallbacks, postActionHandlingCallbacks) {
  return function (store) {
    return function (next) {
      return function (action) {
        var preCb = preActionHandlingCallbacks[action.type];
        var postCb = postActionHandlingCallbacks[action.type];

        if (undefined !== preCb) {
          preCb.forEach(function (cb) {
            cb(action, store.dispatch, store.getState);
          });
        }

        var result = next(action);

        if (undefined !== postCb) {
          postCb.forEach(function (cb) {
            cb(action, store.dispatch, store.getState);
          });
        }

        return result;
      };
    };
  };
};