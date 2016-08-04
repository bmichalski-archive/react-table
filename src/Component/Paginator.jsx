class Paginator extends React.Component {
  constructor(props) {
    super(props)

    this._paginator = props.paginator

    this.state = {
      q: this._paginator.q,
      goToValue: ''
    }
  }

  _makeLink(page, pageSize, q) {
    const params = {}

    if (page > 1) {
      params.page = page
    }

    if (pageSize > 10) {
      params.pageSize = pageSize
    }

    if ('' === q) {
      params.q = undefined
    } else {
      params.q = q
    }

    return this._paginator.makeLink(params.page, params.pageSize, params.q)
  }

  _handleClick(page, event) {
    event.preventDefault()

    this._paginator.page = page

    this._paginator.goToPage(
      this._makeLink(this._paginator.page, this._paginator.pageSize)
    )
  }

  _getClassName(page) {
    return this._paginator.page === page ? 'current' : null
  }

  _previous(event) {
    if (this._previousDisabled()) {
      event.preventDefault()

      return
    }

    this._handleClick(this._paginator.page - 1, event)
  }

  _next(event) {
    if (this._nextDisabled()) {
      event.preventDefault()

      return
    }

    this._handleClick(this._paginator.page + 1, event)
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

    this._handleClick(this._paginator.totalPages, event)
  }

  _firstDisabled() {
    return this._paginator.page <= 1
  }

  _lastDisabled() {
    return this._paginator.page >= this._paginator.totalPages
  }

  _previousDisabled() {
    return this._firstDisabled()
  }

  _nextDisabled() {
    return this._lastDisabled()
  }

  _handlePageSizeChange(event) {
    const pageSize = parseInt(event.target.value, 10)

    this.setState(
      {
        goToValue: ''
      },
      () => {
        this._paginator.pageSize = pageSize
        this._paginator.page = 1

        this._paginator.goToPage(
          this._makeLink(this._paginator.page, this._paginator.pageSize)
        )
      }
    )
  }

  _handleGoToChanged(event) {
    var goToValue

    const rawValue = event.target.value

    if ('' === rawValue) {
      goToValue = ''
    } else if (/^[0-9]+$/.test(rawValue) && rawValue >= 1) {
      goToValue = parseInt(rawValue, 10)
    } else {
      goToValue = this.state.goToValue
    }

    this.setState({
      goToValue: goToValue
    })
  }

  _doGoToPage() {
    this._paginator.goToPage(
      this._makeLink(this._paginator.page, this._paginator.pageSize, this._paginator.q)
    )
  }

  _goToPage() {
    this._paginator.page = this.state.goToValue

    this._doGoToPage()
  }

  _handleKeyDown(event, isDisabled) {
    if (13 === event.keyCode) {
      event.preventDefault()

      if (isDisabled()) {
        return
      }

      this._goToPage()
    }
  }

  _handleGoToKeyDown(event) {
    this._handleKeyDown(event, this._goToPageDisabled.bind(this))
  }

  _handleQChanged(event) {
    clearTimeout(this._debounceQ)

    const rawValue = event.target.value

    this.setState(
      {
        q: rawValue,
        page: 1,
        goToValue: ''
      },
      () => {
        this._paginator.q = rawValue
        this._paginator.page = 1

        this._debounceQ = setTimeout(this._doGoToPage.bind(this), this.props.qDebounceTimeout)
      }
    )
  }

  _goToPageDisabled() {
    return !(isPositiveInteger(this.state.goToValue) && this.state.goToValue >= 1)
  }

  _goToPageGoButtonClicked(event) {
    event.preventDefault()

    if (this._goToPageDisabled()) {
      return
    }

    this._goToPage()
  }

  render() {
    const paginationFields = (() => {
      if (!(this.props.pageSizeSelector || this.props.goTo || this.props.filtering)) {
        return
      }

      return (
        <div className="row">
          {
            (() => {
              if (this.props.filtering) {
                return (
                  <div className="col-md-5">
                    <label>
                      Filter
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.q}
                        placeholder="Filter:"
                        onChange={this._handleQChanged.bind(this)} />
                    </label>
                  </div>
                )
              }
            })()
          }
          {
            (() => {
              if (this.props.goTo) {
                return (
                  <div className="col-md-4">
                    <div className="page-selector form-group">
                      <label>
                        Go to page
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={'Page:'}
                            value={this.state.goToValue}
                            onChange={this._handleGoToChanged.bind(this)}
                            onKeyDown={this._handleGoToKeyDown.bind(this)} />
                          <div className="input-group-btn">
                            <button
                              className="btn btn-default "
                              disabled={this._goToPageDisabled()}
                              onClick={this._goToPageGoButtonClicked.bind(this)}>
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
              if (this.props.pageSizeSelector) {
                return (
                  <div className="col-md-3">
                    <div className="page-size-selector form-group">
                      <label>
                        Page size&nbsp;
                        <select
                          className="form-control"
                          value={this._paginator.pageSize}
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
        </div>
      )
    })()

    return (
      <div className="paginator-wrapper">
        <div className="row">
          <div className="col-md-4">
            {paginationFields}
          </div>
          <div className="col-md-8">
            <ul className="pagination pull-right">
              {(() => {
                const page = parseInt(this._paginator.page, 10)
                const rows = []
                const firstDisabled = this._firstDisabled()
                const lastDisabled = this._lastDisabled()
                const previousDisabled = this._previousDisabled()
                const nextDisabled = this._nextDisabled()

                rows.push(
                  <li key="first" className={firstDisabled ? 'disabled' : null}>
                    <a
                      disabled={firstDisabled}
                      href={firstDisabled ? '' : this._makeLink(1, this._paginator.pageSize)}
                      onClick={this._first.bind(this)}>
                      <span>&laquo;</span>
                    </a>
                  </li>
                )

                rows.push(
                  <li key="previous" className={previousDisabled ? 'disabled' : null}>
                    <a
                      disabled={previousDisabled}
                      href={previousDisabled ? '' : this._makeLink(page - 1, this._paginator.pageSize)}
                      onClick={this._previous.bind(this)}>
                      <span>&lsaquo;</span>
                    </a>
                  </li>
                )

                const addPageLi = (page, key) => {
                  rows.push(
                    <li key={key} className={this._getClassName(page)}>
                      <a href={this._makeLink(page, this._paginator.pageSize)} onClick={this._handleClick.bind(this, page)}>
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

                if (this._paginator.totalPages <= this.props.maximumPages) {
                  addPages(1, this._paginator.totalPages)
                } else {
                  const mid = this.props.maximumPages / 2 + 1

                  if (page <= mid) {
                    addPages(1, this.props.maximumPages)
                  } else if (page >= (this._paginator.totalPages - (mid - 2))) {
                    addPages(
                      this._paginator.totalPages - (this.props.maximumPages - 1),
                      this._paginator.totalPages
                    )
                  } else {
                    const paginatorLastPage = page + (mid - 2)

                    addPages(
                      page - (mid - 1),
                      paginatorLastPage < this._paginator.totalPages ? paginatorLastPage : this._paginator.totalPages
                    )
                  }
                }

                rows.push(
                  <li key="next" className={nextDisabled ? 'disabled' : null}>
                    <a
                      disabled={nextDisabled}
                      href={nextDisabled ? '' : this._makeLink(page + 1, this._paginator.pageSize)}
                      onClick={this._next.bind(this)}>
                      <span>&rsaquo;</span>
                    </a>
                  </li>
                )

                rows.push(
                  <li key="last" className={lastDisabled ? 'disabled' : null}>
                    <a
                      disabled={lastDisabled}
                      href={lastDisabled ? '' : this._makeLink(this._paginator.totalPages, this._paginator.pageSize)}
                      onClick={this._last.bind(this)}>
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
  paginator: React.PropTypes.shape({
    totalResult: React.PropTypes.number.isRequired,
    page: React.PropTypes.number.isRequired,
    pageSize: React.PropTypes.number.isRequired,
    q: React.PropTypes.string,
    goToPage: React.PropTypes.func.isRequired,
    makeLink: React.PropTypes.func.isRequired
  }).isRequired,
  pageSizeSelector: React.PropTypes.bool.isRequired,
  goTo: React.PropTypes.bool.isRequired,
  filtering: React.PropTypes.bool.isRequired,
  qDebounceTimeout: React.PropTypes.number.isRequired,
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
  pageSizeSelector: false,
  goTo: false,
  filtering: false,
  qDebounceTimeout: 300,
  maximumPages: 10
}
