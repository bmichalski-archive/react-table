import React, { Component } from 'react'
import moduleLoader from './ModuleLoader'
import commonModule from './Modules/Common/CommonModule'
import tableWrapperModule from './Modules/TableWrapper/TableWrapperModule'
import tableModule from './Modules/Table/TableModule'
import dataModule from './Modules/Data/DataModule'
import asyncDataModule from './Modules/AsyncData/AsyncDataModule'
import parseDataModule from './Modules/ParseData/ParseDataModule'
import beforeTableModule from './Modules/BeforeTable/BeforeTableModule'
import sortModule from './Modules/Sort/SortModule'
import routingModule from './Modules/Routing/RoutingModule'

import filterModule from './Modules/Filter/FilterModule'
import filterBeforeTableModule from './Modules/FilterBeforeTable/FilterBeforeTableModule'
import filterAsyncDataModule from './Modules/FilterAsyncData/FilterAsyncDataModule'
import filterAsyncDataRoutingModule from './Modules/FilterAsyncDataRouting/FilterAsyncDataRoutingModule'

import goToPageModule from './Modules/GoToPage/GoToPageModule'
import goToPageBeforeTableModule from './Modules/GoToPageBeforeTable/GoToPageBeforeTableModule'
import goToPageAsyncDataModule from './Modules/GoToPageAsyncData/GoToPageAsyncDataModule'
import goToPageAsyncDataRoutingModule from './Modules/GoToPageAsyncDataRouting/GoToPageAsyncDataRoutingModule'

import pageSizeModule from './Modules/PageSize/PageSizeModule'
import pageSizeBeforeTableModule from './Modules/PageSizeBeforeTable/PageSizeBeforeTableModule'
import pageSizeAsyncDataModule from './Modules/PageSizeAsyncData/PageSizeAsyncDataModule'
import pageSizeAsyncDataRoutingModule from './Modules/PageSizeAsyncDataRouting/PageSizeAsyncDataRoutingModule'

import paginatorModule from './Modules/Paginator/PaginatorModule'
import paginatorBeforeTableModule from './Modules/PaginatorBeforeTable/PaginatorBeforeTableModule'

import filterPageModule from './Modules/FilterPage/FilterPageModule'
import pageSizePageModule from './Modules/PageSizePage/PageSizePageModule'

class TableWithStore extends Component {
  componentWillMount() {
    const props = this.props

    const store = moduleLoader(
      props.opts,
      commonModule,
      tableWrapperModule,
      tableModule,
      dataModule,
      asyncDataModule,
      parseDataModule,
      beforeTableModule,
      routingModule,
      sortModule,
      filterModule,
      filterBeforeTableModule,
      filterAsyncDataModule,
      filterAsyncDataRoutingModule,
      goToPageModule,
      goToPageBeforeTableModule,
      goToPageAsyncDataModule,
      goToPageAsyncDataRoutingModule,
      pageSizeModule,
      pageSizeBeforeTableModule,
      pageSizeAsyncDataModule,
      pageSizeAsyncDataRoutingModule,
      paginatorModule,
      paginatorBeforeTableModule,
      filterPageModule,
      pageSizePageModule
    )

    this._store = store
  }

  render() {
    const store = this._store

    const TableWrapper = store
      .getState()
      .get('common')
      .get('components')
      .get('tableWrapper')
      .get('TableWrapper')

    return (
      <TableWrapper store={store} />
    )
  }
}

export default TableWithStore