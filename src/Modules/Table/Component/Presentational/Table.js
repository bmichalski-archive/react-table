import React from 'react'

export default (props) => {
  return (
    <table {...props.props}>
      {props.children}
    </table>
  )
}