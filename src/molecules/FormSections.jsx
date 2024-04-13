import React from 'react'
import Input from '../atoms/Input'
import Label from '../atoms/Label'

const FormSections = ({ text, InputType, InputId, InputName, InputPlaceholder, value, setValue }) => {
  return (
    <div className=' my-5'>
        <Label BelongsTo={InputId} text={text}/>
        <Input inputType={InputType} InputId={InputId} InputName={InputName} InputPlaceholder={InputPlaceholder} value={value} setValue={setValue}/>
    </div>
  )
}

export default FormSections