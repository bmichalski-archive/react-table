import makeModule from '../../Common/MakeModule'
import GoToPageActionType from '../GoToPage/Action/ActionType'
import AsyncDataActionType from '../AsyncData/Action/ActionType'

export default makeModule(
  'goToPageAsyncDataModule',
  () => {
    return {
      listeners: () => {
        return {
          [GoToPageActionType.GO_TO_PAGE_UPDATE_GO_TO_PAGE]: (action, dispatch) => {
            if (true === action.noAsyncDataUpdate) {
              return
            }
            
            dispatch({
              type: AsyncDataActionType.ASYNC_UPDATE_OPTIONS,
              options: {
                page: action.page
              }
            })

            dispatch({
              type: AsyncDataActionType.ASYNC_DATA_UPDATE_DATA
            })
          }
        }
      }
    }
  }
)