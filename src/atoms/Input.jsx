import React from 'react'

const Input = ({ inputType, inputId, InputName, InputPlaceholder, value, setValue}) => {
    return (
        <input type={inputType} id={inputId} value={value} name={InputName} placeholder={InputPlaceholder} onChange={(e)=>setValue(e.target.value)} />
    )
}

export default Input