import makeModule from '../../Common/MakeModule'
import AsyncDataActionType from '../AsyncData/Action/ActionType'
import RoutingActionType from '../Routing/Action/ActionType'
import FilterActionType from '../Filter/Action/ActionType'

export default makeModule(
  'filterRouting',
  () => {
    return {
      listeners: () => {
        return {
          [AsyncDataActionType.ASYNC_UPDATE_OPTIONS]: (action, dispatch) => {
            if ('q' in action.options) {
              dispatch({
                type: RoutingActionType.ROUTING_UPDATE_ROUTE,
                queryParams: {
                  q: action.options.q
                }
              })
            }
          }
        }
      },
      boot: (dispatch, getState) => {
        const query = getState().get('opts').get('routing').toJS().location.query
        const qFieldValue = undefined === query.q ? '' : query.q

        dispatch({
          type: FilterActionType.FILTER_UPDATE_Q_FIELD_VALUE,
          qFieldValue: qFieldValue,
          delay: 0,
          boot: true
        })
      }
    }
  }
)