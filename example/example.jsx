Promise.config({
  warnings: true,
  longStackTraces: true,
  cancellation: true
})

class TableWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.paginator = new ReactRouterPaginator(this.props.location)
  }

  componentWillReceiveProps(newProps) {
    this.paginator.location = newProps.location
  }

  getData() {
    const from = (this.paginator.page - 1) * this.paginator.pageSize
    const end = from + this.paginator.pageSize
    const q = this.paginator.q

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
        paginator={this.paginator}>
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
