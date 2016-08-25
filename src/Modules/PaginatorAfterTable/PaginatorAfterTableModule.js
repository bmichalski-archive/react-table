import makeModule from '../../Common/MakeModule'
import AfterTableActionType from '../AfterTable/Action/ActionType'
import Paginator from '../Paginator/Component/Connected/ConnectedPagination'
import React from 'react'

export default makeModule(
  'paginatorAfterTable',
  () => {
    return {
      boot: (dispatch) => {
        dispatch({
          type: AfterTableActionType.AFTER_TABLE_REGISTER_COMPONENT,
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