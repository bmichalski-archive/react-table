import React from 'react'

export default (props) => {
  const Table = props.Table
  const BeforeTableLayout = props.BeforeTableLayout

  if (props.overrideTable) {
    return (
      <div className="table-wrapper">
        {props.overrideTableWith}
      </div>
    )
  } else {
    return (
      <div className="table-wrapper">
        <BeforeTableLayout store={props.store}></BeforeTableLayout>
        <Table store={props.store}></Table>
      </div>
    )
  }
}