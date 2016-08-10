import React, { PropTypes } from 'react'

const Paginator = (props) => {
  const handleClick = (page, disabled, event) => {
    event.preventDefault()

    if (disabled) {
      return
    }

    props.updatePage(page)
  }

  const handlePageSizeChange = (event) => {
    props.updatePageSize(parseInt(event.target.value, 10))
  }

  const handleGoToPageChanged = (event) => {
    const rawValue = event.target.value

    if ('' === rawValue) {
      props.updateGoToPageValue('')
    } else if (/^[0-9]+$/.test(rawValue) && rawValue >= 1) {
      props.updateGoToPageValue(
        parseInt(rawValue, 10)
      )
    }
  }

  const handleGoToPageKeyDown = (event) => {
    if (13 === event.keyCode) {
      event.preventDefault()

      if (props.goToPageDisabled) {
        return
      }

      props.updatePage(props.goToPageValue)
    }
  }

  const handleQChanged = (event) => {
    props.updateQFieldValue(event.target.value)
  }

  const handleGoToPageGoButtonClicked = (event) => {
    event.preventDefault()

    if (props.goToPageDisabled) {
      return
    }

    props.updatePage(props.goToPageValue)
  }

  const hasFilteringFeature = props.filtering
  const hasGoToFeature = props.goTo
  const hasPageSizeSelectorFeature = props.pageSizeSelector

  const paginationFields = (() => {
    if (!(hasPageSizeSelectorFeature || hasGoToFeature || hasFilteringFeature)) {
      return
    }

    return (
      <div className="row">
        {
          (() => {
            if (hasFilteringFeature) {
              return (
                <div className="col-md-5">
                  <label>
                    Filter
                    <input
                      type="text"
                      className="form-control"
                      value={props.qFieldValue}
                      placeholder="Filter:"
                      onChange={handleQChanged} />
                  </label>
                </div>
              )
            }
          })()
        }
        {
          (() => {
            if (hasGoToFeature) {
              return (
                <div className="col-md-4">
                  <div className="page-selector form-group">
                    <label>
                      Go to page
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={'Page:'}
                          value={props.goToPageValue}
                          onChange={handleGoToPageChanged}
                          onKeyDown={handleGoToPageKeyDown} />
                        <div className="input-group-btn">
                          <button
                            className="btn btn-default "
                            disabled={props.goToPageDisabled}
                            onClick={handleGoToPageGoButtonClicked}>
                            Go
                          </button>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              )
            }
          })()
        }
        {
          (() => {
            if (hasPageSizeSelectorFeature) {
              return (
                <div className="col-md-3">
                  <div className="page-size-selector form-group">
                    <label>
                      Page size&nbsp;
                      <select
                        className="form-control"
                        value={props.pageSize}
                        onChange={handlePageSizeChange}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select>
                    </label>
                  </div>
                </div>
              )
            }
          })()
        }
      </div>
    )
  })()

  return (
    <div className="paginator-wrapper">
      <div className="row">
        <div className="col-md-4">
          {paginationFields}
        </div>
        {
          (() => {
            if (props.showButtons) {
              return (
                <div className="col-md-8">
                  <ul className="pagination pull-right">
                    {(() => {
                      const rows = []

                      const addPageButton = (page, key, content, link, className, disabled) => {
                        rows.push(
                          <li
                            key={key}
                            className={className}>
                            <a
                              disabled={disabled}
                              href={link}
                              onClick={handleClick.bind(undefined, page, disabled)}>
                              <span>{content}</span>
                            </a>
                          </li>
                        )
                      }

                      props.buttons.forEach((button) => {
                        addPageButton(
                          button.page,
                          button.key,
                          button.content,
                          button.link,
                          button.className,
                          button.disabled
                        )
                      })

                      return rows
                    })()}
                  </ul>
                </div>
              )
            }
          })()
        }
      </div>
    </div>
  )
}

Paginator.propTypes = {
  buttons: PropTypes.array.isRequired,
  showButtons: PropTypes.bool.isRequired,
  goToPageDisabled: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  qFieldValue: PropTypes.string.isRequired,
  goToPageValue: PropTypes.any.isRequired,
  updateQFieldValue: PropTypes.func.isRequired,
  updateGoToPageValue: PropTypes.func.isRequired,
  updatePageSize: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  pageSizeSelector: PropTypes.bool.isRequired,
  goTo: PropTypes.bool.isRequired,
  filtering: PropTypes.bool.isRequired
}

Paginator.defaultProps = {
  pageSizeSelector: false,
  goTo: false,
  filtering: false
}

export default Paginator
