function isValidNumber(nb) {
  return _.isNumber(nb) && !_.isNaN(nb) && _.isFinite(nb)
}

function includePaginator(totalPage, currentPage, pageSize) {
  return isValidNumber(totalPage) && isValidNumber(currentPage) && isValidNumber(pageSize)
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

  render() {
    return (
      <div className="pagination-wrapper">
        {
          (() => {
            if (!this.props.noPageSizeSelector) {
              return (
                <div className="page-size-selector">
                  Page size&nbsp;
                  <select value={this.state.pageSize} onChange={this._handlePageSizeChange.bind(this)}>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>
              )
            }
          })()
        }
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
  maximumPages: (props, propName) => {
    const prop = props[propName]

    if (!isValidNumber(prop)) {
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
  noPageSizeSelector: false
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
      this._checkResult(data.result, pageSize)

      this.setState({
        rows: data.result,
        totalPages: Math.ceil(data.info.totalFiltered / pageSize),
        loading: false
      })
    }).done()
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      loading: true
    })

    const page = undefined === newProps.page ? undefined : parseInt(newProps.page, 10)
    const pageSize = undefined === newProps.pageSize ? undefined : parseInt(newProps.pageSize, 10)

    newProps.getData(page, pageSize).then((data) => {
      this._checkResult(data.result, pageSize)

      this.setState({
        rows: data.result,
        totalPages: Math.ceil(data.info.totalFiltered / pageSize),
        loading: false
      })
    }).done()
  }

  _checkResult(result, pageSize) {
    if (result.length > pageSize) {
      throw new Error(
        'pageSize is ' + pageSize + ', got ' + result.length + ' elements.'
      )
    }
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
                noPageSizeSelector />
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