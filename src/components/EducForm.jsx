import EducCard from "./EducCard"

function EducForm({educs}){

    return (
        <>
            <h1>Education</h1>
            <ul>
                {educs.map(educ => <EducCard {...educ} />)}
            </ul>
            <button>Add New</button>
        </>
    )
}

export default EducForm