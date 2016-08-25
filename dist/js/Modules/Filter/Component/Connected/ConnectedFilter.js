'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _ActionType = require('../../Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _Filter = require('../Presentational/Filter');

var _Filter2 = _interopRequireDefault(_Filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
  var filterState = state.get('filter').get('state').toJS();

  return {
    qFieldValue: filterState.qFieldValue
  };
}, {
  handleQChanged: function handleQChanged(event) {
    return {
      type: _ActionType2.default.FILTER_UPDATE_Q_FIELD_VALUE,
      qFieldValue: event.target.value
    };
  },
  resetButtonClicked: function resetButtonClicked() {
    return {
      type: _ActionType2.default.FILTER_RESET_Q_FIELD_VALUE
    };
  }
})(_Filter2.default);