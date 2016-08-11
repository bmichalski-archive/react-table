'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxSaga = require('redux-saga');

var _ActionType = require('../Action/Type/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _Common = require('../Common');

var _effects = require('redux-saga/effects');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [updateGoToPageDisabled, updatePaginator, updateQSaga, updatePageSaga, updatePageSizeSaga, updateGoToPageValueSaga, updateSortContextSaga, updateDataSaga].map(regeneratorRuntime.mark);

function updateGoToPageDisabled(getState) {
  var goToPageValue, goToPageDisabled;
  return regeneratorRuntime.wrap(function updateGoToPageDisabled$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          goToPageValue = getState().get('paginator').get('goToPageValue');
          goToPageDisabled = !((0, _Common.isPositiveInteger)(goToPageValue) && goToPageValue >= 1);
          _context.next = 4;
          return (0, _effects.put)({
            type: _ActionType2.default.UPDATE_GO_TO_PAGE_DISABLED,
            goToPageDisabled: goToPageDisabled
          });

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function getClassName(page, buttonPage) {
  return page === buttonPage ? 'current' : null;
}

function updatePaginator(getState, makeLinkFromState) {
  var state, paginator, totalFiltered, page, pageSize, totalPages, firstDisabled, lastDisabled, previousDisabled, nextDisabled, maximumPages, location, q, buttons, showButtons, addButtons, mid, paginatorLastPage;
  return regeneratorRuntime.wrap(function updatePaginator$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          addButtons = function addButtons(from, to) {
            var previousPage = page - 1;
            var nextPage = page + 1;
            var lastPage = totalPages;

            showButtons = to > 1;

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
          };

          state = getState();
          paginator = state.get('paginator');
          totalFiltered = state.get('table').get('totalFiltered');
          page = paginator.get('page');
          pageSize = paginator.get('pageSize');
          totalPages = Math.ceil(totalFiltered / pageSize);
          firstDisabled = page <= 1;
          lastDisabled = page >= totalPages;
          previousDisabled = firstDisabled;
          nextDisabled = lastDisabled;
          maximumPages = 10;
          location = state.get('location').toJS();
          q = paginator.get('q');
          buttons = [];
          showButtons = void 0;


          if (totalPages <= maximumPages) {
            addButtons(1, totalPages);
          } else {
            mid = maximumPages / 2 + 1;


            if (page <= mid) {
              addButtons(1, maximumPages);
            } else if (page >= totalPages - (mid - 2)) {
              addButtons(totalPages - (maximumPages - 1), totalPages);
            } else {
              paginatorLastPage = page + (mid - 2);


              addButtons(page - (mid - 1), paginatorLastPage < totalPages ? paginatorLastPage : totalPages);
            }
          }

          _context2.next = 19;
          return (0, _effects.put)({
            type: _ActionType2.default.UPDATE_TOTAL_RESULT_AND_PAGES_AND_LINKS,
            buttons: buttons,
            showButtons: showButtons,
            firstDisabled: firstDisabled,
            lastDisabled: lastDisabled,
            nextDisabled: nextDisabled,
            previousDisabled: previousDisabled,
            totalPages: totalPages,
            totalResult: totalFiltered
          });

        case 19:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

function updateQSaga(stateAwareRouting) {
  return regeneratorRuntime.wrap(function updateQSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.delegateYield((0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_Q, stateAwareRouting.navigateToPage), 't0', 1);

        case 1:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

function updatePageSaga(getState, stateAwareRouting) {
  return regeneratorRuntime.wrap(function updatePageSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return [(0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_PAGE, stateAwareRouting.navigateToPage), (0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_PAGE, updatePaginator.bind(undefined, getState, stateAwareRouting.makeLinkFromState))];

        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this);
}

function updatePageSizeSaga(getState, stateAwareRouting) {
  return regeneratorRuntime.wrap(function updatePageSizeSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return [(0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_PAGE_SIZE, stateAwareRouting.navigateToPage), (0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_PAGE_SIZE, updatePaginator.bind(undefined, getState, stateAwareRouting.makeLinkFromState))];

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this);
}

function updateGoToPageValueSaga(getState) {
  return regeneratorRuntime.wrap(function updateGoToPageValueSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.delegateYield((0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_GO_TO_PAGE_VALUE, updateGoToPageDisabled.bind(undefined, getState)), 't0', 1);

        case 1:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked[5], this);
}

function updateSortContextSaga(getState, stateAwareRouting) {
  return regeneratorRuntime.wrap(function updateSortContextSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.delegateYield((0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_SORT_CONTEXT, updatePaginator.bind(undefined, getState, stateAwareRouting.makeLinkFromState)), 't0', 1);

        case 1:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked[6], this);
}

function updateDataSaga(getState, stateRouting) {
  return regeneratorRuntime.wrap(function updateDataSaga$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          return _context8.delegateYield((0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_DATA, updatePaginator.bind(undefined, getState, stateRouting.makeLinkFromState)), 't0', 1);

        case 1:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked[7], this);
}

var getPaginatorSaga = function getPaginatorSaga(getState, stateAwareRouting) {
  return [updateQSaga(stateAwareRouting), updatePageSaga(getState, stateAwareRouting), updatePageSizeSaga(getState, stateAwareRouting), updateGoToPageValueSaga(getState), updateSortContextSaga(getState, stateAwareRouting), updateDataSaga(getState, stateAwareRouting)];
};

exports.default = getPaginatorSaga;