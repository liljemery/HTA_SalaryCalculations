import React, { useState } from 'react'
import Form from '../organisms/Form'
import H1 from '../atoms/H1'
import H2 from '../atoms/H2'
const SalaryDiscountCalculator = ({salary, setSalary, bonifications, setBonifications, extraHours, setExtraHours}) => {
    const vacaciones = parseInt((parseInt(salary) / 23.83) * 14);
    const dobleSueldo = salary;
    const [payOut, setPayout] = useState(0);

    const ISR = 
    salary * 12 > 416220.01 && salary * 12 < 624329 ? 
        parseInt( parseInt(salary * 12 - 416220) * parseInt(0.15)) :
    salary * 12 > 624329.01 && salary * 12 < 867123 ? 
        parseInt( parseInt((salary * 12 - 624329.01) * 0.20) + parseInt(31216)) :
    salary * 12 > 867123.01 ?
        parseInt((salary * 12 - 867123.01) * 0.25) + parseInt(79776) 
    :
        0 ;
    const ClearFormValues = () =>{
        setSalary(0);
        setBonifications(0);
        setExtraHours(0);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setPayout(parseFloat(parseInt(salary) + parseInt(vacaciones) + parseInt(dobleSueldo) + parseInt(bonifications) + parseInt(extraHours) - ISR));
        ClearFormValues();
    }
    return (
    <>
        <div className='h-screen flex-column items-center content-center w-full'>
            <H1 h1Text={"Salary Discount Calculator"} />
            {payOut ? <H2 h1Text={`Your final salary will be: $${payOut} DOP`} /> : ''}
            <Form
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
        </div>    
    </>


    )
}

export default SalaryDiscountCalculator