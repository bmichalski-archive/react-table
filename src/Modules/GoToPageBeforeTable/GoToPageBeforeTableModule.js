import makeModule from '../../Common/MakeModule'
import BeforeTableActionType from '../BeforeTable/Action/ActionType'
import GoToPage from '../GoToPage/Component/Connected/ConnectedGoToPage'
import React from 'react'

export default makeModule(
  'goToPageBeforeTable',
  () => {
    return {
      boot: (dispatch) => {
        dispatch({
          type: BeforeTableActionType.BEFORE_TABLE_REGISTER_COMPONENT,
          row: 0,
          slot: 1,
          component: (props) => {
            return (
              <div className="go-to-page">
                <GoToPage store={props.store} />
              </div>
            )
          }
        })
      }
    }
  }
)