import React from 'react'
import { Provider } from 'react-redux'
import ConnectedFullTable from './Connected/ConnectedFullTable'

export default (props) => {
  return (
    <Provider store={props.store}>
      <ConnectedFullTable>
        {props.children}
      </ConnectedFullTable>
    </Provider>
  )
}
