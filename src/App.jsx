import './App.css'
import { useState } from 'react'
import GeneralForm from './components/GeneralForm'
import EducForm from './components/EducForm'
import ExpForm from './components/ExpForm'
import CV from './components/CV'

function App() {
  let [info, setInfo] = useState({
    name: "",
    mail: "",
    phone: "",
    address: ""
  })
  let [educations, setEducations] = useState([])
  let [experiences, setExperiences] = useState([]) 

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
        newEducs = educations.map(educ => educ.id === e.target.parentNode.id ? {...educ, school: e.target.value} : educ)
        setEducations(newEducs)
        break;
      case "degree":
        newEducs = educations.map(educ => educ.id === e.target.parentNode.id ? {...educ, degree: e.target.value} : educ)
        setEducations(newEducs)
        break;
      case "start-date":
        newEducs = educations.map(educ => educ.id === e.target.parentNode.id ? {...educ, startDate: e.target.value} : educ)
        setEducations(newEducs)
        break;
      case "end-date":
        newEducs = educations.map(educ => educ.id === e.target.parentNode.id ? {...educ, endDate: e.target.value} : educ)
        setEducations(newEducs)
        break;
    }
  }

  function handleExpChange(e){
    let newExps
    switch(e.target.name){
      case "company":
        newExps = experiences.map(exp => exp.id === e.target.parentNode.id ? {...exp, company: e.target.value} : exp)
        console.log(newExps)
        setExperiences(newExps)
        break;
      case "position":
        newExps = experiences.map(exp => exp.id === e.target.parentNode.id ? {...exp, position: e.target.value} : exp)
        setExperiences(newExps)
        break;
      case "description":
        newExps = experiences.map(exp => exp.id === e.target.parentNode.id ? {...exp, description: e.target.value} : exp)
        setExperiences(newExps)
        break;
      case "start-date":
        newExps = experiences.map(exp => exp.id === e.target.parentNode.id ? {...exp, startDate: e.target.value} : exp)
        setExperiences(newExps)
        break;
      case "end-date":
        newExps = experiences.map(exp => exp.id === e.target.parentNode.id ? {...exp, endDate: e.target.value} : exp)
        setExperiences(newExps)
        break;
    }
  }

  function handleNewEduc(){
    setEducations([...educations, {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      id: crypto.randomUUID()
    }])
  }

  function handleNewExp(){
    setExperiences([...experiences, {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      id: crypto.randomUUID()
    }])
  }

  function handleDelEduc(e){
    setEducations(educations.filter(educ => educ.id !== e.target.parentNode.id))
  }

  function handleDelExp(e){
    setExperiences(experiences.filter(exp => exp.id !== e.target.parentNode.id))
  }

  return (
    <>
      <div className="forms">
        <GeneralForm info={info} onChange={handleInfoChange}/>
        <EducForm educs={educations} onChange={handleEducChange} onAddEduc={handleNewEduc} onDelEduc={handleDelEduc}/>
        <ExpForm exps={experiences} onChange={handleExpChange} onAddExp={handleNewExp} onDelExp={handleDelExp}/>
      </div>
      <div className="cv">
        <CV info={info} educations={educations} experiences={experiences}/>
      </div>
    </>
  )
}

export default App
