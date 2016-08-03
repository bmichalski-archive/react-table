class TableRow extends React.Component {
  render() {
    const rowData = this.props.data

    return (
      <tr onClick={undefined === this.props.onClick ? undefined : this.props.onClick.bind(undefined, rowData, this.props.rowIndex)}>
        {(() => {
          const tds = []

          rowData.forEach((cellData, cellIndex) => {
            tds.push(<td key={cellIndex}>{this.props.renderCell(cellData, cellIndex, this.props.rowIndex)}</td>)
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
  onClick: React.PropTypes.func,
  data: React.PropTypes.array.isRequired
}

TableRow.defaultProps = {
  renderCell: (data) => {
    return data
  }
}