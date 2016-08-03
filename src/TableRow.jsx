class TableRow extends React.Component {
  render() {
    const row = this.props.row

    return (
      <tr onClick={undefined === row.onClick ? undefined : row.onClick.bind(null, row)}>
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
  row: React.PropTypes.shape({
    onClick: React.PropTypes.func,
    tds: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        content: React.PropTypes.any.isRequired
      }).isRequired
    )
  }).isRequired
}
