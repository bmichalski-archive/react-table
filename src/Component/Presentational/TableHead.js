import React, { Component } from 'react'

class TableHead extends Component {
  render() {
    const props = this.props

    return (
      <thead>
        {props.children}
      </thead>
    )
  }
}

export default TableHead