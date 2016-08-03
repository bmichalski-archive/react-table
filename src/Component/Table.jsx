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
              currentPage={this.props.paginator.page}
              pageSize={this.props.paginator.pageSize}
              goToPage={this.props.paginator.goToPage.bind(this.props.paginator)}
              makeLink={this.props.paginator.makeLink.bind(this.props.paginator)} />
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
              currentPage={this.props.paginator.page}
              pageSize={this.props.paginator.pageSize}
              goToPage={this.props.paginator.goToPage.bind(this.props.paginator)}
              makeLink={this.props.paginator.makeLink.bind(this.props.paginator)}
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
  paginator: React.PropTypes.shape({
    page: React.PropTypes.number.isRequired,
    pageSize: React.PropTypes.number.isRequired,
    goToPage: React.PropTypes.func.isRequired,
    makeLink: React.PropTypes.func.isRequired
  }).isRequired
}

Table.defaultProps = {
  emptyTableMessage: 'No data to display with given parameters.',
  loadingMessage: 'Loading...',
  tableClassName: 'table table-bordered'
}
