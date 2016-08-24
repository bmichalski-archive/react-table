import { connect } from 'react-redux'
import ActionType from '../../Action/ActionType'
import PresentationSortIcon from '../Presentational/SortIcon'

export default connect(
  (state, ownProps) => {
    const cellIndex = ownProps.cellIndex

    const computedViewModel = state.get('sort').get('computedViewModel').toJS()

    return {
      iconClassName: computedViewModel.cells[cellIndex].iconClassName,
      showRemoveIcon: computedViewModel.cells[cellIndex].showRemoveIcon
    }
  },
  {
    handleResetSortContextClicked: function (event) {
      event.stopPropagation()

      return {
        type: ActionType.SORT_RESET_SORT_STATE
      }
    }
  }
)(PresentationSortIcon)