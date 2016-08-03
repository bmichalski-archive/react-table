function isPositiveInteger(nb) {
  return _.isNumber(nb) && !_.isNaN(nb) && _.isFinite(nb) && nb === parseInt(nb, 10) && nb > 0
}

function includePaginator(totalPage, currentPage, pageSize) {
  return isPositiveInteger(totalPage) && isPositiveInteger(currentPage) && isPositiveInteger(pageSize)
}
