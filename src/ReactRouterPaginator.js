class ReactRouterPaginator {
  constructor(query, pathname, page, pageSize, q) {
    this.query = query
    this.pathname = pathname
    this.page = page
    this.pageSize = pageSize
    this.q = q
  }

  set query(query) {
    this._query = query

    return this
  }

  set pathname(pathname) {
    this._pathname = pathname

    return this
  }

  get totalResult() {
    return this._totalResult
  }

  set totalResult(totalResult) {
    this._totalResult = totalResult

    return this
  }

  get page() {
    return this._page
  }

  set page(page) {
    this._page = page

    return this
  }

  get pageSize() {
    return this._pageSize
  }

  set pageSize(pageSize) {
    this._pageSize = pageSize

    return this
  }

  get totalPages() {
    return Math.ceil(this._totalResult / this.pageSize)
  }

  get q() {
    return this._q
  }

  set q(q) {
    this._q = q

    return this
  }

  goToPage (link) {
    ReactRouter.browserHistory.push(link)
  }

  makeLink (page, pageSize, q) {
    const query = {}

    /**
     * Preserve query parameters that would not have been set by the paginator
     */
    for (var prop in this._query) {
      if (this._query.hasOwnProperty(prop)) {
        query[prop] = this._query[prop]
      }
    }

    //Override any page and pageSize query parameters
    query.page = page
    query.pageSize = pageSize
    query.q = q

    return ReactRouter.browserHistory.createPath({ pathname: this._pathname, query: query })
  }

  static getAsIntegerOrGetDefaultValue(value, defaultValue) {
    return undefined === value ? defaultValue : parseInt(value, 10)
  }
}