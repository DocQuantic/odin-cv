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
  let [educations, setEducations] = useState([
    {
      school: "school1",
      degree: "deg1",
      startDate: "2024-01-26",
      endDate: "2024-01-26",
      id: crypto.randomUUID()
    },
    {
      school: "school2",
      degree: "deg2",
      startDate: "2024-01-26T00:00" ,
      endDate: "2024-01-26T00:00",
      id: crypto.randomUUID()
    }
  ])
  let [experiences, setExperiences] = useState([
    {
      company: "comp1",
      position: "pos1",
      startDate: "2024-01-26",
      endDate: "2024-01-26",
      description: "descr1",
      id: crypto.randomUUID()
    },
    {
      company: "comp2",
      position: "pos2",
      startDate: "2024-01-26",
      endDate: "2024-01-26",
      description: "descr2",
      id: crypto.randomUUID()
    }
  ]) 

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

  function handleEducChange(e){
    let newEducs
    switch(e.target.name){
      case "school":
        newEducs = educations.map(educ => educ.id === e.target.parentNode.parentNode.id ? {...educ, school: e.target.value} : educ)
        setEducations(newEducs)
        break;
      case "degree":
        newEducs = educations.map(educ => educ.id === e.target.parentNode.parentNode.id ? {...educ, degree: e.target.value} : educ)
        setEducations(newEducs)
        break;
      case "start-date":
        newEducs = educations.map(educ => educ.id === e.target.parentNode.parentNode.id ? {...educ, startDate: e.target.value} : educ)
        setEducations(newEducs)
        break;
      case "end-date":
        newEducs = educations.map(educ => educ.id === e.target.parentNode.parentNode.id ? {...educ, endDate: e.target.value} : educ)
        setEducations(newEducs)
        break;
    }
  }

  function handleExpChange(e){
    let newExps
    switch(e.target.name){
      case "company":
        newExps = experiences.map(exp => exp.id === e.target.parentNode.parentNode.id ? {...exp, company: e.target.value} : exp)
        console.log(newExps)
        setExperiences(newExps)
        break;
      case "position":
        newExps = experiences.map(exp => exp.id === e.target.parentNode.parentNode.id ? {...exp, position: e.target.value} : exp)
        setExperiences(newExps)
        break;
      case "description":
        newExps = experiences.map(exp => exp.id === e.target.parentNode.parentNode.id ? {...exp, description: e.target.value} : exp)
        setExperiences(newExps)
        break;
      case "start-date":
        newExps = experiences.map(exp => exp.id === e.target.parentNode.parentNode.id ? {...exp, startDate: e.target.value} : exp)
        setExperiences(newExps)
        break;
      case "end-date":
        newExps = experiences.map(exp => exp.id === e.target.parentNode.parentNode.id ? {...exp, endDate: e.target.value} : exp)
        setExperiences(newExps)
        break;
    }
  }

  return (
    <>
      <div className="forms">
        <GeneralForm info={info} onChange={handleInfoChange}/>
        <EducForm educs={educations} onChange={handleEducChange}/>
        <ExpForm exps={experiences} onChange={handleExpChange}/>
      </div>
      <div className="cv">
        <CV info={info} educations={educations} experiences={experiences}/>
      </div>
    </>
  )
}

export default App
