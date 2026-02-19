import './App.css'
import GeneralForm from './components/GeneralForm'
import EducForm from './components/EducForm'
import ExpForm from './components/ExpForm'

function App() {
  let experiences = [
    {
      company: "comp1",
      position: "pos1",
      startDate: "start1",
      endDate: "end1",
      description: "descr1"
    },
    {
      company: "comp2",
      position: "pos2",
      startDate: "start2",
      endDate: "end2",
      description: "descr2"
    }
  ] 

  let educations = [
    {
      school: "school1",
      degree: "deg1",
      startDate: "start1",
      endDate: "end1"
    },
    {
      school: "school2",
      degree: "deg2",
      startDate: "start2",
      endDate: "end2"
    }
  ]

  return (
    <>
      <div className="forms">
        <GeneralForm/>
        <EducForm educs={educations}/>
        <ExpForm exps={experiences}/>
      </div>
    </>
  )
}

export default App
