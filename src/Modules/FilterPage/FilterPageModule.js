import makeModule from '../../Common/MakeModule'
import FilterActionType from '../Filter/Action/ActionType'
import GoToPagePageActionType from '../GoToPage/Action/ActionType'
import AsyncDataActionType from '../AsyncData/Action/ActionType'

export default makeModule(
  'filterPage',
  () => {
    return {
      preListeners: () => {
        return {
          [FilterActionType.FILTER_UPDATE_Q_FIELD_VALUE]: (action, dispatch) => {
            if (true !== action.boot) {
              dispatch({
                type: GoToPagePageActionType.GO_TO_PAGE_UPDATE_GO_TO_PAGE_FIELD_VALUE,
                goToPageFieldValue: ''
              })

              dispatch({
                type: AsyncDataActionType.ASYNC_UPDATE_OPTIONS,
                options: {
                  page: undefined
                }
              })

              dispatch({
                type: GoToPagePageActionType.GO_TO_PAGE_UPDATE_GO_TO_PAGE,
                page: 1,
                noAsyncDataUpdate: true
              })
            }
          }
        }
      }
    }
  }
)