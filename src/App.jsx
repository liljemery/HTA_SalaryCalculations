import { useState } from "react"
import SalaryDiscountCalculator from "./pages/SalaryDiscountCalculator";

function App() {
  const [salary, setSalary] = useState(0);
  const [bonifications, setBonifications] = useState(0);
  const [extraHours, setExtraHours] = useState(0);

  return (
    <>
    <section className="bg-gradient-to-tr from-cyan-500 via-purple-500 to-blue-500">
      <SalaryDiscountCalculator
        salary={salary}
        setSalary={setSalary}

        bonifications={bonifications}
        setBonifications={setBonifications}

        extraHours={extraHours}
        setExtraHours={setExtraHours}
      />
    </section>

    </>
  )
}

export default App
