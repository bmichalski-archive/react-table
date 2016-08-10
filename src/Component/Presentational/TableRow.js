import React, { PropTypes } from 'react'
import { isInteger } from '../../Common'

const TableRow = (props) => {
  const getClassName = (rowData, cellIndex, rowIndex) => {
    return props.isCellClickable(rowData, cellIndex, rowIndex) ? 'clickable' : ''
  }

  const rowData = props.data

  return (
    <tr>
      {(() => {
        const tds = []

        rowData.forEach((cellData, cellIndex) => {
          tds.push(
            <td
              key={cellIndex}
              className={getClassName(rowData, cellIndex, props.rowIndex)}
              onClick={props.onCellClicked.bind(undefined, rowData, cellIndex, props.rowIndex)}>
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
  onCellClicked: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
}

TableRow.defaultProps = {
  renderCell: (data) => {
    return data
  },
  onCellClicked: () => {
    return
  },
  isCellClickable: () => {
    return true
  }
}

export default TableRow