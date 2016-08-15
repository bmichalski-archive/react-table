import reducer from './Store/Reducer'
import SortActionType from './Action/ActionType'
import TableActionType from '../Table/Action/ActionType'
import SortIcon from './Component/Connected/ConnectedSortIcon'
import React from 'react'

const SortModule = (opts) => {
  function getSortableColumns() {
    return opts.sortableColumns
  }

  return {
    reducer: reducer,
    listeners: () => {
      return {
        [SortActionType.SORT_RESET_SORT_STATE]: (dispatch) => {

        }
      }
    },
    filters: () => {
      const sortableColumns = getSortableColumns()

      return {
        [TableActionType.TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD]: (action, store) => {
          if (action.head.rows.length > 1) {
            throw new Error('Unsupported multi-rows header.')
          }

          action.head.rows[0].cells.forEach((cell) => {
            if (sortableColumns.indexOf(cell.name) !== -1) {
              let className

              if (undefined !== cell.props && undefined !== cell.props.className) {
                className = cell.props.className + ' sortable'
              } else {
                className = 'sortable'
              }

              cell.props = {
                className: className
              }

              cell.content = [
                cell.content,
                <SortIcon
                  key="sortIcon"
                  store={store}
                  iconClassName={"glyphicon glyphicon-arrow-up"}
                  showRemoveIcon={true} />
              ]
            }
          })

          return action
        }
      }
    }
  }
}

SortModule.moduleName = 'sort'

export default SortModule