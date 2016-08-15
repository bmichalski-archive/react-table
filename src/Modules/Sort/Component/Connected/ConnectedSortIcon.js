import { connect } from 'react-redux'
import ActionType from '../../Action/ActionType'
import PresentationSortIcon from '../Presentational/SortIcon'

export default connect(
  undefined,
  {
    handleResetSortContextClicked: function (event) {
      event.preventDefault()
      
      return {
        type: ActionType.SORT_RESET_SORT_STATE
      }
    }
  }
)(PresentationSortIcon)
