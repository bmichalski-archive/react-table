import RoutingActionType from './Action/ActionType'
import reducer from './Store/Reducer'

const goToPage = (router, pathname, query) => {
  router.push(
    router.createPath({ pathname, query })
  )
}

const RoutingModule = (opts) => {
  return {
    reducer,
    listeners: () => {
      return {
        [RoutingActionType.ROUTING_UPDATE_ROUTE]: (action, dispatch, getState) => {
          //Override any page and pageSize query parameters
          const query = Object.assign(
            {},
            getState().get('routing').get('state').get('previousLocationQuery').toJS(),
            action.queryParams
          )

          goToPage(opts.router, opts.location.pathname, query)

          dispatch({
            type: RoutingActionType.SET_PREVIOUS_LOCATION_QUERY,
            previousLocationQuery: query
          })
        }
      }
    },
    boot: (dispatch) => {
      dispatch({
        type: RoutingActionType.SET_PREVIOUS_LOCATION_QUERY,
        previousLocationQuery: opts.location.query
      })

      dispatch({
        type: RoutingActionType.SET_MAKE_LINK,
        makeLink: (getState, paramQuery) => {
          //Override any page and pageSize query parameters
          const query = Object.assign(
            {},
            getState().get('routing').get('state').get('previousLocationQuery').toJS(),
            paramQuery
          )

          return opts.router.createPath({
            pathname: opts.location.pathname,
            query
          })
        }
      })
    }
  }
}

RoutingModule.moduleName = 'routing'

export default RoutingModule