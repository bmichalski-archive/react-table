class TableRow extends React.Component {
  render() {
    const rowData = this.props.data

    return (
      <tr>
        {(() => {
          const tds = []

          rowData.forEach((cellData, cellIndex) => {
            tds.push(
              <td
                key={cellIndex}
                onClick={this.props.onCellClicked.bind(undefined, rowData, cellIndex, this.props.rowIndex)}>
                {this.props.renderCell(cellData, cellIndex, this.props.rowIndex)}
              </td>
            )
          })

          return tds
        })()}
      </tr>
    )
  }
}

TableRow.propTypes = {
  rowIndex: (props, propName) => {
    const prop = props[propName]

    if (!isInteger(prop)) {
      throw new Error(
        'Invalid rowIndex, expecting number, got ' + prop
      )
    }
  },
  renderCell: React.PropTypes.func.isRequired,
  onCellClicked: React.PropTypes.func.isRequired,
  data: React.PropTypes.array.isRequired
}

TableRow.defaultProps = {
  renderCell: (data) => {
    return data
  },
  onCellClicked: () => {
    return
  }
}