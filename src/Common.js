function isInteger(nb) {
  return _.isNumber(nb) && !_.isNaN(nb) && _.isFinite(nb) && nb === parseInt(nb, 10)
}

function isPositiveInteger(nb) {
  return isInteger(nb) && nb > 0
}

function includePaginator(totalPage, currentPage, pageSize) {
  return isPositiveInteger(totalPage) && isPositiveInteger(currentPage) && isPositiveInteger(pageSize)
}
