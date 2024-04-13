import React from 'react'

const Label = ({BelongsTo, text }) => {
    return (
      <label className='block mb-2 text-sm font-medium text-white w-2/4 mx-auto' htmlFor={BelongsTo}>{text}</label>
    )
}

export default Label