import React, { Component } from 'react'
import Table from './TableWrappedWithProvider'
import moduleLoader from '../ModuleLoader'
import tableModule from '../Modules/Table/TableModule'
import dataModule from '../Modules/Data/DataModule'
import asyncDataModule from '../Modules/AsyncData/AsyncDataModule'
import parseDataModule from '../Modules/ParseData/ParseDataModule'
import paginatorModule from '../Modules/Paginator/PaginatorModule'
import sortModule from '../Modules/Sort/SortModule'

class TableWithStore extends Component {
  componentWillMount() {
    const props = this.props

    const {
      store,
      components,
      beforeTableComponents
    } = moduleLoader(
      props.opts,
      tableModule,
      dataModule,
      asyncDataModule,
      parseDataModule,
      paginatorModule,
      sortModule
    )

    this._store = store
    this._components = components
    this._beforeTableComponents = beforeTableComponents
  }

  render() {
    const store = this._store
    const Table = this._components.table.Table

    const renderBeforeTableComponents = () => {
      return this._beforeTableComponents.map((component, i) => {
        return (
          <div key={i}>{component}</div>
        )
      })
    }

    return (
      <div className="table-wrapper">
        {renderBeforeTableComponents()}
        <Table store={store}></Table>
      </div>
    )
  }
}

export default TableWithStore