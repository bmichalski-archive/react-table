'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MakeModule = require('../../Common/MakeModule');

var _MakeModule2 = _interopRequireDefault(_MakeModule);

var _Reducer = require('./Store/Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

var _ActionType = require('../Data/Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _ActionType3 = require('./Action/ActionType');

var _ActionType4 = _interopRequireDefault(_ActionType3);

var _ActionType5 = require('../GoToPage/Action/ActionType');

var _ActionType6 = _interopRequireDefault(_ActionType5);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getClassName = function getClassName(page, buttonPage) {
  return page === buttonPage ? 'current' : null;
};

exports.default = (0, _MakeModule2.default)('paginator', function () {
  return {
    reducer: _Reducer2.default,
    listeners: function listeners() {
      return _defineProperty({}, _ActionType2.default.DATA_REPLACE_DATA, function (action, dispatch, getState) {
        var options = getState().get('asyncData').get('state').get('options').toJS();

        var makeLinkFromState = function makeLinkFromState(page) {
          return getState().get('routing').get('makeLink')(getState, { page: page });
        };

        var filteredTotal = action.data.info.filteredTotal;
        var page = undefined === options.page ? 1 : options.page;
        var pageSize = undefined === options.pageSize ? 10 : options.pageSize;

        var totalPages = Math.ceil(filteredTotal / pageSize);

        var firstDisabled = page <= 1;
        var lastDisabled = page >= totalPages;
        var previousDisabled = firstDisabled;
        var nextDisabled = lastDisabled;

        var maximumPages = 10;

        var buttons = [];

        var showButtons = void 0;

        function addButtons(from, to) {
          var previousPage = page - 1;
          var nextPage = page + 1;
          var lastPage = totalPages;

          var showButtons = to > 1;

          buttons.push({
            key: 'first',
            page: 1,
            content: _react2.default.createElement(
              'span',
              null,
              '«'
            ),
            link: firstDisabled ? '' : makeLinkFromState(1),
            disabled: firstDisabled,
            className: firstDisabled ? 'disabled' : undefined
          });

          buttons.push({
            key: 'previous',
            page: previousPage,
            content: _react2.default.createElement(
              'span',
              null,
              '‹'
            ),
            link: previousDisabled ? '' : makeLinkFromState(previousPage),
            disabled: previousDisabled,
            className: previousDisabled ? 'disabled' : undefined
          });

          for (var i = from - 1; i < to; i += 1) {
            var buttonPage = i + 1;

            buttons.push({
              page: buttonPage,
              key: buttonPage,
              content: buttonPage,
              link: makeLinkFromState(buttonPage),
              disabled: false,
              className: getClassName(page, buttonPage)
            });
          }

          buttons.push({
            key: 'next',
            page: nextPage,
            content: _react2.default.createElement(
              'span',
              null,
              '›'
            ),
            link: nextDisabled ? '' : makeLinkFromState(nextPage),
            disabled: nextDisabled,
            className: nextDisabled ? 'disabled' : undefined
          });

          buttons.push({
            key: 'last',
            page: lastPage,
            content: _react2.default.createElement(
              'span',
              null,
              '»'
            ),
            link: lastDisabled ? '' : makeLinkFromState(lastPage),
            disabled: lastDisabled,
            className: lastDisabled ? 'disabled' : undefined
          });

          return showButtons;
        }

        if (totalPages <= maximumPages) {
          showButtons = addButtons(1, totalPages);
        } else {
          var mid = maximumPages / 2 + 1;

          if (page <= mid) {
            showButtons = addButtons(1, maximumPages);
          } else if (page >= totalPages - (mid - 2)) {
            showButtons = addButtons(totalPages - (maximumPages - 1), totalPages);
          } else {
            var paginatorLastPage = page + (mid - 2);

            showButtons = addButtons(page - (mid - 1), paginatorLastPage < totalPages ? paginatorLastPage : totalPages);
          }
        }

        buttons.forEach(function (button) {
          button.handleClick = function (page, event) {
            event.preventDefault();

            if (!button.disabled) {
              dispatch({
                type: _ActionType6.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE,
                page: page
              });
            }
          };
        });

        dispatch({
          type: _ActionType4.default.PAGINATOR_REPLACE_COMPUTED_VIEW_MODEL_BUTTONS,
          buttons: buttons,
          showButtons: showButtons
        });
      });
    }
  };
});