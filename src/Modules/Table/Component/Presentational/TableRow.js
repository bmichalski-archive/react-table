import React from 'react'

export default (props) => {
  return (
    <tr {...props.props}>
      {props.children}
    </tr>
  )
}