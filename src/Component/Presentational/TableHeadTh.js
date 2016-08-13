import React, { PropTypes, Component } from 'react'

class TableHeadTh extends Component {
  render() {
    const props = this.props

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
        className={props.className}
        onClick={handleOnClick}>
        {props.children}
        {
          (() => {
            if (props.sortable) {
              return (
                <div className="pull-right">
                  {
                    (() => {
                      if (props.isCurrentSort) {
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
                  <i className={props.iconClassName}></i>
                </div>
              )
            }
          })()
        }
      </th>
    )
  }
}

TableHeadTh.propTypes = {
  className: PropTypes.string.isRequired,
  sortable: PropTypes.any.isRequired,
  name: PropTypes.string,
  toggleSort: PropTypes.func,//.isRequired
  resetSortContext: PropTypes.func,
  isCurrentSort: PropTypes.bool.isRequired,
  iconClassName: PropTypes.string.isRequired,
  sortContext: PropTypes.shape({
    sort: PropTypes.string,
    order: PropTypes.string
  })//.isRequired
}

TableHeadTh.defaultProps = {
  sortable: false
}

export default TableHeadTh
