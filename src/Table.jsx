class Table extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }

    this._updateStateFromRemoteSource(props.getData, props.page, props.pageSize)
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      loading: true
    })

    this._updateStateFromRemoteSource(newProps.getData, newProps.page, newProps.pageSize)
  }

  _updateStateFromRemoteSource(getData, page, pageSize) {
    getData(page, pageSize).then((data) => {
      Table._checkResult(data.result, pageSize)

      this._updateStateFromFetchedData(data, pageSize)
    }).done()
  }

  _updateStateFromFetchedData(data, pageSize) {
    this.setState({
      data: data,
      totalPages: Math.ceil(data.info.totalFiltered / pageSize),
      loading: false
    })
  }

  static _checkResult(result, pageSize) {
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

    if (this.state.data.result.length > 0) {
      this.state.data.result.forEach((data, rowIndex) => {
        rows.push(
          <TableRow
            key={rowIndex}
            data={data}
            rowIndex={rowIndex}
            onClick={this.props.onRowClicked}
            renderCell={this.props.renderCell} />
        )
      })

      table =
        <table className={this.props.tableClassName}>
          {this.props.children}
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
  renderCell: React.PropTypes.func,
  onRowClicked: React.PropTypes.func,
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
  page: 1,
  pageSize: 10,
  emptyTableMessage: 'No data to display with given parameters.',
  loadingMessage: 'Loading...',
  tableClassName: 'table table-bordered'
}
