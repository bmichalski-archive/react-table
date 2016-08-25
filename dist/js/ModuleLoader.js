'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxImmutable = require('redux-immutable');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _ActionFilter = require('./ActionFilter');

var _ActionFilter2 = _interopRequireDefault(_ActionFilter);

var _ActionListener = require('./ActionListener');

var _ActionListener2 = _interopRequireDefault(_ActionListener);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _ActionType = require('./Modules/Common/Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (opts) {
  for (var _len = arguments.length, modules = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    modules[_key - 1] = arguments[_key];
  }

  var reducers = {};
  var components = {};
  var actionFilterCallbacks = {};
  var preActionHandlingCallbacks = {};
  var postActionHandlingCallbacks = {};
  var bootFunctions = [];

  modules.forEach(function (module) {
    var moduleDefinition = module(opts[module.moduleName]);
    var moduleName = module.moduleName;

    _assert2.default.notStrictEqual(undefined, moduleName, 'Missing module name.');
    _assert2.default.notStrictEqual(null, moduleName, 'Missing module name.');
    _assert2.default.notStrictEqual('', moduleName, 'Missing module name.');

    if (undefined === moduleDefinition.reducer) {
      reducers[moduleName] = function () {
        var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return state;
      };
    } else {
      reducers[moduleName] = moduleDefinition.reducer;
    }

    if (undefined !== moduleDefinition.components) {
      components[moduleName] = moduleDefinition.components;
    }

    if (undefined !== moduleDefinition.boot) {
      bootFunctions.push(moduleDefinition.boot);
    }

    if (undefined !== moduleDefinition.filters) {
      _lodash2.default.forEach(moduleDefinition.filters(), function (filter, key) {
        if (undefined === actionFilterCallbacks[key]) {
          actionFilterCallbacks[key] = [];
        }

        actionFilterCallbacks[key].push(filter);
      });
    }

    if (undefined !== moduleDefinition.preListeners) {
      _lodash2.default.forEach(moduleDefinition.preListeners(), function (listener, key) {
        if (undefined === preActionHandlingCallbacks[key]) {
          preActionHandlingCallbacks[key] = [];
        }

        preActionHandlingCallbacks[key].push(listener);
      });
    }

    if (undefined !== moduleDefinition.listeners) {
      _lodash2.default.forEach(moduleDefinition.listeners(), function (listener, key) {
        if (undefined === postActionHandlingCallbacks[key]) {
          postActionHandlingCallbacks[key] = [];
        }

        postActionHandlingCallbacks[key].push(listener);
      });
    }
  });

  var actionFilterObj = (0, _ActionFilter2.default)();

  var OPTS_INIT = 'OPTS_INIT';

  var optsReducer = function optsReducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? _immutable2.default.fromJS({}) : arguments[0];
    var action = arguments[1];

    switch (action.type) {
      case OPTS_INIT:
        return state.merge(action.opts);
      default:
        return state;
    }
  };

  var store = (0, _redux.createStore)((0, _reduxImmutable.combineReducers)(_extends({}, reducers, {
    opts: optsReducer
  })), (0, _redux.compose)((0, _redux.applyMiddleware)(actionFilterObj.actionFilter.call(actionFilterObj, actionFilterCallbacks), (0, _ActionListener2.default)(preActionHandlingCallbacks, postActionHandlingCallbacks), _reduxThunk2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
    return f;
  }));

  store.dispatch({
    type: OPTS_INIT,
    opts: opts
  });

  store.dispatch({
    type: _ActionType2.default.COMMON_SET_COMPONENTS,
    components: components
  });

  actionFilterObj.store = store;

  bootFunctions.forEach(function (bootFunction) {
    bootFunction(store.dispatch, store.getState);
  });

  //Test

  //End tests

  return store;
};