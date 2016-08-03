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
      <div className="table-wrapper">
        {(() => {
          if (isIncludePaginator) {
            return (
              <div className="row">
                <div className="col-md-12">
                  <Paginator
                    totalPages={this.state.totalPages}
                    currentPage={this.props.page}
                    pageSize={this.props.pageSize}
                    navigateToPage={this.props.paginator.navigateToPage}
                    makeLink={this.props.paginator.makeLink} />
                </div>
              </div>
            )
          }
        })()}
        <div className="row">
          <div className="col-md-12">
            {table}
          </div>
        </div>
        {(() => {
          if (isIncludePaginator) {
            return (
              <div className="row">
                <div className="col-md-12">
                  <Paginator
                    totalPages={this.state.totalPages}
                    currentPage={this.props.page}
                    pageSize={this.props.pageSize}
                    navigateToPage={this.props.paginator.navigateToPage}
                    makeLink={this.props.paginator.makeLink}
                    noPageSizeSelector
                    noGoTo />
                </div>
              </div>
            )
          }
        })()}
      </div>
    )
  }
}

Table.propTypes = {
  emptyTableMessage: React.PropTypes.string.isRequired,
  loadingMessage: React.PropTypes.string.isRequired,
  tableClassName: React.PropTypes.string.isRequired,
  page: React.PropTypes.number.isRequired,
  pageSize: React.PropTypes.number.isRequired,
  paginator: React.PropTypes.shape({
    navigateToPage: React.PropTypes.func.isRequired,
    makeLink: React.PropTypes.func.isRequired
  }).isRequired
}

Table.defaultProps = {
  emptyTableMessage: 'No data to display with given parameters.',
  loadingMessage: 'Loading...',
  tableClassName: 'table table-bordered'
}