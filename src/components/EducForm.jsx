import EducCard from "./EducCard"

function EducForm({educs, onChange, onAddEduc, onDelEduc}){

    return (
        <>
            <h1>Education</h1>
            <ul>
                {educs.map(educ => <EducCard education={educ} onChange={onChange} onDel={onDelEduc}/>)}
            </ul>
            <button onClick={onAddEduc}>Add New</button>
        </>
    )
}

export default EducForm