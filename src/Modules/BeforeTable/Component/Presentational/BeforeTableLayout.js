import React from 'react'

export default (props) => {
  const renderComponent = (Component) => {
    return (<Component store={props.store}></Component>)
  }

  return (
    <div className="row before-table">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-3">{renderComponent(props.rows[0].slots[0])}</div>
          <div className="col-md-2">{renderComponent(props.rows[0].slots[1])}</div>
        </div>
        <div className="row">
          <div className="col-md-2">
            {renderComponent(props.rows[1].slots[0])}
          </div>
          <div className="col-md-10">
            <div className="pull-right">
              {renderComponent(props.rows[1].slots[1])}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}