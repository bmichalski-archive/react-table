Promise.config({
  warnings: true,
  longStackTraces: true,
  cancellation: true
})

class TableWrapper extends React.Component {
  constructor(props) {
    super(props)

    const query = props.location.query

    this._paginator = new ReactRouterPaginator(
      query,
      props.location.pathname,
      ReactRouterPaginator.getAsIntegerOrGetDefaultValue(query.page, 1),
      ReactRouterPaginator.getAsIntegerOrGetDefaultValue(query.pageSize, 10),
      undefined === query.q ? '' : query.q
    )
  }

  componentWillReceiveProps(newProps) {
    const location = newProps.location

    this._paginator.query = location.query
    this._paginator.pathname = location.pathname
  }

  getData() {
    const from = (this._paginator.page - 1) * this._paginator.pageSize
    const end = from + this._paginator.pageSize
    const q = this._paginator.q

    return new Promise((resolve, reject, onCancel) => {
      var canceled = false

      onCancel(() => {
        canceled = true

        console.log('canceled')
      })

      setTimeout(() => {
        if (canceled) {
          return
        }

        console.log('resolving')

        try {
          var filteredResults

          if (undefined === q) {
            filteredResults = sampleResult
          } else {
            filteredResults = sampleResult.filter((row) => {

              var include = false

              row.forEach((cell) => {
                if (0 === ('' + cell.content).toLowerCase().indexOf(q)) {
                  include = true
                }
              })

              return include
            })
          }

          resolve({
            result: filteredResults.slice(from, end),
            info: {
              total: sampleResult.length * 2,
              totalFiltered: filteredResults.length
            }
          })
        } catch (err) {
          reject(err)
        }
      }, this.props.resultTimeout)
    })
  }

  static onCellClicked (data, cellIndex, rowIndex) {
    const str = JSON.stringify({ cellIndex: cellIndex, rowIndex: rowIndex, data: data })

    document
      .getElementById('row-clicked')
      .innerHTML = 'Row clicked: ' + str
  }

  render() {
    return (
      <Table
        onCellClicked={TableWrapper.onCellClicked}
        getData={this.getData.bind(this)}
        renderCell={(data) => { return data.content }}
        paginator={this._paginator}>
        <TableHead>
          <TableHeadRow>
            <TableHeadTh>Id</TableHeadTh>
            <TableHeadTh>First column</TableHeadTh>
            <TableHeadTh>Second column</TableHeadTh>
          </TableHeadRow>
        </TableHead>
      </Table>
    )
  }
}

TableWrapper.propTypes = {
  resultTimeout: React.PropTypes.number.isRequired
}

TableWrapper.defaultProps = {
  resultTimeout: 200
}
