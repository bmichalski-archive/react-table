import { Table, TableHead, TableHeadRow, TableHeadTh, makeTableWrapper } from '../../src/index'
import Promise from 'bluebird'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'
import ActionType from '../../src/Action/Type/ActionType'

export default (sampleResult, loadingDelay = 200) => {
  const getData = (opts) => {
    const { page, pageSize, q, sort } = opts

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
            filteredResults = [].concat(sampleResult)
          } else {
            filteredResults = [].concat(sampleResult).filter((row) => {

              let include = false

              row.forEach((cell) => {
                if (0 === ('' + cell.content).toLowerCase().indexOf(q)) {
                  include = true
                }
              })

              return include
            })
          }

          if (undefined !== sort) {
            const coef = (sort.order === 'asc' ? 1 : -1)

            if ('id' === sort.sort) {
              filteredResults.sort((a, b) => {
                return (a[0].content -  b[0].content) * coef
              })
            } else if ('firstColumn' === sort.sort) {
              filteredResults.sort((a, b) => {
                return ('' + a[1].content).localeCompare('' + b[1].content) * coef
              })
            } else {
              throw new Error(
                'Unexpected sort "' + sort.sort + '"'
              )
            }
          }

          const result = filteredResults.slice(from, end)

          resolve({
            result: result,
            info: {
              total: result.length,
              filteredTotal: filteredResults.length
            }
          })
        } catch (err) {
          reject(err)
        }
      }, loadingDelay)
    })
  }

  function getSagas(getState) {
    function *updateBodyRowsOnDataUpdateSaga() {
      yield takeEvery(ActionType.UPDATE_DATA, (action) => {
        const rows = {}

        action.data.forEach((data, i) => {
          const cells = {}

          data.forEach((data, i) => {
            if (i < 2) {
              cells[i] = {
                className: 'clickable foobar-cell-class'
              }
            }
          })

          rows[i] = {
            className: 'bazqux-row-class',
            cells
          }
        })

        return put({
          type: ActionType.UPDATE_BODY_ROWS,
          rows
        })
      })
    }

    function *onTableBodyCellClicked() {
      yield takeEvery(ActionType.TABLE_BODY_CELL_CLICKED, (action) => {
        const str = JSON.stringify(action)

        document
          .getElementById('row-clicked')
          .innerHTML = 'Row clicked: ' + str
      })
    }

    return [
      updateBodyRowsOnDataUpdateSaga(),
      onTableBodyCellClicked()
    ]
  }

  const opts = {
    getData: getData,
    renderCell: (data) => {
      return data.content
    },
    getSagas: getSagas
  }

  const { TableWrapper, browserHistory } = makeTableWrapper(opts, (browserHistory, store) => {
    return {
      TableWrapper: (props) => {
        return (
          <Table
            location={props.location}
            store={store}>
            <TableHead>
              <TableHeadRow>
                <TableHeadTh sortable name="id">Id</TableHeadTh>
                <TableHeadTh sortable={ { defaultOrder: 'asc' } } name="firstColumn">First column</TableHeadTh>
                <TableHeadTh>Second column</TableHeadTh>
              </TableHeadRow>
            </TableHead>
          </Table>
        )
      },
      browserHistory
    }
  })

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
}