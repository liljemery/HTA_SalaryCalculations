import React from 'react'

const Label = ({BelongsTo, text }) => {
    return (
      <label htmlFor={BelongsTo}>{text}</label>
    )
}

export default Label