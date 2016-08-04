;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react-router'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('react-router'));
  } else {
    root.ReactRouterPaginator = factory(root.ReactRouter);
  }
}(this, function(ReactRouter) {
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactRouterPaginator = function () {
  function ReactRouterPaginator(location) {
    _classCallCheck(this, ReactRouterPaginator);

    this.location = location;
  }

  _createClass(ReactRouterPaginator, [{
    key: 'goToPage',
    value: function goToPage(link) {
      ReactRouter.browserHistory.push(link);
    }
  }, {
    key: 'makeLink',
    value: function makeLink(page, pageSize, q) {
      var query = {};

      /**
       * Preserve query parameters that would not have been set by the paginator
       */
      for (var prop in this._location.query) {
        if (this._location.query.hasOwnProperty(prop)) {
          query[prop] = this._location.query[prop];
        }
      }

      //Override any page and pageSize query parameters
      query.page = page;
      query.pageSize = pageSize;
      query.q = q;

      return ReactRouter.browserHistory.createPath({ pathname: this._location.pathname, query: query });
    }
  }, {
    key: 'location',
    set: function set(location) {
      this._location = location;

      return this;
    }
  }, {
    key: 'page',
    get: function get() {
      return ReactRouterPaginator.getAsIntegerOrGetDefaultValue(this._location.query.page, 1);
    }
  }, {
    key: 'pageSize',
    get: function get() {
      return ReactRouterPaginator.getAsIntegerOrGetDefaultValue(this._location.query.pageSize, 10);
    }
  }, {
    key: 'q',
    get: function get() {
      var rawValue = this._location.query.q;

      return '' === rawValue ? undefined : rawValue;
    }
  }], [{
    key: 'getAsIntegerOrGetDefaultValue',
    value: function getAsIntegerOrGetDefaultValue(value, defaultValue) {
      return undefined === value ? defaultValue : parseInt(value, 10);
    }
  }]);

  return ReactRouterPaginator;
}();
return ReactRouterPaginator;
}));
