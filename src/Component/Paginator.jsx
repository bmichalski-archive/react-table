class Paginator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pageSize: props.pageSize,
      currentPage: props.currentPage,
      q: props.q,
      totalPages: Math.ceil(props.totalResult / props.pageSize)
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      pageSize: newProps.pageSize,
      currentPage: newProps.currentPage,
      q: newProps.q,
      totalPages: Math.ceil(newProps.totalResult / newProps.pageSize)
    })
  }

  _makeLink(page, pageSize, q) {
    const params = {}

    if (page > 1) {
      params.page = page
    }

    if (pageSize > 10) {
      params.pageSize = pageSize
    }

    return this.props.makeLink(params.page, params.pageSize, q)
  }

  _handleClick(page, event) {
    event.preventDefault()

    this.props.goToPage(
      this._makeLink(page, this.state.pageSize)
    )
  }

  _getClassName(page) {
    return this.state.currentPage === page ? 'current' : null
  }

  _previous(event) {
    if (this._previousDisabled()) {
      event.preventDefault()

      return
    }

    this._handleClick(this.state.currentPage - 1, event)
  }

  _next(event) {
    if (this._nextDisabled()) {
      event.preventDefault()

      return
    }

    this._handleClick(this.state.currentPage + 1, event)
  }

  _first(event) {
    if (this._firstDisabled()) {
      event.preventDefault()

      return
    }

    this._handleClick(1, event)
  }

  _last(event) {
    if (this._lastDisabled()) {
      event.preventDefault()

      return
    }

    this._handleClick(this.state.totalPages, event)
  }

  _firstDisabled() {
    return this.state.currentPage <= 1
  }

  _lastDisabled() {
    return this.state.currentPage >= this.state.totalPages
  }

  _previousDisabled() {
    return this._firstDisabled()
  }

  _nextDisabled() {
    return this._lastDisabled()
  }

  _handlePageSizeChange(event) {
    const pageSize = parseInt(event.target.value, 10)

    this.props.goToPage(
      this._makeLink(1, pageSize)
    )
  }

  _handleGoToChanged(event) {
    this.setState({
      goTo: parseInt(event.target.value, 10)
    })
  }

  _doGoToPage() {
    this.props.goToPage(
      this._makeLink(this.state.goTo, this.state.pageSize, this.state.q)
    )
  }

  _handleKeyDown(event, isDisabled) {
    if (13 === event.keyCode) {
      event.preventDefault()

      if (isDisabled()) {
        return
      }

      this._doGoToPage()
    }
  }

  _handleGoToKeyDown(event) {
    this._handleKeyDown(event, this._goToPageDisabled.bind(this))
  }

  _handleQChanged(event) {
    var q

    const rawValue = event.target.value

    if ('' === rawValue) {
      q = undefined
    } else {
      q = rawValue
    }

    this.setState(
      { q: q, page: 1 },
      () => {
        clearTimeout(this._debounceQ)

        this._debounceQ = setTimeout(this._doGoToPage.bind(this), 200)
      }
    )
  }

  _goToPageDisabled() {
    return !isPositiveInteger(this.state.goTo) || this.state.goTo < 1
  }

  _goToPage(event) {
    event.preventDefault()

    if (this._goToPageDisabled()) {
      return
    }

    this._doGoToPage()
  }

  render() {
    return (
      <div className="paginator-wrapper">
        {
          (() => {
            if (!(this.props.pageSizeSelector || this.props.goTo || this.props.filtering)) {
              return
            }

            return (
              <div className="row">
                {
                  (() => {
                    if (this.props.pageSizeSelector) {
                      return (
                        <div className="col-md-1">
                          <div className="page-size-selector form-group">
                            <label>
                              Page size&nbsp;
                              <select
                                className="form-control"
                                value={this.state.pageSize}
                                onChange={this._handlePageSizeChange.bind(this)}>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                              </select>
                            </label>
                          </div>
                        </div>
                      )
                    }
                  })()
                }
                {
                  (() => {
                    if (this.props.goTo) {
                      return (
                        <div className="col-md-2">
                          <div className="page-selector form-group">
                            <label>
                              Go to page
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={'Current page:'}
                                  onChange={this._handleGoToChanged.bind(this)}
                                  onKeyDown={this._handleGoToKeyDown.bind(this)} />
                                <div className="input-group-btn">
                                  <button
                                    className="btn btn-default "
                                    disabled={this._goToPageDisabled()}
                                    onClick={this._goToPage.bind(this)}>
                                    Go
                                  </button>
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>
                      )
                    }
                  })()
                }
                {
                  (() => {
                    if (this.props.filtering) {
                      return (
                        <div className="col-md-2">
                          <label>
                            Filter
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={this.state.q}
                              placeholder="Filter:"
                              onChange={this._handleQChanged.bind(this)} />
                          </label>
                        </div>
                      )
                    }
                  })()
                }
              </div>
            )
          })()
        }
        <div className="row">
          <div className="col-md-12">
            <ul className="pagination">
              {(() => {
                const currentPage = parseInt(this.state.currentPage, 10)
                const rows = []
                const firstDisabled = this._firstDisabled()
                const lastDisabled = this._lastDisabled()
                const previousDisabled = this._previousDisabled()
                const nextDisabled = this._nextDisabled()

                rows.push(
                  <li key="first" className={firstDisabled ? 'disabled' : null}>
                    <a
                      disabled={firstDisabled}
                      href={firstDisabled ? '' : this._makeLink(1, this.state.pageSize)}
                      onClick={this._first.bind(this)}>
                      <span>&laquo;</span>
                    </a>
                  </li>
                )

                rows.push(
                  <li key="previous" className={previousDisabled ? 'disabled' : null}>
                    <a
                      disabled={previousDisabled}
                      href={previousDisabled ? '' : this._makeLink(currentPage - 1, this.state.pageSize)}
                      onClick={this._previous.bind(this)}>
                      <span>&lsaquo;</span>
                    </a>
                  </li>
                )

                const addPageLi = (page, key) => {
                  rows.push(
                    <li key={key} className={this._getClassName(page)}>
                      <a href={this._makeLink(page, this.state.pageSize)} onClick={this._handleClick.bind(this, page)}>
                        <span>{page}</span>
                      </a>
                    </li>
                  )
                }

                function addPages(from, to) {
                  for (var i = from - 1; i < to; i += 1) {
                    const page = i + 1

                    addPageLi(page, i)
                  }
                }

                if (this.state.totalPages <= this.props.maximumPages) {
                  addPages(1, this.state.totalPages)
                } else {
                  const mid = this.props.maximumPages / 2 + 1

                  if (this.state.currentPage <= mid) {
                    addPages(1, this.props.maximumPages)
                  } else if (this.state.currentPage >= (this.state.totalPages - (mid - 2))) {
                    addPages(this.state.totalPages - (this.props.maximumPages - 1), this.state.totalPages)
                  } else {
                    const paginatorLastPage = this.state.currentPage + (mid - 2)

                    addPages(this.state.currentPage - (mid - 1), paginatorLastPage < this.state.totalPages ? paginatorLastPage : this.state.totalPages)
                  }
                }

                rows.push(
                  <li key="next" className={nextDisabled ? 'disabled' : null}>
                    <a disabled={nextDisabled} href={nextDisabled ? '' : this._makeLink(currentPage + 1, this.state.pageSize)} onClick={this._next.bind(this)}>
                      <span>&rsaquo;</span>
                    </a>
                  </li>
                )

                rows.push(
                  <li key="last" className={lastDisabled ? 'disabled' : null}>
                    <a disabled={lastDisabled} href={lastDisabled ? '' : this._makeLink(this.state.totalPages, this.state.pageSize)} onClick={this._last.bind(this)}>
                      <span>&raquo;</span>
                    </a>
                  </li>
                )

                return rows
              })()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Paginator.propTypes = {
  totalResult: React.PropTypes.number.isRequired,
  currentPage: React.PropTypes.number.isRequired,
  pageSize: React.PropTypes.number.isRequired,
  q: React.PropTypes.string,
  goToPage: React.PropTypes.func.isRequired,
  makeLink: React.PropTypes.func.isRequired,
  pageSizeSelector: React.PropTypes.bool.isRequired,
  goTo: React.PropTypes.bool.isRequired,
  filtering: React.PropTypes.bool.isRequired,
  maximumPages: (props, propName) => {
    const prop = props[propName]

    if (!isPositiveInteger(prop)) {
      throw new Error(
        'Invalid maximumPages, expecting positive integer, got ' + prop
      )
    }

    if (prop % 2 > 0) {
      throw new Error(
        'Expecting even number, got ' + prop
      )
    }
  }
}

Paginator.defaultProps = {
  maximumPages: 10,
  pageSizeSelector: false,
  goTo: false,
  filtering: false
}
