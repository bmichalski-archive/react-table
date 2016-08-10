const goToPage = (history, link) => {
  history.push(link)
}

const makeLink = (history, location, page, pageSize, q, sortContext) => {
  const params = {}

  if ('' === q) {
    params.q = undefined
  } else {
    params.q = q
  }

  if (page > 1) {
    params.page = page
  } else {
    params.page = undefined
  }

  if (pageSize > 10) {
    params.pageSize = pageSize
  } else {
    params.pageSize = undefined
  }

  if (undefined === sortContext) {
    params.sort = undefined
  } else {
    params.sort = sortContext
  }


  //Override any page and pageSize query parameters
  const query = Object.assign(
    {},
    params,
    location.query,
    params
  )

  return history.createPath({ pathname: location.pathname, query })
}

const makeRouting = (history) => {
  return {
    goToPage: goToPage.bind(undefined, history),
    makeLink: makeLink.bind(undefined, history)
  }
}

export default makeRouting