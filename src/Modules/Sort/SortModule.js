import reducer from './Store/Reducer'
import SortActionType from './Action/ActionType'
import TableActionType from '../Table/Action/ActionType'
import RoutingActionType from '../Routing/Action/ActionType'
import SortIcon from './Component/Connected/ConnectedSortIcon'
import React from 'react'
import _ from 'lodash'
import defaultState from './Store/DefaultState'
import AsyncDataActionType from '../AsyncData/Action/ActionType'

const SortModule = (opts) => {
  function getSortableColumns() {
    return opts.sortableColumns
  }

  return {
    defaultState: defaultState,
    reducer: reducer,
    listeners: () => {
      return {
        [SortActionType.SORT_TOGGLE_SORT]: (action, dispatch, getState) => {
          const state = getState()

          const previousSortState = state.get('sort').get('state').toJS()

          let order = undefined

          const defaultOrder = 'asc'

          if (previousSortState.sort !== action.sort) {
            order = defaultOrder
          } else if ('asc' === previousSortState.order) {
            order = 'desc'
          } else if ('desc' === previousSortState.order) {
            order = 'asc'
          } else {
            throw new Error('Unsupported sortState.order "' + previousSortState.order + '"')
          }

          dispatch({
            type: SortActionType.SORT_UPDATE_SORT_STATE,
            state: {
              sort: action.sort,
              order: order
            }
          })
        },
        [SortActionType.SORT_RESET_SORT_STATE]: (action, dispatch) => {
          dispatch({
            type: SortActionType.SORT_UPDATE_SORT_STATE,
            state: {
              sort: undefined,
              order: undefined
            }
          })
        },
        [SortActionType.SORT_UPDATE_SORT_STATE]: (action, dispatch, getState) => {
          const state = getState()

          const sortState = action.state

          const tableComputedViewModel = state.get('table').get('computedViewModel').toJS()

          function getIconClassName(cell) {
            const base = 'sort glyphicon'

            if (cell.name === sortState.sort) {
              if ('asc' === sortState.order) {
                return base + ' glyphicon-arrow-up'
              } else if ('desc' === sortState.order) {
                return base + ' glyphicon-arrow-down'
              } else {
                throw new Error('Unexpected action.order "' + sortState.order + '".')
              }
            }

            return base + ' glyphicon-sort'
          }

          function getShowRemoveIcon(cell) {
            const sortState = action.state

            return cell.name === sortState.sort
          }

          const viewModelCells = tableComputedViewModel.head.rows[0].cells.map((cell) => {
            return {
              iconClassName: getIconClassName(cell),
              showRemoveIcon: getShowRemoveIcon(cell)
            }
          })

          dispatch({
            type: SortActionType.SORT_UPDATE_COMPUTED_VIEW_MODEL_CELLS,
            cells: viewModelCells
          })

          dispatch({
            type: RoutingActionType.ROUTING_UPDATE_ROUTE,
            queryParams: action.state
          })

          if (undefined !== sortState.sort && undefined !== sortState.order) {
            dispatch({
              type: AsyncDataActionType.ASYNC_UPDATE_OPTIONS,
              options: {
                sort: {
                  sort: sortState.sort,
                  order: sortState.order
                }
              }
            })
          } else {
            dispatch({
              type: AsyncDataActionType.ASYNC_UPDATE_OPTIONS,
              options: {
                sort: undefined
              }
            })
          }

          dispatch({
            type: AsyncDataActionType.ASYNC_DATA_UPDATE_DATA
          })
        }
      }
    },
    filters: () => {
      const sortableColumns = getSortableColumns()

      return {
        [TableActionType.TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD]: (action, dispatch, getState, store) => {
          if (action.head.rows.length > 1) {
            throw new Error('Unsupported multi-rows header.')
          }

          action.head.rows[0].cells.forEach((cell, cellIndex) => {
            if (sortableColumns.indexOf(cell.name) !== -1) {
              let className

              if (undefined !== cell.props && undefined !== cell.props.className) {
                className = cell.props.className + ' sortable'
              } else {
                className = 'sortable'
              }

              _.merge(
                cell,
                {
                  props: {
                    onClick: (event) => {
                      event.preventDefault()

                      dispatch({
                        type: SortActionType.SORT_TOGGLE_SORT,
                        sort: cell.name
                      })
                    },
                    className: className
                  }
                }
              )

              cell.content = [
                cell.content,
                <SortIcon
                  key="sortIcon"
                  cellIndex={cellIndex}
                  store={store} />
              ]
            }
          })

          return action
        }
      }
    },
    boot: (dispatch, getState) => {
      const sortState = {}
      const query = getState().get('opts').get('routing').toJS().location.query

      if (undefined !== query.sort && undefined !== query.order) {
        sortState.sort = query.sort
        sortState.order = query.order
      }

      dispatch({
        type: SortActionType.SORT_UPDATE_SORT_STATE,
        state: sortState
      })
    }
  }
}

SortModule.moduleName = 'sort'

export default SortModule