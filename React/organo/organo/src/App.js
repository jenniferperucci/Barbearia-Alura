import { useState } from 'react';
import { Banner } from './components/Banner/Banner';
import { Form } from './components/Form';


function App() {
  const [employees, setEmployees] = useState([])
  const newRegisteredEmployee = (employee) => {
    setEmployees([...employees, employee])
    console.log(employee)
  }
  return (
    <div className='App'>
      <Banner />
      <Form registeredEmployee={employee => newRegisteredEmployee(employee)} />


    </div>
  );
}

export default App;
