import React from 'react'

export default (props) => {
  return (
    <div>
      <label>
        Filter
        <input
          type="text"
          className="form-control"
          value={props.qFieldValue}
          placeholder="Filter:"
          onChange={props.handleQChanged} />
      </label>
      <i
        className="reset-button glyphicon glyphicon-remove-circle"
        onClick={props.resetButtonClicked}></i>
    </div>
  )
}