import React, { PropTypes } from 'react'
import Table from './Table'
import Paginator from '../Connected/ConnectedPaginator'

const FullTable = (props) => {
  if (props.errorLoadingData) {
    return (
      <div>{props.errorLoadingDataMessage}</div>
    )
  }

  if (!props.initialized && props.loading) {
    return (
      <div>{props.loadingMessage}</div>
    )
  }

  return (
    <div className="table-wrapper">
      <div className="row">
        <div className="col-md-12">
          <Paginator
            paginator={props.paginator}
            pageSizeSelector
            goTo
            filtering />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {(() => {
            if (props.loading) {
              return (
                <div>{props.loadingMessage}</div>
              )
            }

            return (
              <Table
                data={props.table.data}
                body={props.table.body}
                renderCell={props.renderCell}
                onTableBodyCellClicked={props.onTableBodyCellClicked}
                emptyTableMessage={props.table.emptyTableMessage}
                tableClassName={props.table.tableClassName}
                isCellClickable={props.table.isCellClickable}>
                {props.children}
              </Table>
            )
          })()}
        </div>
      </div>
      {(() => {
        if (!props.loading) {
          return (
            <div className="row">
              <div className="col-md-12">
                <Paginator
                  paginator={props.paginator} />
              </div>
            </div>
          )
        }
      })()}
    </div>
  )
}

FullTable.propTypes = {
  table: PropTypes.object.isRequired,
  renderCell: PropTypes.func,
  onTableBodyCellClicked: PropTypes.func,
  initialized: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  errorLoadingData: PropTypes.bool.isRequired,
  errorLoadingDataMessage: PropTypes.string.isRequired,
  loadingMessage: PropTypes.string.isRequired
}

export default FullTable