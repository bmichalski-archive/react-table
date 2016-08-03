class Table extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }

    this._updateStateFromRemoteSource(props.getData)
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      loading: true
    })

    this._updateStateFromRemoteSource(newProps.getData)
  }

  _updateStateFromRemoteSource(getData) {
    getData().then((data) => {
      this._updateStateFromFetchedData(data)
    }).done()
  }

  _updateStateFromFetchedData(data) {
    this.setState({
      data: data,
      totalResult: data.info.totalFiltered,
      loading: false
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <div>{this.props.loadingMessage}</div>
      )
    }

    //TODO Display error if wrong parameters

    return (
      <div className="table-wrapper">
        <div className="row">
          <div className="col-md-12">
            <Paginator
              totalResult={this.state.totalResult}
              currentPage={this.props.page}
              pageSize={this.props.pageSize}
              goToPage={this.props.paginator.goToPage}
              makeLink={this.props.paginator.makeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <MainTable
              data={this.state.data.result}
              renderCell={this.props.renderCell}
              onRowClicked={this.props.onRowClicked}
              emptyTableMessage={this.props.emptyTableMessage}
              tableClassName={this.props.tableClassName}>
              {this.props.children}
            </MainTable>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Paginator
              totalResult={this.state.totalResult}
              currentPage={this.props.page}
              pageSize={this.props.pageSize}
              goToPage={this.props.paginator.goToPage}
              makeLink={this.props.paginator.makeLink}
              noPageSizeSelector
              noGoTo />
          </div>
        </div>
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
    goToPage: React.PropTypes.func.isRequired,
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
