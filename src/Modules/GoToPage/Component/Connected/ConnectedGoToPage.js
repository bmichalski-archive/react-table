import { connect } from 'react-redux'
import GoToPageActionType from '../../../GoToPage/Action/ActionType'
import GoToPage from '../Presentational/GoToPage'

export default connect(
  (state) => {
    const goToPageState = state.get('goToPage').get('state').toJS()

    return {
      goToPageFieldValue: goToPageState.goToPageFieldValue
    }
  },
  {
    handleGoToPageChanged: (event) => {
      const value = event.target.value

      return {
        type: GoToPageActionType.GO_TO_PAGE_FIELD_VALUE_CHANGED_EVENT,
        goToPageFieldValue: value
      }
    },
    handleGoToPageKeyDown: (event) => {
      return {
        type: GoToPageActionType.GO_TO_PAGE_KEY_DOWN_EVENT,
        keyCode: event.keyCode
      }
    },
    handleGoToPageGoButtonClicked: (event) => {
      event.preventDefault()

      return {
        type: GoToPageActionType.GO_TO_PAGE_GO_BUTTON_CLICKED_EVENT
      }
    }
  }
)(GoToPage)