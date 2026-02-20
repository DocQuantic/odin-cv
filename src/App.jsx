import './App.css'
import { useState } from 'react'
import GeneralForm from './components/GeneralForm'
import EducForm from './components/EducForm'
import ExpForm from './components/ExpForm'
import CV from './components/CV'

function App() {
  let [info, setInfo] = useState({
    name: "name",
    mail: "mail",
    phone: "00000000",
    address: "address"
  })
  let experiences = [
    {
      company: "comp1",
      position: "pos1",
      startDate: "2024-01-26T00:00",
      endDate: "2024-01-26T00:00",
      description: "descr1",
      id: crypto.randomUUID()
    },
    {
      company: "comp2",
      position: "pos2",
      startDate: "2024-01-26T00:00",
      endDate: "2024-01-26T00:00",
      description: "descr2",
      id: crypto.randomUUID()
    }
  ] 

  let educations = [
    {
      school: "school1",
      degree: "deg1",
      startDate: "2024-01-26T00:00",
      endDate: "2024-01-26T00:00",
      id: crypto.randomUUID()
    },
    {
      school: "school2",
      degree: "deg2",
      startDate: "2024-01-26T00:00" ,
      endDate: "2024-01-26T00:00",
      id: crypto.randomUUID()
    }
  ]

  function handleInfoChange(e){
    switch(e.target.name){
      case "name":
        setInfo({...info, name: e.target.value})
        break;
      case "email":
        setInfo({...info, mail: e.target.value})
        break;
      case "phone":
        setInfo({...info, phone: e.target.value})
        break;
      case "address":
        setInfo({...info, address: e.target.value})
        break;
    }
  }

  return (
    <>
      <div className="forms">
        <GeneralForm info={info} onChange={handleInfoChange}/>
        <EducForm educs={educations}/>
        <ExpForm exps={experiences}/>
      </div>
      <div className="cv">
        <CV info={info}/>
      </div>
    </>
  )
}

export default App
