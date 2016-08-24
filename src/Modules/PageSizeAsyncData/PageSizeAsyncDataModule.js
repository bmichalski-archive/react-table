import makeModule from '../../Common/MakeModule'
import PageSizeActionType from '../PageSize/Action/ActionType'
import AsyncDataActionType from '../AsyncData/Action/ActionType'

function getPageSizeFromRawPageSize(rawPageSize) {
  return parseInt(rawPageSize, 10)
}

export default makeModule(
  'pageSizeAsyncData',
  () => {
    return {
      listeners: () => {
        return {
          [PageSizeActionType.PAGE_SIZE_UPDATE_PAGE_SIZE]: (action, dispatch) => {
            dispatch({
              type: AsyncDataActionType.ASYNC_UPDATE_OPTIONS,
              options: {
                pageSize: getPageSizeFromRawPageSize(action.pageSize)
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