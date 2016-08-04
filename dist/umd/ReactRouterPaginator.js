;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react-router'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('react-router'));
  } else {
    root.ReactRouterPaginator = factory(root.ReactRouter);
  }
}(this, function(ReactRouter) {
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactRouterPaginator = function () {
  function ReactRouterPaginator(query, pathname, page, pageSize, q) {
    _classCallCheck(this, ReactRouterPaginator);

    this.query = query;
    this.pathname = pathname;
    this.page = page;
    this.pageSize = pageSize;
    this.q = q;
  }

  _createClass(ReactRouterPaginator, [{
    key: "goToPage",
    value: function goToPage(link) {
      ReactRouter.browserHistory.push(link);
    }
  }, {
    key: "makeLink",
    value: function makeLink(page, pageSize, q) {
      var query = {};

      /**
       * Preserve query parameters that would not have been set by the paginator
       */
      for (var prop in this._query) {
        if (this._query.hasOwnProperty(prop)) {
          query[prop] = this._query[prop];
        }
      }

      //Override any page and pageSize query parameters
      query.page = page;
      query.pageSize = pageSize;
      query.q = q;

      return ReactRouter.browserHistory.createPath({ pathname: this._pathname, query: query });
    }
  }, {
    key: "query",
    set: function set(query) {
      this._query = query;

      return this;
    }
  }, {
    key: "pathname",
    set: function set(pathname) {
      this._pathname = pathname;

      return this;
    }
  }, {
    key: "totalResult",
    get: function get() {
      return this._totalResult;
    },
    set: function set(totalResult) {
      this._totalResult = totalResult;

      return this;
    }
  }, {
    key: "page",
    get: function get() {
      return this._page;
    },
    set: function set(page) {
      this._page = page;

      return this;
    }
  }, {
    key: "pageSize",
    get: function get() {
      return this._pageSize;
    },
    set: function set(pageSize) {
      this._pageSize = pageSize;

      return this;
    }
  }, {
    key: "totalPages",
    get: function get() {
      return Math.ceil(this._totalResult / this.pageSize);
    }
  }, {
    key: "q",
    get: function get() {
      return this._q;
    },
    set: function set(q) {
      this._q = q;

      return this;
    }
  }], [{
    key: "getAsIntegerOrGetDefaultValue",
    value: function getAsIntegerOrGetDefaultValue(value, defaultValue) {
      return undefined === value ? defaultValue : parseInt(value, 10);
    }
  }]);

  return ReactRouterPaginator;
}();
return ReactRouterPaginator;
}));
