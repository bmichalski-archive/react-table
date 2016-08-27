import React from 'react'
import { Table } from '../../src/index'
import Promise from 'bluebird'
import { withRouter } from 'react-router'

const DemoTableWrapper = (props) => {
  const opts = {
    sort: {
      sortableColumns: [
        'id',
        'firstColumn'
      ]
    },
    table: {
      className: 'table table-bordered',
      head: {
        rows: [
          {
            cells: [
              {
                name: 'id',
                type: 'HEADING',
                content: 'Id'
              },
              {
                name: 'firstColumn',
                type: 'HEADING',
                content: 'First column'
              },
              {
                name: 'secondColumn',
                type: 'HEADING',
                content: 'Second column'
              }
            ],
            props: {
              className: 'test-head-row-classname'
            }
          }
        ]
      }
    },
    parseData: {
      updateBodys: (data) => {
        const rows = []

        data.result.forEach((resultRow) => {
          const row = {
            cells: [],
            props: {
              className: 'test-body-row-classname'
            }
          }

          resultRow.forEach((resultCell) => {
            row.cells.push({
              props: {
                className: 'clickable',
                onClick: (event) => {
                  event.preventDefault()

                  const str = JSON.stringify(row)

                  document
                    .getElementById('row-clicked')
                    .innerHTML = 'Row clicked: ' + str
                }
              },
              content: resultCell.content
            })
          })

          rows.push(row)
        })

        return [
          {
            rows: rows
          }
        ]
      }
    },
    asyncData: {
      fetchData: (opts) => {
        const sampleResult = props.sampleResult
        const loadingDelay = props.loadingDelay

        if (opts.page === undefined) {
          opts.page = 1
        }

        if (opts.pageSize === undefined) {
          opts.pageSize = 10
        }

        if (opts.q === undefined) {
          opts.q = ''
        }

        const { page, pageSize, q, sort } = opts

        const from = (page - 1) * pageSize
        const end = from + pageSize

        return new Promise((resolve, reject, onCancel) => {
          let timeoutHandle

          onCancel(() => {
            clearTimeout(timeoutHandle)

            console.log('getData: canceled')
          })

          timeoutHandle = setTimeout(() => {
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
                    return (a[0].content - b[0].content) * coef
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

              const resolveData = {
                result: result,
                info: {
                  total: result.length,
                  filteredTotal: filteredResults.length
                }
              }

              resolve(resolveData)
            } catch (err) {
              reject(err)
            }
          }, loadingDelay)
        })
      }
    }
  }

  opts.routing = {
    location: props.location,
    router: props.router
  }

  return (
    <div>
      <style contentStyleType="text/css">
        {'table > tbody > tr > td.clickable {cursor: pointer;}'}
      </style>
      <Table
        opts={opts}>
      </Table>
    </div>
  )
}

DemoTableWrapper.propTypes = {
  sampleResult: React.PropTypes.array,
  loadingDelay: React.PropTypes.number.isRequired
}

DemoTableWrapper.defaultProps = {
  loadingDelay: 200
}

export default withRouter(DemoTableWrapper)
