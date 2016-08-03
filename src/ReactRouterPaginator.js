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

  goToPage (link) {
    ReactRouter.browserHistory.push(link)
  }

  makeLink (page, pageSize) {
    return ReactRouter.browserHistory.createPath(
      {
        pathname: this._location.pathname,
        query: _.extend({}, this._location.query, { page: page, pageSize: pageSize })
      }
    )
  }

  static getAsIntegerOrGetDefaultValue(value, defaultValue) {
    return undefined === value ? defaultValue : parseInt(value, 10)
  }
}