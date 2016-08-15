import React from 'react'
import PresentationalTableData from '../Presentational/TableData'
import PresentationalTableHeading from '../Presentational/TableHeading'

const makeContainerTableCell = (ThOrTd) => {
  return (props) => {
    return (
      <ThOrTd props={props.props}>
        {props.content}
      </ThOrTd>
    )
  }
}

const TableData = makeContainerTableCell(PresentationalTableData)
const TableHeading = makeContainerTableCell(PresentationalTableHeading)

export { TableData, TableHeading }
