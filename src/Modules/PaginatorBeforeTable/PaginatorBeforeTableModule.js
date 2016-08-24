import makeModule from '../../Common/MakeModule'
import BeforeTableActionType from '../BeforeTable/Action/ActionType'
import Paginator from '../Paginator/Component/Connected/ConnectedPagination'
import React from 'react'

export default makeModule(
  'paginatorBeforeTable',
  () => {
    return {
      boot: (dispatch) => {
        dispatch({
          type: BeforeTableActionType.BEFORE_TABLE_REGISTER_COMPONENT,
          row: 1,
          slot: 1,
          component: (props) => {
            return (
              (
                <div className="paginator">
                  <Paginator store={props.store}/>
                </div>
              )
            )
          }
        })
      }
    }
  }
)