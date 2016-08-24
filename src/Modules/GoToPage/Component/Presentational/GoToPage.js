import React from 'react'

export default (props) => {
  return (
    <label>
      Go to page
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={'Page:'}
          value={props.goToPageFieldValue}
          onChange={props.handleGoToPageChanged}
          onKeyDown={props.handleGoToPageKeyDown} />
        <div className="input-group-btn">
          <button
            className="btn btn-default"
            onClick={props.handleGoToPageGoButtonClicked}>
            Go
          </button>
        </div>
      </div>
    </label>
  )
}