import { connect } from 'react-redux'
import PageSizeActionType from '../../Action/ActionType'
import PageSize from '../Presentational/PageSize'

export default connect(
  (state) => {
    const pageSizeState = state.get('pageSize').get('state').toJS()

    return {
      pageSize: pageSizeState.pageSize
    }
  },
  {
    handlePageSizeChange: (event) => {
      return {
        type: PageSizeActionType.PAGE_SIZE_UPDATE_PAGE_SIZE,
        pageSize: parseInt(event.target.value, 10)
      }
    }
  }
)(PageSize)