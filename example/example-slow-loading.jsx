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

    Promise.config({
      warnings: true,
      longStackTraces: true,
      cancellation: true
    })

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

        resolve({
          result: sampleResult.slice(from, end),
          info: {
            total: sampleResult.length * 2,
            totalFiltered: sampleResult.length
          }
        })
      }, 1000)
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

const Router = ReactRouter.Router
const Route = ReactRouter.Route

ReactDOM.render(
  (
    <Router history={ReactRouter.browserHistory}>
      <Route path="/" component={TableWrapper}>
        <Route path="*" component={TableWrapper} />
      </Route>
    </Router>
  ),
  document.getElementById('main-container')
)

document.getElementById('row-clicked').innerHTML = 'Row clicked:'