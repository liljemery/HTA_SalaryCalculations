import React from 'react'
import Form from '../organisms/Form'
const SalaryDiscountCalculator = ({salary, setSalary, bonifications, setBonifications, extraHours, setExtraHours}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
    <Form clas
    salary={salary}
    setSalary={setSalary}

    bonifications={bonifications}
    setBonifications={setBonifications}

    extraHours={extraHours}
    setExtraHours={setExtraHours}

    buttonType={'Submit'}
    OnClickFn={handleSubmit}
    buttonText={'Do Calculations!'}
    />
    )
}

export default SalaryDiscountCalculator