import React from 'react'
import PresentationalTableHead from '../Presentational/TableHead'
import ContainerTableRow from './ContainerTableRow'

export default (props) => {
  const renderRows = () => {
    return props.rows.map((row, i) => {
      return (
        <ContainerTableRow key={i} cells={row.cells} />
      )
    })
  }

  return (
    <PresentationalTableHead>
      {renderRows()}
    </PresentationalTableHead>
  )
}