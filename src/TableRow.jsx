class TableRow extends React.Component {
  render() {
    const row = this.props.row

    return (
      <tr onClick={undefined === row.onClick ? undefined : row.onClick.bind(undefined, row, this.props.rowIndex)}>
        {(() => {
          const tds = []

          row.tds.forEach((td, i) => {
            tds.push(<td key={i}>{td.content}</td>)
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
  row: React.PropTypes.shape({
    onClick: React.PropTypes.func,
    tds: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        content: React.PropTypes.any.isRequired
      }).isRequired
    )
  }).isRequired
}
