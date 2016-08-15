import React from 'react'

export default (props) => {
  return (
    <tbody {...props.props}>
      {props.children}
    </tbody>
  )
}