import React, { useState } from 'react'
import Form from '../organisms/Form'
import H1 from '../atoms/H1'
import H2 from '../atoms/H2'

const SalaryDiscountCalculator = ({salary, setSalary, bonifications, setBonifications, extraHours, setExtraHours}) => {
    const vacaciones = parseInt((parseInt(salary) / 23.83) * 14);
    const dobleSueldo = salary;
    const [payOut, setPayout] = useState(0);
    const [ annualSalary, setAnnualSalary ] = useState(0)
    const [ calculatedSalary, setCalculatedSalary ] = useState(0)
    const calculateISR = () => {
        let calculatedISR = 0;
        if (annualSalary > 416220 && annualSalary <= 624329) {
            calculatedISR = (annualSalary - 416220) * 0.15;
            setCalculatedSalary(salary);
        } else if (annualSalary > 624329 && annualSalary <= 867123) {
            calculatedISR = ((annualSalary - 624329) * 0.20) + 31216;
            setCalculatedSalary(salary);
        } else if (annualSalary > 867123) {
            calculatedISR = ((annualSalary - 867123) * 0.25) + 79776;
            setCalculatedSalary(annualSalary)
        }
        return Math.round(calculatedISR);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAnnualSalary(salary);
        const ISR = calculateISR(salary);
        const totalPayout = parseFloat((calculatedSalary + vacaciones + parseInt(dobleSueldo) + parseInt(bonifications) + parseInt(extraHours)) - ISR);
        setPayout(totalPayout);
        setSalary(0);
        setBonifications(0);
        setExtraHours(0);
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

export default SalaryDiscountCalculator;
