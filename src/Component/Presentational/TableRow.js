import React, { PropTypes } from 'react'
import { isInteger } from '../../Common'

const TableRow = (props) => {
  const rowData = props.data

  return (
    <tr className={props.className}>
      {(() => {
        const tds = []

        rowData.forEach((cellData, cellIndex) => {
          const cellProps = props.cells[cellIndex]
          const className = undefined === cellProps ? undefined : cellProps.className

          tds.push(
            <td
              key={cellIndex}
              className={className}
              onClick={props.onTableBodyCellClicked.bind(undefined, rowData, cellIndex, props.rowIndex)}>
              {props.renderCell(cellData, cellIndex, props.rowIndex)}
            </td>
          )
        })

        return tds
      })()}
    </tr>
  )
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
  renderCell: PropTypes.func.isRequired,
  onTableBodyCellClicked: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
  cells: PropTypes.object.isRequired
}

TableRow.defaultProps = {
  renderCell: (data) => {
    return data
  }
}

export default TableRow