import FormSections from '../molecules/FormSections'
import Button from '../atoms/Button'

const Form = ({salary, setSalary, bonifications, setBonifications, extraHours, setExtraHours, buttonType, OnClickFn, buttonText}) => {

  return (
    <form className='block w-3/4 lg:w-3/6 py-5 bg-gray-700 mx-auto flex-column rounded-b-md drop-shadow-lg'>
        <FormSections 
          text={"Monthly Salary (in DOP)"}
          inputId={"MonthlySalary"}
          InputType={"number"}
          InputName={"Monthly Salary"}
          InputPlaceholder={"Monthly Salary"}
          value={salary}
          setValue={setSalary}
        /> 
        <FormSections 
          text={"Bonifications (in DOP)"}
          inputId={"Bonifications"}
          InputType={"number"}
          InputName={"Bonifications"}
          InputPlaceholder={"Bonifications"}
          value={bonifications}
          setValue={setBonifications}
        /> 
        <FormSections 
          text={"Extra Hours (in DOP)"}
          inputId={"ExtraHours"}
          InputType={"number"}
          InputName={"Extra Hours"}
          InputPlaceholder={"Monthly Salary"}
          value={extraHours}
          setValue={setExtraHours}
        /> 
        <Button 
            buttonType={buttonType} 
            OnClickFn={OnClickFn} 
            buttonText={buttonText}/>
    </form>
  )
}

export default Form