function EducEntry({education}){
    return(
        <>
            <h2>{education.school}</h2>
            <h3>{education.startDate} - {education.endDate}</h3>
            <p>{education.degree}</p>
        </>
    )
}

export default EducEntry