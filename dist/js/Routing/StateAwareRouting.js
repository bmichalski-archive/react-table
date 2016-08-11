'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = require('../Action/Type/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _effects = require('redux-saga/effects');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [navigateToPage].map(regeneratorRuntime.mark);

function makeLinkFromState(makeLink, getState, pageOverride) {
  var state = getState();

  var location = state.get('location').toJS();

  var _state$get$toJS = state.get('paginator').toJS();

  var paginatorPage = _state$get$toJS.page;
  var pageSize = _state$get$toJS.pageSize;
  var q = _state$get$toJS.q;

  var immutableSortContext = state.get('table').get('sortContext');

  var sortContext = void 0;

  if (undefined === immutableSortContext) {
    sortContext = undefined;
  } else {
    sortContext = immutableSortContext.toJS();
  }

  var page = void 0;

  if (undefined === pageOverride) {
    page = paginatorPage;
  } else {
    page = pageOverride;
  }

  return makeLink(location, page, pageSize, q, sortContext);
}

function navigateToPage(makeLink, goToPage, getState) {
  return regeneratorRuntime.wrap(function navigateToPage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          goToPage(makeLinkFromState(makeLink, getState));

          _context.next = 3;
          return (0, _effects.put)({ type: _ActionType2.default.NAVIGATE_TO_PAGE });

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

var makeStateAwareRouting = function makeStateAwareRouting(getState, routing) {
  return {
    navigateToPage: navigateToPage.bind(undefined, routing.makeLink, routing.goToPage, getState),
    makeLinkFromState: makeLinkFromState.bind(undefined, routing.makeLink, getState)
  };
};

exports.default = makeStateAwareRouting;