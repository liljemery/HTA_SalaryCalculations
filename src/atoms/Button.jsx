import React from 'react'

const Button = ({buttonType, OnClickFn, buttonText}) => {
  return (
    <button className='block mx-auto w-2/4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm py-2.5 mb-5' type={buttonType} onClick={OnClickFn}>{buttonText}</button>
  )
}

export default Button