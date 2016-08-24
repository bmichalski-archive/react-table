import React from 'react'

export default (props) => {
  return (
    <label>
      Page size&nbsp;
      <select
        className="form-control"
        value={props.pageSize}
        onChange={props.handlePageSizeChange}>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </label>
  )
}