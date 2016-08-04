class ReactRouterPaginator {
  constructor(location) {
    this.location = location
  }

  set location(location) {
    this._location = location

    return this
  }

  get page () {
    return ReactRouterPaginator.getAsIntegerOrGetDefaultValue(this._location.query.page, 1)
  }

  get pageSize () {
    return ReactRouterPaginator.getAsIntegerOrGetDefaultValue(this._location.query.pageSize, 10)
  }

  get q () {
    const rawValue = this._location.query.q

    return '' === rawValue ? undefined : rawValue
  }

  goToPage (link) {
    ReactRouter.browserHistory.push(link)
  }

  makeLink (page, pageSize, q) {
    const query = {}

    /**
     * Preserve query parameters that would not have been set by the paginator
     */
    for (var prop in this._location.query) {
      if (this._location.query.hasOwnProperty(prop)) {
        query[prop] = this._location.query[prop]
      }
    }

    //Override any page and pageSize query parameters
    query.page = page
    query.pageSize = pageSize
    query.q = q

    return ReactRouter.browserHistory.createPath({ pathname: this._location.pathname, query: query })
  }

  static getAsIntegerOrGetDefaultValue(value, defaultValue) {
    return undefined === value ? defaultValue : parseInt(value, 10)
  }
}