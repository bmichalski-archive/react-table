'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TableHeadTh = require('../Presentational/TableHeadTh');

var _TableHeadTh2 = _interopRequireDefault(_TableHeadTh);

var _TableHeadThActionCreator = require('../../Action/Creator/TableHeadThActionCreator');

var _TableHeadThActionCreator2 = _interopRequireDefault(_TableHeadThActionCreator);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
  var immutableSortContext = state.get('table').get('sortContext');

  var sortContext = void 0;

  if (undefined === immutableSortContext) {
    sortContext = undefined;
  } else {
    sortContext = immutableSortContext.toJS();
  }

  return {
    sortContext: sortContext
  };
}, _TableHeadThActionCreator2.default)(_TableHeadTh2.default);