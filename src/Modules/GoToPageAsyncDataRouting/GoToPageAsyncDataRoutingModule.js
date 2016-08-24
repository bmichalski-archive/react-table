import makeModule from '../../Common/MakeModule'
import AsyncDataActionType from '../AsyncData/Action/ActionType'
import RoutingActionType from '../Routing/Action/ActionType'
import GoToPageActionType from '../GoToPage/Action/ActionType'

export default makeModule(
  'goToPageAsyncDataRouting',
  () => {
    return {
      listeners: () => {
        return {
          [AsyncDataActionType.ASYNC_UPDATE_OPTIONS]: (action, dispatch) => {
            if ('page' in action.options) {
              const page = 1 === action.options.page ? undefined : action.options.page

              dispatch({
                type: RoutingActionType.ROUTING_UPDATE_ROUTE,
                queryParams: {
                  page
                }
              })
            }
          }
        }
      },
      boot: (dispatch, getState) => {
        const query = getState().get('opts').get('routing').toJS().location.query
        const page = undefined === query.page ? undefined : parseInt(query.page, 10)

        dispatch({
          type: GoToPageActionType.GO_TO_PAGE_UPDATE_GO_TO_PAGE,
          page
        })
      }
    }
  }
)