import React, { PropTypes } from 'react'
import TableRow from './TableRow'

const Table = (props) => {
  if (0 === props.data.length) {
    return (
      <div>{props.emptyTableMessage}</div>
    )
  }

  const rows = []

  props.data.forEach((data, rowIndex) => {
    rows.push(
      <TableRow
        key={rowIndex}
        data={data}
        rowIndex={rowIndex}
        onCellClicked={props.onCellClicked}
        renderCell={props.renderCell}
        isCellClickable={props.isCellClickable} />
    )
  })

  return (
    <table className={props.tableClassName}>
      {props.children}
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  emptyTableMessage: PropTypes.string.isRequired,
  tableClassName: PropTypes.string.isRequired,
  renderCell: PropTypes.func,
  onCellClicked: PropTypes.func
}

Table.defaultProps = {
  emptyTableMessage: 'No data to display with given parameters.',
  tableClassName: 'table table-bordered'
}

export default Table
