import makeModule from '../../Common/MakeModule'
import AsyncDataActionType from '../AsyncData/Action/ActionType'
import RoutingActionType from '../Routing/Action/ActionType'
import PageSizeActionType from '../PageSize/Action/ActionType'

export default makeModule(
  'pageSizeAsyncDataRouting',
  () => {
    return {
      listeners: () => {
        return {
          [AsyncDataActionType.ASYNC_UPDATE_OPTIONS]: (action, dispatch) => {
            if ('pageSize' in action.options) {
              const pageSize = 10 === action.options.pageSize ? undefined : action.options.pageSize

              dispatch({
                type: RoutingActionType.ROUTING_UPDATE_ROUTE,
                queryParams: {
                  pageSize: pageSize
                }
              })
            }
          }
        }
      },
      boot: (dispatch, getState) => {
        const query = getState().get('opts').get('routing').toJS().location.query

        const pageSize = undefined === query.pageSize ? 10 : parseInt(query.pageSize, 10)

        dispatch({
          type: PageSizeActionType.PAGE_SIZE_UPDATE_PAGE_SIZE,
          pageSize: pageSize,
          boot: true
        })
      }
    }
  }
)