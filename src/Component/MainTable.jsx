class MainTable extends React.Component {
  render() {
    if (0 === this.props.data.length) {
      return (
        <div>{this.props.emptyTableMessage}</div>
      )
    }

    const rows = []

    this.props.data.forEach((data, rowIndex) => {
      rows.push(
        <TableRow
          key={rowIndex}
          data={data}
          rowIndex={rowIndex}
          onClick={this.props.onRowClicked}
          renderCell={this.props.renderCell} />
      )
    })

    return (
      <table className={this.props.tableClassName}>
        {this.props.children}
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

MainTable.propTypes = {
  data: React.PropTypes.array.isRequired,
  renderCell: React.PropTypes.func,
  onRowClicked: React.PropTypes.func,
  emptyTableMessage: React.PropTypes.string.isRequired,
  tableClassName: React.PropTypes.string.isRequired
}

MainTable.defaultProps = {
  emptyTableMessage: 'No data to display with given parameters.',
  tableClassName: 'table table-bordered'
}
