'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = require('../../Action/Type/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (state, action) {
  switch (action.type) {
    case _ActionType2.default.INIT_LOCATION:
    case _ActionType2.default.UPDATE_LOCATION:
      return state.merge({ location: action.location });
    case _ActionType2.default.INITIALIZE:
      return state.merge({ initialized: true });
    case _ActionType2.default.LOADING:
      return state.merge({ loading: action.loading });
    case _ActionType2.default.ERROR_LOADING_DATA:
      return state.merge({ errorLoadingData: true });
    default:
      return state;
  }
};