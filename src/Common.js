const isInteger = (nb) => {
  return nb === parseInt(nb, 10)
}

const isPositiveInteger = (nb) => {
  return isInteger(nb) && nb > 0
}

export { isInteger, isPositiveInteger }