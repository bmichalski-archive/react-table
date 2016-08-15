import React from 'react'
import Table from '../Presentational/Table'
import TableHead from '../Container/ContainerTableHead'
import TableBody from '../Container/ContainerTableBody'

export default (props) => {
  const renderBodys = () => {
    return props.bodys.map((body, i) => {
      return (
        <TableBody key={i} rows={body.rows} />
      )
    })
  }

  return (
    <Table props={props.props}>
      <TableHead rows={props.head.rows} />
      {renderBodys()}
    </Table>
  )
}