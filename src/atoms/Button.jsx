import React from 'react'

const Button = ({buttonType, OnClickFn, buttonText}) => {
  return (
    <button type={buttonType} onClick={OnClickFn}>{buttonText}</button>
  )
}

export default Button