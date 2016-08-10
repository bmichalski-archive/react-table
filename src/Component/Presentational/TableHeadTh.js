import React, { PropTypes } from 'react'

const TableHeadTh = (props) => {
  const isCurrentSort = () => {
    return undefined !== props.sortContext && props.sortContext.sort === props.name
  }

  const getIcon = () => {
    const sortContext = props.sortContext
    let className = 'glyphicon glyphicon-'

    if (undefined !== sortContext && sortContext.sort === props.name) {
      if (sortContext.order === 'asc') {
        className += 'arrow-up'
      } else {
        className += 'arrow-down'
      }
    } else {
      className += 'sort'
    }

    return (
      <i className={className}></i>
    )
  }

  const getClassName = () => {
    return props.sortable ? 'sortable' : ''
  }

  const handleOnClick = () => {
    const sortableProp = props.sortable

    if (sortableProp) {
      props.toggleSort(props.name)
    }
  }

  const handleResetSortContextClicked = (event) => {
    event.stopPropagation()

    props.resetSortContext()
  }

  return (
    <th
      className={getClassName()}
      onClick={handleOnClick}>
      {props.children}
      {
        (() => {
          if (props.sortable) {
            return (
              <div className="pull-right">
                {
                  (() => {
                    if (isCurrentSort()) {
                      return (
                        <i
                          className="glyphicon glyphicon-remove"
                          onClick={handleResetSortContextClicked}>
                        </i>
                      )
                    }
                  })()
                }
                &nbsp;
                {getIcon()}
              </div>
            )
          }
        })()
      }
    </th>
  )
}

TableHeadTh.propTypes = {
  sortable: PropTypes.any.isRequired,
  name: PropTypes.string,
  toggleSort: PropTypes.func,//.isRequired
  resetSortContext: PropTypes.func,
  sortContext: PropTypes.shape({
    sort: PropTypes.string,
    order: PropTypes.string
  })//.isRequired
}

TableHeadTh.defaultProps = {
  sortable: false
}

export default TableHeadTh
