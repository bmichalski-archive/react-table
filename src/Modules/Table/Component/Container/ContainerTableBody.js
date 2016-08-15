import React from 'react'
import TableBody from '../Presentational/TableBody'
import Row from '../Container/ContainerTableRow'

export default (props) => {
  function renderRows() {
    return props.rows.map((row, i) => {
      return (
        <Row key={i} cells={row.cells} ></Row>
      )
    })
  }

  return (
    <TableBody>
      {renderRows()}
    </TableBody>
  )
}