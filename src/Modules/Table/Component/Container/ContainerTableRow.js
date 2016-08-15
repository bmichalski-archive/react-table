import React from 'react'
import TableRow from '../Presentational/TableRow'
import { TableData, TableHeading } from '../Container/ContainerTableCell'

export default (props) => {
  const getCellType = (cell) => {
    return cell.type === 'HEADING' ? TableHeading : TableData
  }

  const renderCells = () => {
    return props.cells.map((cell, i) => {
      const CellType = getCellType(cell)

      return (
        <CellType key={i} content={cell.content} props={cell.props} />
      )
    })
  }
  
  return (
    <TableRow>
      {renderCells()}
    </TableRow>
  )
}