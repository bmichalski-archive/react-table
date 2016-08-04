class Table extends React.Component {
  constructor(props) {
    super(props)

    this._paginator = props.paginator

    this.state = {
      loading: true,
      errorLoadingData: false
    }

    this._updateStateFromRemoteSource(props.getData)
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      loading: true,
      errorLoadingData: false
    })

    this._updateStateFromRemoteSource(newProps.getData)
  }

  _updateStateFromRemoteSource(getData) {
    if (undefined !== this._promise) {
      this._promise.cancel()
    }

    this._promise = getData()

    this._promise.then((data) => {
      this._updateStateFromFetchedData(data)
    }).catch((err) => {
      this.setState({
        loading: false,
        errorLoadingData: true
      })

      throw err
    }).done()
  }

  _updateStateFromFetchedData(data) {
    this._paginator.totalResult = data.info.totalFiltered

    this.setState({
      data: data,
      loading: false,
      errorLoadingData: false
    })
  }

  render() {
    if (this.state.errorLoadingData) {
      return (
        <div>{this.props.errorLoadingDataMessage}</div>
      )
    }

    if (undefined === this._paginator.totalResult) {
      return (
        <div>{this.props.loadingMessage}</div>
      )
    }

    return (
      <div className="table-wrapper">
        <div className="row">
          <div className="col-md-12">
            <Paginator
              paginator={this._paginator}
              pageSizeSelector
              goTo
              filtering />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {(() => {
              if (this.state.loading) {
                return (
                  <div>{this.props.loadingMessage}</div>
                )
              }

              return (
                <MainTable
                  data={this.state.data.result}
                  renderCell={this.props.renderCell}
                  onCellClicked={this.props.onCellClicked}
                  emptyTableMessage={this.props.emptyTableMessage}
                  tableClassName={this.props.tableClassName}>
                  {this.props.children}
                </MainTable>
              )
            })()}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Paginator
              paginator={this._paginator} />
          </div>
        </div>
      </div>
    )
  }
}

Table.propTypes = {
  errorLoadingDataMessage: React.PropTypes.string.isRequired,
  loadingMessage: React.PropTypes.string.isRequired,
  paginator: React.PropTypes.object.isRequired,
  emptyTableMessage: React.PropTypes.string,
  tableClassName: React.PropTypes.string,
  renderCell: React.PropTypes.func,
  onCellClicked: React.PropTypes.func
}

Table.defaultProps = {
  errorLoadingDataMessage: 'Error loading data.',
  loadingMessage: 'Loading data...'
}
