import { Table, TableHead, TableHeadRow, TableHeadTh, makeTableWrapper } from '../../src/index'
import Promise from 'bluebird'
import React from 'react'
import { Router, Route } from 'react-router'

export default (sampleResult, loadingDelay = 200) => {
  const getData = (page, pageSize, q) => {
    const from = (page - 1) * pageSize
    const end = from + pageSize

    return new Promise((resolve, reject, onCancel) => {
      let canceled = false

      onCancel(() => {
        canceled = true

        console.log('getData: canceled')
      })

      setTimeout(() => {
        if (canceled) {
          return
        }

        console.log('getData: resolving')

        try {
          let filteredResults

          if (undefined === q) {
            filteredResults = sampleResult
          } else {
            filteredResults = sampleResult.filter((row) => {

              let include = false

              row.forEach((cell) => {
                if (0 === ('' + cell.content).toLowerCase().indexOf(q)) {
                  include = true
                }
              })

              return include
            })
          }

          resolve({
            result: filteredResults.slice(from, end),
            info: {
              total: sampleResult.length * 2,
              totalFiltered: filteredResults.length
            }
          })
        } catch (err) {
          reject(err)
        }
      }, loadingDelay)
    })
  }

  const onCellClicked = (data, cellIndex, rowIndex) => {
    const str = JSON.stringify({ cellIndex: cellIndex, rowIndex: rowIndex, data: data })

    document
      .getElementById('row-clicked')
      .innerHTML = 'Row clicked: ' + str
  }

  makeTableWrapper((browserHistory, render) => {
    const opts = {
      onCellClicked: onCellClicked,
      getData: getData,
      renderCell: (data) => {
        return data.content
      },
      browserHistory: browserHistory,
    }

    const TableWrapper = (props) => {
      return (
        <Table
          opts={Object.assign({}, opts, { location: props.location })}>
          <TableHead>
            <TableHeadRow>
              <TableHeadTh sortable name="id">Id</TableHeadTh>
              <TableHeadTh sortable={ { defaultOrder: 'asc' } } name="firstColumn">First column</TableHeadTh>
              <TableHeadTh>Second column</TableHeadTh>
            </TableHeadRow>
          </TableHead>
        </Table>
      )
    }

    render(
      (
        <Router history={browserHistory}>
          <Route path="/" component={TableWrapper}>
            <Route path="*" component={TableWrapper} />
          </Route>
        </Router>
      ),
      document.getElementById('main-container')
    )

    document.getElementById('row-clicked').innerHTML = 'Row clicked:'
  })
}