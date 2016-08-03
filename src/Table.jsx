function isPositiveInteger(nb) {
  return _.isNumber(nb) && !_.isNaN(nb) && _.isFinite(nb) && nb === parseInt(nb, 10) && nb > 0
}

function includePaginator(totalPage, currentPage, pageSize) {
  return isPositiveInteger(totalPage) && isPositiveInteger(currentPage) && isPositiveInteger(pageSize)
}

class Paginator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pageSize: props.pageSize,
      currentPage: props.currentPage,
      totalPages: props.totalPages
    }

    if (!includePaginator(props.totalPages, props.currentPage, props.pageSize)) {
      throw new Error('Should not include paginator.')
    }
  }

  componentWillReceiveProps(newProps) {
    if (!includePaginator(newProps.totalPages, newProps.currentPage, newProps.pageSize)) {
      throw new Error('Should not include paginator.')
    }

    this.setState({
      pageSize: newProps.pageSize,
      currentPage: newProps.currentPage,
      totalPages: newProps.totalPages
    })
  }

  _makeLink(page, pageSize) {
    const params = {}

    if (page > 1) {
      params.page = page
    }

    if (pageSize > 10) {
      params.pageSize = pageSize
    }

    return this.props.makeLink(params.page, params.pageSize)
  }

  _handleClick(page, event) {
    event.preventDefault()

    this.props.navigateToPage(
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

    this.props.navigateToPage(
      this._makeLink(1, pageSize)
    )
  }

  _handleGoToChanged(event) {
    this.setState({
      goTo: parseInt(event.target.value, 10)
    })
  }

  _doGoToPage() {
    this.props.navigateToPage(
      this._makeLink(this.state.goTo, this.state.pageSize)
    )
  }

  _handleGoToKeyDown(event) {
    if (13 === event.keyCode) {
      event.preventDefault()

      if (this._goToPageDisabled()) {
        return
      }

      this._doGoToPage()
    }
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
      <div className="pagination-wrapper">
        <div className="row">
          <div className="col-md-1">
            {
              (() => {
                if (!this.props.noPageSizeSelector) {
                  return (
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
                  )
                }
              })()
            }
          </div>
          <div className="col-md-2">
            {
              (() => {
                if (!this.props.noGoTo) {
                  return (
                    <div className="page-selector form-group">
                      <label>
                        Go to page
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={'Current page: ' + this.state.currentPage}
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
                  )
                }
              })()
            }
          </div>
        </div>
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
  totalPages: React.PropTypes.number.isRequired,
  currentPage: React.PropTypes.number.isRequired,
  pageSize: React.PropTypes.number.isRequired,
  navigateToPage: React.PropTypes.func.isRequired,
  makeLink: React.PropTypes.func.isRequired,
  noPageSizeSelector: React.PropTypes.bool,
  noGoTo: React.PropTypes.bool,
  maximumPages: (props, propName) => {
    const prop = props[propName]

    if (!isPositiveInteger(prop)) {
      throw new Error(
        'Invalid maximumPages, expecting number, got ' + prop
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
  noPageSizeSelector: false,
  noGoTo: false
}

class TableRow extends React.Component {
  render() {
    const row = this.props.row

    return (
      <tr onClick={undefined === row.onClick ? undefined : row.onClick.bind(null, row)}>
        {(() => {
          const tds = []

          row.tds.forEach((td, i) => {
            tds.push(<td key={i}>{td.content}</td>)
          })

          return tds
        })()}
      </tr>
    )
  }
}

TableRow.propTypes = {
  row: React.PropTypes.shape({
    onClick: React.PropTypes.func,
    tds: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        content: React.PropTypes.any.isRequired
      }).isRequired
    )
  }).isRequired
}

class Table extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }

    const page = parseInt(props.page, 10)
    const pageSize = parseInt(props.pageSize, 10)

    props.getData(page, pageSize).then((data) => {
      Table._checkResult(data.result, pageSize)

      this.setState({
        rows: data.result,
        totalPages: Math.ceil(data.info.totalFiltered / pageSize),
        loading: false
      })
    }).done()
  }

  static _checkResult(result, pageSize) {
    if (result.length > pageSize) {
      throw new Error(
        'pageSize is ' + pageSize + ', got ' + result.length + ' elements.'
      )
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      loading: true
    })

    const page = undefined === newProps.page ? undefined : parseInt(newProps.page, 10)
    const pageSize = undefined === newProps.pageSize ? undefined : parseInt(newProps.pageSize, 10)

    newProps.getData(page, pageSize).then((data) => {
      Table._checkResult(data.result, pageSize)

      this.setState({
        rows: data.result,
        totalPages: Math.ceil(data.info.totalFiltered / pageSize),
        loading: false
      })
    }).done()
  }

  render() {
    var table

    if (this.state.loading) {
      table = <div>{this.props.loadingMessage}</div>

      return table
    }

    const rows = []

    if (this.state.rows.length > 0) {
      this.state.rows.forEach((row, i) => {
        rows.push(
          <TableRow key={i} row={row} />
        )
      })

      table =
        <table className={this.props.tableClassName}>
          <thead>
            <tr>
              {
                (() => {
                  const ths = []

                  this.props.theadThs.forEach((th, i) => {
                    ths.push(<th key={i}>{th.content}</th>)
                  })

                  return ths
                })()
              }
            </tr>
          </thead>
        <tbody>
        {rows}
        </tbody>
        </table>
    } else {
      table = <div>{this.props.emptyTableMessage}</div>
    }

    const isIncludePaginator = includePaginator(this.state.totalPages, this.props.page, this.props.pageSize)

    return (
      <div>
        {(() => {
          if (isIncludePaginator) {
            return (
              <Paginator
                totalPages={this.state.totalPages}
                currentPage={this.props.page}
                pageSize={this.props.pageSize}
                navigateToPage={this.props.paginator.navigateToPage}
                makeLink={this.props.paginator.makeLink} />
            )
          }
        })()}
        {table}
        {(() => {
          if (isIncludePaginator) {
            return (
              <Paginator
                totalPages={this.state.totalPages}
                currentPage={this.props.page}
                pageSize={this.props.pageSize}
                navigateToPage={this.props.paginator.navigateToPage}
                makeLink={this.props.paginator.makeLink}
                noPageSizeSelector
                noGoTo />
            )
          }
        })()}
      </div>
    )
  }
}

Table.propTypes = {
  page: React.PropTypes.number.isRequired,
  pageSize: React.PropTypes.number.isRequired,
  paginator: React.PropTypes.shape({
    navigateToPage: React.PropTypes.func.isRequired,
    makeLink: React.PropTypes.func.isRequired
  }).isRequired
}