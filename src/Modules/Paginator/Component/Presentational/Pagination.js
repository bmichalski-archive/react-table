import React from 'react'

const addPageButton = (page, key, content, link, className, disabled, handleClick) => {
  return (
    <li
      key={key}
      className={className}>
      <a
        disabled={disabled}
        href={link}
        onClick={handleClick.bind(undefined, page)}>
        <span>{content}</span>
      </a>
    </li>
  )
}

export default (props) => {
  const buttons = props.buttons

  return (
    <ul className="pagination">
      {(() => {
        return buttons.map((button) => {
          return addPageButton(
            button.page,
            button.key,
            button.content,
            button.link,
            button.className,
            button.disabled,
            button.handleClick
          )
        })
      })()}
    </ul>
  )
}