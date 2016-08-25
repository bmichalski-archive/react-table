'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = require('./Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _Reducer = require('./Store/Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var goToPage = function goToPage(router, pathname, query) {
  router.push(router.createPath({ pathname: pathname, query: query }));
};

var RoutingModule = function RoutingModule(opts) {
  return {
    reducer: _Reducer2.default,
    listeners: function listeners() {
      return _defineProperty({}, _ActionType2.default.ROUTING_UPDATE_ROUTE, function (action, dispatch, getState) {
        //Override any page and pageSize query parameters
        var query = Object.assign({}, getState().get('routing').get('state').get('previousLocationQuery').toJS(), action.queryParams);

        goToPage(opts.router, opts.location.pathname, query);

        dispatch({
          type: _ActionType2.default.SET_PREVIOUS_LOCATION_QUERY,
          previousLocationQuery: query
        });
      });
    },
    boot: function boot(dispatch) {
      dispatch({
        type: _ActionType2.default.SET_PREVIOUS_LOCATION_QUERY,
        previousLocationQuery: opts.location.query
      });

      dispatch({
        type: _ActionType2.default.SET_MAKE_LINK,
        makeLink: function makeLink(getState, paramQuery) {
          //Override any page and pageSize query parameters
          var query = Object.assign({}, getState().get('routing').get('state').get('previousLocationQuery').toJS(), paramQuery);

          return opts.router.createPath({
            pathname: opts.location.pathname,
            query: query
          });
        }
      });
    }
  };
};

RoutingModule.moduleName = 'routing';

exports.default = RoutingModule;