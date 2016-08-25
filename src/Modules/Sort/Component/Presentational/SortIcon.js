import React from 'react'

const SortIcon = (props) => {
  const handleResetSortContextClicked = props.handleResetSortContextClicked
  const iconClassName = props.iconClassName
  const showRemoveIcon = props.showRemoveIcon

  function renderRemoveIcon() {
    if (showRemoveIcon) {
      return (
        <i
          className="glyphicon glyphicon-remove reset-sort"
          onClick={handleResetSortContextClicked}>
        </i>
      )
    }
  }

  return (
    <div className="sort pull-right">
      {renderRemoveIcon()}
      &nbsp;
      <i className={iconClassName}></i>
    </div>
  )
}

SortIcon.displayName = 'SortIcon'

export default SortIcon