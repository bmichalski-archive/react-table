function isInteger(nb) {
  return nb === parseInt(nb, 10)
}

function isPositiveInteger(nb) {
  return isInteger(nb) && nb > 0
}
