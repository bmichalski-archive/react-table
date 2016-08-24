import makeModule from '../../Common/MakeModule'
import BeforeTableActionType from '../BeforeTable/Action/ActionType'
import PageSize from '../PageSize/Component/Connected/ConnectedPageSize'
import React from 'react'

export default makeModule(
  'pageSizeBeforeTable',
  () => {
    return {
      boot: (dispatch) => {
        dispatch({
          type: BeforeTableActionType.BEFORE_TABLE_REGISTER_COMPONENT,
          row: 1,
          slot: 0,
          component: (props) => {
            return (
              <div className="page-size">
                <PageSize store={props.store} />
              </div>
            )
          }
        })
      }
    }
  }
)