import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ActionType from '../Action/Type/ActionType'
import ConnectedFullTable from './Connected/ConnectedFullTable'

class Table extends Component {
  componentWillMount() {
    const props = this.props
    const store = props.store

    store.dispatch(
      {
        type: ActionType.TABLE_HEAD_INIT_CHILDREN,
        children: props.children
      }
    )

    store.dispatch(
      {
        type: ActionType.INIT_LOCATION,
        location: props.location
      }
    )
  }

  render() {
    const props = this.props

    return (
      <Provider store={props.store}>
        <ConnectedFullTable>
          {props.children}
        </ConnectedFullTable>
      </Provider>
    )
  }
}

export default Table
