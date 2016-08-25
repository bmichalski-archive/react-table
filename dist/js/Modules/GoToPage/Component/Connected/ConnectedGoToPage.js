'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _ActionType = require('../../../GoToPage/Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _GoToPage = require('../Presentational/GoToPage');

var _GoToPage2 = _interopRequireDefault(_GoToPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
  var goToPageState = state.get('goToPage').get('state').toJS();

  return {
    goToPageFieldValue: goToPageState.goToPageFieldValue
  };
}, {
  handleGoToPageChanged: function handleGoToPageChanged(event) {
    var value = event.target.value;

    return {
      type: _ActionType2.default.GO_TO_PAGE_FIELD_VALUE_CHANGED_EVENT,
      goToPageFieldValue: value
    };
  },
  handleGoToPageKeyDown: function handleGoToPageKeyDown(event) {
    return {
      type: _ActionType2.default.GO_TO_PAGE_KEY_DOWN_EVENT,
      keyCode: event.keyCode
    };
  },
  handleGoToPageGoButtonClicked: function handleGoToPageGoButtonClicked(event) {
    event.preventDefault();

    return {
      type: _ActionType2.default.GO_TO_PAGE_GO_BUTTON_CLICKED_EVENT
    };
  }
})(_GoToPage2.default);