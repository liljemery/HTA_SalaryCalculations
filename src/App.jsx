import { useState } from "react"
import SalaryDiscountCalculator from "./pages/SalaryDiscountCalculator";

function App() {
  const [salary, setSalary] = useState(0);
  const [bonifications, setBonifications] = useState(0);
  const [extraHours, setExtraHours] = useState(0);

  return (
    <>
    <div>
      <SalaryDiscountCalculator
        salary={salary}
        setSalary={setSalary}

        bonifications={bonifications}
        setBonifications={setBonifications}

        extraHours={extraHours}
        setExtraHours={setExtraHours}
      />
    </div>

    </>
  )
}

export default App
