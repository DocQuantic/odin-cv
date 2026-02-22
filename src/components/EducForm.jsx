import EducCard from "./EducCard"

function EducForm({educs, onChange}){

    return (
        <>
            <h1>Education</h1>
            <ul>
                {educs.map(educ => <EducCard education={educ} onChange={onChange}/>)}
            </ul>
            <button>Add New</button>
        </>
    )
}

export default EducForm