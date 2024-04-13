import React from 'react'

const Input = ({ inputType, inputId, InputName, InputPlaceholder, value, setValue}) => {
    return (
        <input className='bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 mx-auto p-2.5 ' type={inputType} id={inputId} value={value} name={InputName} placeholder={InputPlaceholder} onChange={(e)=>setValue(e.target.value)} />
    )
}

export default Input