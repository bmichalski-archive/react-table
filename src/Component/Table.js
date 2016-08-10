import React, { Component } from 'react'
import { Provider } from 'react-redux'
import getStore from '../Store/Store'
import getMainSaga from '../Saga/MainSaga'
import ActionType from '../Action/Type/ActionType'
import getTableWrapper from './Connected/ConnectedFullTable'

class Table extends Component {
  constructor(props) {
    super(props)

    this._TableWrapper = getTableWrapper(props)
    
    this._location = props.opts.location
    const store = getStore(props.opts)

    function* rootSaga() {
      yield getMainSaga(store.getState, props.opts.browserHistory)
    }

    store.getState().get('saga').run(rootSaga)

    this._store = store
  }

  componentWillMount() {
    this._store.dispatch({ type: ActionType.INIT_LOCATION, location: this._location })
  }

  render() {
    const TableWrapper = this._TableWrapper

    return (
      <Provider store={this._store}>
        <TableWrapper />
      </Provider>
    )
  }
}

export default Table
