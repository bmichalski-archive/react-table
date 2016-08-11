'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var goToPage = function goToPage(history, link) {
  history.push(link);
};

var makeLink = function makeLink(history, location, page, pageSize, q, sortContext) {
  var params = {};

  if ('' === q) {
    params.q = undefined;
  } else {
    params.q = q;
  }

  if (page > 1) {
    params.page = page;
  } else {
    params.page = undefined;
  }

  if (pageSize > 10) {
    params.pageSize = pageSize;
  } else {
    params.pageSize = undefined;
  }

  if (undefined === sortContext) {
    params.sort = undefined;
  } else {
    params.sort = sortContext;
  }

  //Override any page and pageSize query parameters
  var query = Object.assign({}, params, location.query, params);

  return history.createPath({ pathname: location.pathname, query: query });
};

var makeRouting = function makeRouting(history) {
  return {
    goToPage: goToPage.bind(undefined, history),
    makeLink: makeLink.bind(undefined, history)
  };
};

exports.default = makeRouting;