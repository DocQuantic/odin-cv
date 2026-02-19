import EducCard from "./EducCard"

function EducForm({educs}){

    return (
        <>
            <h1>Education</h1>
            {educs.map(educ => <EducCard 
                school={educ.school} degree={educ.degree} startDate={educ.startDate} endDate={educ.endDate}/>)}
        </>
    )
}

export default EducForm