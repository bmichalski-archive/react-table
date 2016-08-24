'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * sort structure:
 *   {
 *     sort: undefined, //string, field name
 *     order: undefined //string, asc or desc
 *   }
 *
 * @returns {Immutable.Map}
 */
exports.default = function () {
  var defaultState = _immutable2.default.fromJS({
    // opts: {
    //   paginator: {
    //     debounce: {
    //       timeout: undefined
    //     }
    //   }
    // },
    // context: {
    //   location: undefined
    // },
    // sort: undefined,
    // paginator: {
    //   state: {
    //     showButtons: false,
    //     isGoToPageDisabled: true,
    //     isFirstDisabled: true,
    //     isLastDisabled: true,
    //     isPreviousDisabled: true,
    //     isNextDisabled: true,
    //     fields: {
    //       q: '',
    //       goToPage: ''
    //     }
    //   },
    //   computedViewModel: {
    //     buttons: []
    //   },
    //   data: {
    //     totalPages: 0,
    //     totalResult: 0,
    //     page: 0,
    //     pageSize: 0,
    //     q: ''
    //   }
    // }
  });

  return defaultState;
};