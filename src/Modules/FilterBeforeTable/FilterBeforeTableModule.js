import makeModule from '../../Common/MakeModule'
import BeforeTableActionType from '../BeforeTable/Action/ActionType'
import Filter from '../Filter/Component/Connected/ConnectedFilter'
import React from 'react'

export default makeModule(
  'filterBeforeTable',
  () => {
    return {
      boot: (dispatch) => {
        dispatch({
          type: BeforeTableActionType.BEFORE_TABLE_REGISTER_COMPONENT,
          row: 0,
          slot: 0,
          component: (props) => {
            return (
              <div className="filter">
                <Filter store={props.store} />
              </div>
            )
          }
        })
      }
    }
  }
)