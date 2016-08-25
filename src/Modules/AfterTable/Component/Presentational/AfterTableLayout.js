import React from 'react'

export default (props) => {
  const renderComponent = (Component) => {
    return (<Component store={props.store}></Component>)
  }

  return (
    <div className="row after-table">
      <div className="col-md-12">
        <div className="pull-right">
          {renderComponent(props.slot)}
        </div>
      </div>
    </div>
  )
}